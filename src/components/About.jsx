import { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";

const aboutImage = "/assets/about-image.png";
const MotionDiv = motion.div;
const MotionH2 = motion.h2;

const About = () => {
  const [activeSection, setActiveSection] = useState("education");
  const [showAll, setShowAll] = useState(false);
  const { data, loading, error } = usePortfolioData();
  const bio = data?.bio || "";
  const certifications = data?.certifications || [];
  const education = data?.education || [];
  const interest = data?.interest || {};
  const acheivments = data?.acheivments || data?.achievements || [];

  return (
    <div id="about" className="bg-gray-950 text-white py-16">
      <MotionH2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        About Me
      </MotionH2>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-start">
        <MotionDiv
          className="w-full md:w-1/3 flex justify-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutImage}
            alt="About"
            className="rounded-2xl shadow-lg object-contain border border-gray-800"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </MotionDiv>

        <MotionDiv
          className="md:w-2/3 w-full"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
        >
          {loading && !bio ? (
            <p className="text-gray-400">Loading profile...</p>
          ) : (
            <p className="text-gray-300 whitespace-pre-line">{bio}</p>
          )}

          {error && !data && (
            <p className="mt-4 text-sm text-red-400">
              Portfolio data could not be loaded right now.
            </p>
          )}

          <div className="mt-6 flex gap-3 flex-wrap">
            {["education", "certifications", "Achievements", "interest"].map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-5 py-2 text-sm rounded-full transition ${
                  activeSection === key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeSection === "education" && (
              <div className="relative">
                <div className="absolute left-2 md:left-1/4 top-0 h-full w-[2px] bg-gray-800"></div>

                {education.map((edu, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row gap-6 mb-10">
                    <div className="absolute left-0 md:left-1/4 transform md:-translate-x-1/2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950"></div>
                    </div>

                    <div className="md:w-1/4 text-gray-400 text-sm md:text-right pr-6">
                      {edu?.duration}
                    </div>

                    <div
                      className="md:w-3/4 bg-gray-900 border border-gray-800 rounded-2xl p-5 
                      hover:shadow-xl hover:scale-[1.02] transition"
                    >
                      <h3 className="text-lg font-semibold">{edu?.degree}</h3>

                      <p className="text-gray-400 mt-1">{edu?.college}</p>

                      <p className="text-blue-400 font-medium mt-2">{edu?.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "certifications" && (
              <>
                <ul className="space-y-4">
                  {certifications
                    .slice(0, showAll ? certifications.length : 4)
                    .map((cer, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4 hover:shadow-lg transition"
                      >
                        {cer?.issuerLogo && (
                          <img
                            src={cer.issuerLogo}
                            alt=""
                            className="w-12 h-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        )}

                        <div className="flex-1">
                          <h3 className="font-semibold">{cer?.name}</h3>
                          <p className="text-sm text-gray-400">{cer?.issuer}</p>
                        </div>

                        {cer?.link && (
                          <a
                            href={cer.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 text-sm hover:underline"
                          >
                            View -&gt;
                          </a>
                        )}
                      </li>
                    ))}
                </ul>

                {certifications.length > 4 && (
                  <div className="text-center mt-4">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="text-blue-400 hover:text-pink-400 underline"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </>
            )}

            {activeSection === "Achievements" && (
              <ul className="space-y-3">
                {acheivments.map((item, index) => (
                  <li key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-3">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {activeSection === "interest" && (
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {interest?.title}
                </h3>

                <p className="text-gray-400 mb-4">{interest?.description}</p>

                <ul className="space-y-2">
                  {(interest?.items || []).map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-300"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default About;
