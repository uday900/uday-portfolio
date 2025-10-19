import React, { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "../data";


const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div id="experience" className="bg-gray-100">
      <div className=" max-w-4xl mx-auto px-6 py-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
          className="text-3xl font-bold mb-4 text-center">Experience</motion.h2>
        {experience.slice(0, showAll ? experience.length  : 3).map((exp, index) => (
          <div
            key={index}

            className="flex flex-col md:flex-row items-start  gap-6 mb-8"
          >
            {/* Left Side: Date */}
            <motion.div className="md:w-1/4 text-gray-400 font-semibold text-sm md:text-right"

              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}

              transition={{ duration: 0.5, delay: index * 0.3 }}

            >
              {exp.duration}
            </motion.div>

            {/* Right Side: Company, Role, Details */}
            <motion.div className="md:w-3/4  px-5 pb-4 rounded-lg shadow-lg "

              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}

              transition={{ duration: 0.5, delay: index * 0.3 }}

            >
              <h3 className="text-lg font-bold ">{exp.company_name}</h3>
              <p className="text-sm font-semibold">{exp.role}</p>
              <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-black text-xs text-white rounded-full hover:bg-pink-400 hover:text-black hover:scale-105 duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
        <div className='text-center'>
          <button onClick={() => setShowAll(!showAll)}
            className='cursor-pointer hover:text-pink-400 underline'>{showAll ? <>Show Less</> : <>Show More</>}</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
