import React from "react";
import { motion } from "framer-motion";
import { FaCss3, FaDocker, FaGit, FaHtml5, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiMysql, SiSpringboot, SiTailwindcss } from "react-icons/si";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";


const skills = [
  { name: "Java", icon: <FaJava color="#007396" />, delay: 0 },
  { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" />, delay: 0.2 },
  { name: "React", icon: <FaReact color="#61DAFB" />, delay: 0.4 },
  { name: "SQL", icon: <SiMysql color="#4479A1" />, delay: 0.6 },
  { name: "PostgreSQL", icon: <BiLogoPostgresql color="#336791" />, delay: 0.7 },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" />, delay: 0.8 },
  { name: "CSS", icon: <FaCss3 color="#1572B6" />, delay: 1.0 },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, delay: 1.2 },
  { name: "Tailwind", icon: <SiTailwindcss color="#38B2AC" />, delay: 1.4 },
  { name: "Python", icon: <FaPython color="#3776AB" />, delay: 1.6 },
  { name: "Excel", icon: <BsFileEarmarkExcelFill color="#217346" />, delay: 2.0 },
  { name: "Git/GitHub", icon: <FaGit  color="#F05032"/>, delay: 2.2 },
  { name: "Docker", icon: <FaDocker color="#2496ED"/>, delay: 2.4 },
 
];

const SkillsWave = () => {
  
  return (
    <div id="skills" className="bg-gray-100 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.9 }}
        className="text-3xl font-bold mb-4 text-center">Technologies</motion.h2>


      <div className="flex flex-wrap justify-center items-center gap-6 py-6 overflow-hidden">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-white text-lg"
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0, 12, 0] }} // Smoother wave motion
            transition={{
              duration: 3, // Slower for a smoother effect
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror", // Ensures a natural back-and-forth motion
              delay: skill.delay, // Delayed effect for wave
            }}
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="mt-2 text-sm text-gray-950">{skill.name}</p>
          </motion.div>

        ))}
      </div>
    </div>
  );
};

export default SkillsWave;
