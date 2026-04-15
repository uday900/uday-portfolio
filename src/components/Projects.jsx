// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { projects } from '../data'
// import { FaExternalLinkAlt } from 'react-icons/fa'
// import { PiLineVerticalBold } from "react-icons/pi";

// function Projects() {
//   const [showAll, setShowAll] = useState(false);
//   const [showAllSkills, setShowAllSkills] = useState(false);
//   return (
//     <div id='projects' >
//       <div className="bg-gray-100">
//         <div className=" max-w-4xl mx-auto px-6 py-10 ">
//           <motion.h2
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.9 }}
//             className="text-3xl font-bold mb-4 text-center">Projects</motion.h2>


//           {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
//             <div
//               key={index} className="flex flex-col md:flex-row items-start  gap-6 mb-10"
//             >

//               {/* Left Side: Date */}
//               <motion.div className="md:w-1/4 text-gray-400 font-semibold text-sm md:text-right"

//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5, delay: index * 0.3 }}

//               >
//                 {/* {project.image} */}
//                 <img src={project.image} alt="img" className="object-cover" />
//               </motion.div>

//               {/* Right Side: Company, Role, Details */}
//               <motion.div className="md:w-3/4  px-5 pb-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"

//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: 200 }}

//                 transition={{ duration: 0.5, delay: index * 0.3 }}

//               >
//                 <h3 className="text-lg font-bold ">{project.name}</h3>
//                 <p className="text-sm font-semibold">{project.duration && project.duration}</p>
//                 <ul className="mt-2 text-sm list-disc list-inside space-y-1">
//                   {project.points.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>

//                 {/* Skills */}
//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {project.skills.slice(0, showAllSkills ? project.skills.length : 5).map((skill, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-black text-xs text-white rounded-full hover:bg-pink-400 hover:text-black hover:scale-105 duration-300 cursor-pointer"
//                     >
//                       {skill}
//                     </span>
//                   ))}

//                   {project.skills.length > 5 && !showAllSkills && (
//                     <span
//                       onClick={() => setShowAllSkills(true)}
//                       className="px-3 py-1 bg-black text-xs text-white rounded-full hover:bg-pink-400 hover:text-black hover:scale-105 duration-300 cursor-pointer"
//                     >
//                       +{project.skills.length - 5} more skills
//                     </span>
//                   )}

//                   {showAllSkills && project.skills.length > 5 && (
//                     <span
//                       onClick={() => setShowAllSkills(false)}
//                       className="px-3 py-1 bg-black text-xs text-white rounded-full cursor-pointer "
//                     >
//                       Show Less
//                     </span>
//                   )}
//                 </div>

//                 <div className='mt-4'>
//                   {project.link &&
//                     <a className='cursor-pointer text-blue-500 active:text-pink-400 mr-4'
//                       href={project.link} >
//                       Live Demo <FaExternalLinkAlt className='inline' />
//                     </a>
//                   }

//                   {project.git &&
//                     <a className='cursor-pointer text-blue-500 active:text-pink-400'
//                       href={project.git} >
//                       GitHub <FaExternalLinkAlt className='inline' />
//                     </a>
//                   }


//                 </div>
//               </motion.div>
//             </div>
//           ))}

//           <div className='text-center'>
//             <button onClick={() => setShowAll(!showAll)}
//               className='cursor-pointer hover:text-pink-400 underline'>{showAll ? <>Show Less</> : <>Show More</>}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Projects

import React, { useEffect, useState } from "react";
import { projects } from "../data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeMedia, setActiveMedia] = useState({ type: "video", index: 0 });
  const [showAll, setShowAll] = useState(false);
  const [carouselRunning, setCarouselRunning] = useState(false);

  useEffect(() => {
    if (!selected || activeMedia.type !== "image" || !carouselRunning) return;

    const interval = setInterval(() => {
      setActiveMedia((prev) => ({
        ...prev,
        index: (prev.index + 1) % selected.images.length,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [activeMedia.type, selected, carouselRunning]);

  return (
    <div id="projects" className="bg-gray-950 text-white py-8 px-6">

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects
          .slice(0, showAll ? projects.length : 4)
          .map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition cursor-pointer"
              onClick={() => {
                setSelected(project);
                if (project.video) {
                  setCarouselRunning(false);
                  setActiveMedia({ type: "video", index: 0 });
                } else {
                  setCarouselRunning(true);
                  setActiveMedia({ type: "image", index: 0 });
                }
              }}
            >
              <div className="h-48 overflow-hidden">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.images[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold">{project.name}</h3>

                <p className="text-xs text-gray-400 mt-1">
                  🧑‍💻 {project.role} {project.duration && <><span className="text-gray-500">•</span> 📅 {project.duration}</>}
                </p>

                <div className="text-sm text-gray-300 mt-2 space-y-1">
                  {project.impact.slice(0, 2).map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-800 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-blue-400 text-xs mt-3">
                  View Details →
                </p>
              </div>
            </motion.div>
          ))}
      </div>

      {projects.length > 4 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-400 hover:text-pink-400 underline transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 max-w-3xl w-full rounded-2xl relative max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center
                         rounded-full bg-red-400 text-white shadow-lg
                         hover:bg-red-600 transition z-50 cursor-pointer"
            >
              ✕
            </button>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto max-h-[90vh]">

              <div className="mb-4">
                {selected.video && activeMedia.type === "video" ? (
                  <video
                    src={selected.video}
                    controls
                    className="w-full rounded-lg"
                  />
                ) : (
                  <div className="overflow-hidden relative w-full h-[300px]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeMedia.index}
                        src={selected.images[activeMedia.index]}
                        className="absolute w-full h-full object-contain rounded-lg"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => setCarouselRunning(false)}
                        onMouseLeave={() => setCarouselRunning(true)}
                      />
                    </AnimatePresence>
                  </div>
                )}

                <div className="flex gap-2 mt-3">
                  {selected.video && (
                    <button
                      onClick={() =>
                        setActiveMedia({ type: "video", index: 0 })
                      }
                      className={`text-xs px-2 py-1 rounded ${activeMedia.type === "video"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-800"
                        }`}
                    >
                      🎥 Video
                    </button>
                  )}

                  {selected.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      onClick={() =>
                        setActiveMedia({ type: "image", index: i })
                      }
                      className={`w-14 h-10 object-cover cursor-pointer rounded border-2 ${activeMedia.type === "image" &&
                          activeMedia.index === i
                          ? "border-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                          : "border-gray-700"
                        }`}
                      onMouseEnter={() => setCarouselRunning(false)}
                      onMouseLeave={() => setCarouselRunning(true)}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {selected.name}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                🧑‍💻 {selected.role} {selected?.duration && <><span className="text-gray-500">•</span> 📅 {selected.duration}</>}
              </p>

              <p className="text-gray-300 mb-4">
                {selected.description}
              </p>

              <div className="mb-4">
                <h4 className="text-blue-400 font-semibold mb-1">Features</h4>
                <ul className="list-disc ml-5 text-gray-300">
                  {selected.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-pink-400 font-semibold mb-1">Challenges</h4>
                <ul className="list-disc ml-5 text-gray-300">
                  {selected.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-4">
                {selected.live && (
                  <a
                    href={selected.live}
                    className="text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live <FaExternalLinkAlt className="inline ml-1" />
                  </a>
                )}
                {selected.github && (
                  <a
                    href={selected.github}
                    className="text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <FaGithub className="inline ml-1" />
                  </a>
                )}
                {selected.blog && (
                  <a
                    href={selected.blog}
                    className="text-pink-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;