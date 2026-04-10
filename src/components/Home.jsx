import { useState, useEffect } from "react";
import { contact, fullName, resumeLink } from "../data";
import { motion } from "framer-motion";
const profileImage = "/assets/profile.jpg";

const HeroSection = () => {
    const designations = ["Fullstack Developer", "Java Developer", "Backend Developer", "Frontend Developer"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);


    useEffect(() => {
        const currentText = designations[index];

        let timeout;

        if (!isDeleting && charIndex < currentText.length) {
            timeout = setTimeout(() => {
                setText(currentText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }, 80);
        }
        else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(currentText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            }, 40);
        }
        else if (!isDeleting && charIndex === currentText.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1200); // ⏸ pause
        }
        else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex(prev => (prev + 1) % designations.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <section id="home"
            className="p-8  bg-gray-100 flex flex-col-reverse md:flex-row items-center justify-around  md:p-32 min-h-screen mt-16 md:mt-0 ">
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.9 }}


                className="text-center md:text-left max-w-lg">
                <h1 className="text-4xl font-bold text-gray-900">
                    Hi There, <br /> I'm <span className="text-blue-500">{fullName}</span>
                </h1>
                <p className="text-lg font-semibold mt-2 text-gray-700">
                    I Am a <span className="bg-gradient-to-r from-pink-700 to-red-500 text-transparent bg-clip-text">
                        {text}
                        <span className="blink">|</span>
                    </span>
                </p>
                <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center  px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg"
                >
                    View Resume
                </a>
                <div className="flex mt-6 justify-center md:justify-start ">

                    {contact.socialLinks
                        .filter(item => ["linkedin", "github", "leetcode", "upwork", "geeeksforgeeks", "medium"].includes(item.name))
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
                                    className="w-14 h-14 flex items-center justify-center hover:scale-110 transition"
                                >
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center ">
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="max-w-[55%] max-h-[55%] object-contain"
                                        />
                                    </div>
                                </a>
                                {hoveredIndex === i && (
                                    <div className="absolute top-full mt-2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap">
                                        {item.display}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </motion.div>
            <motion.div

                className="w-64 h-64 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0] }} // Moves up and down
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} // Smooth infinite animation

            >
                <img src={profileImage} alt="Profile" className="rounded-full bg-yellow-400 flex items-center justify-center shadow-lg object-cover" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
