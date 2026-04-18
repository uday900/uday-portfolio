import { useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const { data, loading, error } = usePortfolioData();
  const experience = data?.experience || [];

  return (
    <div id="experience" className="bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <MotionH2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Experience
        </MotionH2>

        {loading && experience.length === 0 && (
          <p className="text-center text-gray-400">Loading experience...</p>
        )}

        {error && experience.length === 0 && (
          <p className="text-center text-sm text-red-400">
            Experience data could not be loaded right now.
          </p>
        )}

        <div className="relative">
          {experience.length > 0 && (
            <div className="absolute left-2 md:left-1/4 top-0 h-full w-[2px] bg-gray-800"></div>
          )}

          {experience
            .slice(0, showAll ? experience.length : 3)
            .map((exp, index) => {
              const points = exp?.points || [];
              const skills = exp?.skills || [];

              return (
                <div key={index} className="relative flex flex-col md:flex-row gap-6 mb-12">
                  <div className="absolute left-0 md:left-1/4 transform md:-translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950 shadow-lg"></div>
                  </div>

                  <MotionDiv
                    className="md:w-1/4 text-gray-400 text-sm md:text-right pr-6"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {exp?.duration}
                  </MotionDiv>

                  <MotionDiv
                    className="md:w-3/4 bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold">
                      {exp?.role}{" "}
                      {exp?.company_name && (
                        <span className="text-blue-400">@ {exp.company_name}</span>
                      )}
                    </h3>

                    {points.some((point) => point?.toLowerCase().includes("promoted")) && (
                      <p className="text-green-400 text-sm mt-1">Promoted during tenure</p>
                    )}

                    <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                      {points.slice(0, 3).map((point, i) => (
                        <li key={i}>- {point}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </MotionDiv>
                </div>
              );
            })}
        </div>

        {experience.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-400 hover:text-pink-400 underline transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
