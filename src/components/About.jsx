import { act, useState } from "react";
import { bio, certifications, education, interests, others } from "../data";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import aboutImage from "../assets/about-image.png"
const About = () => {


    // State to track active section
    const [activeSection, setActiveSection] = useState("education");
    const [showAll, setShowAll] = useState(false);

    return (
        <div id="about" className="mb-10 min-h-screen">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.9 }}
                className="text-3xl font-bold mb-4 text-center">About</motion.h2>


            <div 
                className=" 
                bg-gray-100 flex flex-col md:flex-row
                 items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 p-6 md:px-32">
                {/* Left Side - Image */}

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.9 }}

                    className="w-[100%] md:w-1/3  flex justify-center ">
                    <img
                        src={aboutImage} // Replace with your actual image
                        alt="About Image"
                        className="w-[100%] rounded-lg shadow-lg object-contain"
                    />
                </motion.div>

                {/* Right Side - Content */}
                <motion.div className="md:w-2/3 w-full "
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.9 }}>

                    <p className="text-gray-700 ">{bio}</p>
                    {/* Buttons */}
                    <div className="mt-4 space-x-4 space-y-2 md:space-y-0 mb-4 grid-cols-2 md:grid-cols-4">
                        {["education", "certifications", "interests", "others"].map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={`inline-flex items-center px-6 py-2  font-semibold text-sm rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer
                                ${activeSection === key
                                        ? "bg-blue-600  shadow-blue-500/50 text-white"
                                        : "bg-gray-200 hover:bg-gray-300 shadow-gray-500/50 text-black"
                                    }`}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Display Content */}
                    <p className="mt-6 text-gray-700 w-full">
                        {activeSection === "education" && <>
                            <ul className="list-disc pl-6 ">
                                {education.map((edu, index) => (
                                    // change bullets
                                    <li key={index} className="">
                                        <h3 className="font-semibold">{edu.degree} <span className="text-sm ml-6 text-slate-500">- {edu.duration}</span></h3>
                                        <p className="text-gray-600">{edu.college}</p>
                                        <p className="text-gray-600">{edu.grade}</p>
                                    </li>
                                ))}
                            </ul>
                        </>}

                        {activeSection === "certifications" && <>
                            <ul className="list-disc pl-6 ">
                                {certifications.slice(0, showAll ? certifications.length - 1 : 4).map((cer, index) => (
                                    // change bullets
                                    <li key={index} className="">
                                        <h3 className="font-semibold">{cer.name} </h3>
                                        <span className="text-sm ">- issued by {cer.issuer}</span> 
                                        { cer.link && <a href={cer.link} ><FaLink className="inline mx-2 text-blue-600" /></a>}
                                    </li>
                                ))}
                            </ul>
                            <div className='text-center'>
                                <button onClick={() => setShowAll(!showAll)}
                                    className='cursor-pointer hover:text-pink-400 underline'>{showAll ? <>Show Less</> : <>Show More</>}</button>
                            </div>

                            {/* <span onClick={() => setShowAll(!showAll)}
                                className="text-pink-500 text-sm cursor-pointer">
                                {certifications.length > 4 && showAll ? <>Show Less</> : <>Show All</>}
                            </span> */}
                        </>}
                        {activeSection === "interests" && <>
                            <ul className="list-disc pl-6 ">
                                {interests.map((cer, index) => (
                                    // change bullets
                                    <li key={index} className="">
                                        <h3 className="font-semibold">{cer} </h3>
                                        {/* <span className="text-sm ml-6">- issued by {cer.issuer}</span> <a href={cer.link} ><FaLink className="inline mx-2 text-blue-600" /></a> */}
                                    </li>
                                ))}
                            </ul>

                        </>}

                        {activeSection === "others" && <>
                            <ul className="list-disc pl-6 ">
                                {others.map((cer, index) => (
                                    // change bullets
                                    <li key={index} className="">
                                        <h3 className="font-semibold">{cer} sdf</h3>
                                    </li>
                                ))}
                            </ul>


                        </>}



                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
