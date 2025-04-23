import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import image from '../assets/ems.png'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { PiLineVerticalBold } from "react-icons/pi";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  return (
    <div id='projects' >
      <div className="bg-gray-100">
        <div className=" max-w-4xl mx-auto px-6 py-10 ">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.9 }}
            className="text-3xl font-bold mb-4 text-center">Projects</motion.h2>


          {projects.slice(0, showAll ? projects.length  : 4).map((project, index) => (
            <div
              key={index} className="flex flex-col md:flex-row items-start  gap-6 mb-8"
            >
              
              {/* Left Side: Date */}
              <motion.div className="md:w-1/4 text-gray-400 font-semibold text-sm md:text-right"

                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}

              >
                {/* {project.image} */}
                <img src={project.image} alt="img" className="object-cover" />
              </motion.div>

              {/* Right Side: Company, Role, Details */}
              <motion.div className="md:w-3/4  px-5 pb-4 rounded-lg shadow-lg "

                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 200 }}

                transition={{ duration: 0.5, delay: index * 0.3 }}

              >
                <h3 className="text-lg font-bold ">{project.name}</h3>
                <p className="text-sm font-semibold">{project.duration && project.duration}</p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.skills.slice(0, showAllSkills ? project.skills.length : 5).map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black text-xs text-white rounded-full"
                    >
                      {skill}
                    </span>
                  ))}

                  {project.skills.length > 5 && !showAllSkills && (
                    <span
                      onClick={() => setShowAllSkills(true)}
                      className="px-3 py-1 bg-black text-xs text-white rounded-full cursor-pointer"
                    >
                      +{project.skills.length - 5} more skills
                    </span>
                  )}

                  { showAllSkills && project.skills.length > 5 && (
                    <span
                      onClick={() => setShowAllSkills(false)}
                      className="px-3 py-1 bg-black text-xs text-white rounded-full cursor-pointer"
                    >
                      Show Less
                    </span>
                  )}
                </div>

                <div className='mt-4'>
                  {project.link &&
                    <a className='cursor-pointer text-blue-500 active:text-pink-400 mr-4'
                      href={project.link} >
                      Project Link <FaExternalLinkAlt className='inline' />
                    </a>
                  }

                  {project.git &&
                    <a className='cursor-pointer text-blue-500 active:text-pink-400'
                      href={project.git} >
                      GitHub Link <FaExternalLinkAlt className='inline' />
                    </a>
                  }


                </div>
              </motion.div>
            </div>
          ))}

          <div className='text-center'>
            <button onClick={()=> setShowAll(!showAll)}
              className='cursor-pointer hover:text-pink-400 underline'>{showAll ? <>Show Less</> : <>Show More</> }</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects