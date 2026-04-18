import { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { iconMap } from "../utils/iconMap";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [success, setSuccess] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const { data, loading: dataLoading, error: dataError } = usePortfolioData();
  const contact = data?.contact || {};
  const socialLinks = contact?.socialLinks || [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return setError("All fields are required");
    }

    if (form.message.length < 5) {
      return setError("Message must be at least 5 characters");
    }

    setError("");
    setSuccess("");
    setFormLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwRwo4iauv0nX3LLZtjLmg0V76HtMN88Pt50qBdXQTLW21Qrrkr9mzc2mzqoMHALiV0/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            name: form.name,
            mail: form.email,
            message: form.message,
          }),
        },
      );

      const result = await response.json();
      if (result.result === "success") {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(""), 4000);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Failed to send message");
    }

    setFormLoading(false);
  };

  return (
    <div id="contact" className="bg-gray-950 text-white py-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-pink-900/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <MotionH2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </MotionH2>

        <div className="grid md:grid-cols-2 gap-12">
          <MotionDiv
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="mb-6 text-gray-400">
              {dataLoading && !data ? "Loading contact details..." : "Explore my profile in..."}
            </p>

            {dataError && !data && (
              <p className="mb-6 text-sm text-red-400">
                Contact data could not be loaded right now.
              </p>
            )}

            <div className="flex gap-5 mb-10 flex-wrap">
              {socialLinks
                .filter((item) =>
                  ["naukri", "instagram", "twitter", "telegram"].includes(item?.name),
                )
                .map((item, i) => {
                  const Icon = iconMap[item?.icon];

                  return (
                    <div
                      key={item?.name || i}
                      className="relative"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <a
                        href={item?.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-full 
                      bg-gray-900 border border-gray-800 
                      hover:bg-blue-500 hover:text-white transition 
                      text-gray-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                      >
                        {Icon ? (
                          <Icon className="w-6 h-6" />
                        ) : item?.customIcon ? (
                          <img
                            src={item.customIcon}
                            alt=""
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : null}
                      </a>

                      {hoveredIndex === i && (
                        <div className="absolute top-full mt-2 px-2 py-1 bg-gray-800 text-xs rounded">
                          {item?.display}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
              <h3 className="mb-4 font-semibold text-blue-400">Contact Details</h3>

              {contact?.email && <p className="mb-2 text-gray-300">Email: {contact.email}</p>}
              {contact?.mobile && <p className="mb-2 text-gray-300">Phone: {contact.mobile}</p>}
              {contact?.town && <p className="text-gray-400">{contact.town}</p>}
              {contact?.city && <p className="text-gray-400">{contact.city}</p>}
              {(contact?.state || contact?.zip || contact?.country) && (
                <p className="text-gray-400">
                  {contact?.state}
                  {contact?.zip ? ` - ${contact.zip}` : ""}
                  {contact?.country ? `, ${contact.country}` : ""}
                </p>
              )}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-gray-800 text-white p-3 rounded-md outline-none 
                focus:ring-2 focus:ring-blue-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Your Email *"
                className="bg-gray-800 text-white p-3 rounded-md outline-none 
                focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <textarea
                rows="5"
                placeholder="Your Message *"
                className="bg-gray-800 text-white p-3 rounded-md outline-none 
                focus:ring-2 focus:ring-blue-500"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-green-400 text-sm">{success}</p>}

              <button
                type="submit"
                disabled={formLoading}
                className="bg-blue-600 text-white py-2 px-6 rounded-full w-fit 
                hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
                transition disabled:opacity-50"
              >
                {formLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
