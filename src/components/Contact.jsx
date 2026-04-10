import { useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { contact } from "../data";

const naukri = "/assets/naukri.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwRwo4iauv0nX3LLZtjLmg0V76HtMN88Pt50qBdXQTLW21Qrrkr9mzc2mzqoMHALiV0/exec", {
        method: "POST",
        body: new URLSearchParams({
          name: form.name,
          mail: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (data.result === "success") {
        setSuccess("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccess("");
        }, 4000);
      } else {
        setError("❌ Something went wrong. Try again.");
      }

    } catch (err) {
      setError("❌ Failed to send message");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto p-8">

        {/* Title */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ===== LEFT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pl-2"
          >
            <p className="mb-6 text-gray-600">
              Explore my profile in...
            </p>

            <div className="flex gap-6 mb-10">
              {contact.socialLinks
                .filter(item =>
                  ["naukri", "instagram", "twitter", "telegram"].includes(item.name)
                )
                .map((item, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="max-w-[55%] max-h-[55%] object-contain"
                      />
                    </a>
                    {hoveredIndex === i && (
                      <div className="absolute top-full mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap">
                        {item.display}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Contact Details Box */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="mb-4 font-semibold">Contact details</h3>

              <p className="mb-2">📧 {contact.email}</p>
              <p className="mb-2">📞 {contact.mobile}</p>
              <p>{contact.town}</p>
              <p>{contact.city}</p>
              <p>
                {contact.state} - {contact.zip}, {contact.country}
              </p>
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE ===== */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Your Name *"
                className="bg-gray-100 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Your Email *"
                className="bg-gray-100 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <textarea
                placeholder="Your Message *"
                rows="5"
                className="bg-gray-100 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              {success && (
                <p className="text-green-600 text-sm">{success}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white py-2 px-6 w-fit rounded-full hover:bg-blue-600 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}