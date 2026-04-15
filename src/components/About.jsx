// import { act, useState } from "react";
// import { bio, certifications, education, interest, acheivments } from "../data";
// import { FaLink } from "react-icons/fa";
// import { motion } from "framer-motion";
// const aboutImage = "/assets/about-image.png";
// const About = () => {


//     // State to track active section
//     const [activeSection, setActiveSection] = useState("certifications");
//     const [showAll, setShowAll] = useState(false);

//     return (
//         <div id="about" className="mb-10 min-h-screen">
//             <motion.h2
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: -50 }}
//                 transition={{ duration: 0.9 }}
//                 className="text-3xl font-bold mb-4 text-center">About me</motion.h2>


//             <div
//                 className=" 
//                 bg-gray-100 flex flex-col md:flex-row
//                  items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 p-6 md:px-32">
//                 {/* Left Side - Image */}

//                 <motion.div
//                     whileInView={{ opacity: 1, x: 0 }}
//                     initial={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.9 }}

//                     className="w-[100%] md:w-1/3  flex justify-center ">
//                     <img
//                         src={aboutImage} // Replace with your actual image
//                         alt="About Image"
//                         className="w-[100%] rounded-lg shadow-lg object-contain"
//                     />
//                 </motion.div>

//                 {/* Right Side - Content */}
//                 <motion.div className="md:w-2/3 w-full "
//                     whileInView={{ opacity: 1, x: 0 }}
//                     initial={{ opacity: 0, x: 100 }}
//                     transition={{ duration: 0.9 }}>

//                     <p className="text-gray-700  whitespace-pre-line">{bio}</p>

//                     {/* Buttons */}
//                     <div className="mt-4 mb-4 overflow-x-auto">
//                         <div className="flex space-x-4">
//                             {["education", "certifications", "Achievements", "interest"].map((key) => (
//                                 <button
//                                     key={key}
//                                     onClick={() => setActiveSection(key)}
//                                     className={`flex-shrink-0 inline-flex items-center px-6 py-2 font-semibold text-sm rounded-full  hover:bg-blue-700 transition cursor-pointer
//                     ${activeSection === key
//                                             ? "bg-blue-600 shadow-blue-500/50 text-white"
//                                             : "bg-gray-200 hover:bg-gray-300 shadow-gray-500/50 text-black"
//                                         }`}
//                                 >
//                                     {key.charAt(0).toUpperCase() + key.slice(1)}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>


//                     {/* Display Content */}
//                     <p className="mt-6 text-gray-700 w-full">
//                         {activeSection === "education" && (
//                             <ul className="list-disc pl-6 marker:text-blue-500" >
//                                 {education.map((edu, index) => (
//                                     <li key={index} >
//                                         <h4 className="font-semibold ">
//                                             {edu.degree}
//                                             <span className="text-sm ml-4 text-slate-500">- {edu.duration}</span>
//                                         </h4>
//                                         <p className="text-gray-600 italic">{edu.college}</p>
//                                         <p className="text-gray-700 font-medium">{edu.grade}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}


//                         {activeSection === "certifications" && <>
//                             <ul className="list-disc pl-6 marker:text-blue-500 ">
//                                 {certifications.slice(0, showAll ? certifications.length : 4).map((cer, index) => (
                                
//                                     <li key={index} className="flex items-start gap-3 mb-3">

//                                         <img
//                                             src={cer.issuerLogo}
//                                             alt=""
//                                             className="w-12 h-12 object-contain mt-1"
//                                         />

//                                         <div className="flex-1">
//                                             <h3 className="font-semibold leading-tight">
//                                                 {cer.name}
//                                             </h3>

//                                             <span className="text-sm text-gray-500">
//                                                 Issued by {cer.issuer}
//                                             </span>
//                                         </div>

//                                         {cer.link && (
//   <a
//     href={cer.link}
//     target="_blank"
//     rel="noreferrer"
//     className="text-sm text-blue-600 font-medium hover:underline whitespace-nowrap"
//   >
//     <span className="hidden sm:inline">View Certificate →</span>
//     <span className="sm:hidden">View →</span>
//   </a>
// )}
//                                     </li>
//                                 ))}
//                             </ul>
//                             <div className='text-center'>
//                                 <button onClick={() => setShowAll(!showAll)}
//                                     className='cursor-pointer hover:text-pink-400 underline'>{showAll ? <>Show Less</> : <>Show More</>}</button>
//                             </div>
//                         </>}

//                         {activeSection === "Achievements" && <>
//                             <ul className="list-disc pl-6 marker:text-blue-500 ">
//                                 {acheivments.map((cer, index) => (
//                                     // change bullets
//                                     <li key={index} className="">
//                                         {cer}
//                                     </li>
//                                 ))}
//                             </ul>


//                         </>}

//                         {activeSection === "interest" && <>
//                             <section className="text-gray-800">
//                                 <h2 className="text-2xl font-bold mb-2 text-blue-600">
//                                     {interest.title}
//                                 </h2>
//                                 <p className="text-gray-600 mb-4">{interest.description}</p>

//                                 <ul className="pl-6 list-disc marker:text-blue-600 space-y-2">
//                                     {interest.items.map((item, index) => (
//                                         <li
//                                             key={index}
//                                             className="leading-relaxed"
//                                             dangerouslySetInnerHTML={{ __html: item }}
//                                         />
//                                     ))}
//                                 </ul>
//                             </section>

//                         </>}






//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default About;

import { useState } from "react";
import { bio, certifications, education, interest, acheivments } from "../data";
import { motion } from "framer-motion";

const aboutImage = "/assets/about-image.png";

const About = () => {
  const [activeSection, setActiveSection] = useState("education");
  const [showAll, setShowAll] = useState(false);

  return (
    <div id="about" className="bg-gray-950 text-white py-16">

      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-start">

        {/* LEFT IMAGE */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -80 }}
        >
          <img
            src={aboutImage}
            alt="About"
            className="rounded-2xl shadow-lg object-contain border border-gray-800"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="md:w-2/3 w-full"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 80 }}
        >
          <p className="text-gray-300 whitespace-pre-line">{bio}</p>

          {/* TABS */}
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

          {/* CONTENT */}
          <div className="mt-8">

            {/* 🎓 EDUCATION TIMELINE */}
            {activeSection === "education" && (
              <div className="relative">

                {/* Line */}
                <div className="absolute left-2 md:left-1/4 top-0 h-full w-[2px] bg-gray-800"></div>

                {education.map((edu, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row gap-6 mb-10">

                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/4 transform md:-translate-x-1/2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950"></div>
                    </div>

                    {/* Duration */}
                    <div className="md:w-1/4 text-gray-400 text-sm md:text-right pr-6">
                      {edu.duration}
                    </div>

                    {/* Card */}
                    <div className="md:w-3/4 bg-gray-900 border border-gray-800 rounded-2xl p-5 
                      hover:shadow-xl hover:scale-[1.02] transition">

                      <h3 className="text-lg font-semibold">
                        {edu.degree}
                      </h3>

                      <p className="text-gray-400 mt-1">
                        {edu.college}
                      </p>

                      <p className="text-blue-400 font-medium mt-2">
                        {edu.grade}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 📜 CERTIFICATIONS */}
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
                        <img
                          src={cer.issuerLogo}
                          alt=""
                          className="w-12 h-12 object-contain"
                        />

                        <div className="flex-1">
                          <h3 className="font-semibold">{cer.name}</h3>
                          <p className="text-sm text-gray-400">
                            {cer.issuer}
                          </p>
                        </div>

                        <a
                          href={cer.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-400 text-sm hover:underline"
                        >
                          View →
                        </a>
                      </li>
                    ))}
                </ul>

                <div className="text-center mt-4">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-blue-400 hover:text-pink-400 underline"
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                </div>
              </>
            )}

            {/* 🏆 ACHIEVEMENTS */}
            {activeSection === "Achievements" && (
              <ul className="space-y-3">
                {acheivments.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* 🎯 INTEREST */}
            {activeSection === "interest" && (
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {interest.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {interest.description}
                </p>

                <ul className="space-y-2">
                  {interest.items.map((item, index) => (
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;