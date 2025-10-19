import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDev, FaTelegram, FaArrowCircleDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { contact, fullName } from "../data";
import { motion } from "framer-motion";
import profileImage from '../assets/profile.jpg'

const HeroSection = () => {
    const designations = ["Fullstack Developer", "Java Developer", "Backend Developer", "Frontend Developer"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const socialIcons = {
        linkedin: FaLinkedin,
        github: FaGithub,
        twitter: FaTwitter,
        instagram: FaInstagram,
        telegram: FaTelegram,
        leetcode: SiLeetcode,
        dev: FaDev,  // If you need Dev.to icon
       
    };
    useEffect(() => {
        const currentText = designations[index];
        let typingSpeed = isDeleting ? 50 : 80; // in ms

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % designations.length);
        }

        const timeout = setTimeout(() => {
            setText(currentText.slice(0, charIndex + (isDeleting ? -1 : 1)));
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, designations]);

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
                    I Am a <span className="text-[#C70039]">{text}|</span>
                </p>
                <a href="#about"
                    className="mt-6 inline-flex items-center  px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/50 hover:bg-blue-700 transition cursor-pointer"
                >
                    About Me <FaArrowCircleDown className="ml-2 text-lg inline" />
                </a>
                <div className="flex space-x-4 mt-6 justify-center md:justify-start ">
                    {contact.socialLinks.slice(0, 5).map((acc, _) => {
                        const Icon = socialIcons[acc.name] || FaDev; // Default to FaDev if not found
                        return (
                            <a href={acc.link} key={_} target="_blank" rel="noopener noreferrer">
                                <Icon className="text-2xl cursor-pointer hover:text-gray-800" />
                            </a>
                        )
                    })}
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
