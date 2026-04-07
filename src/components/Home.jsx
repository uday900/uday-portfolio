import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDev, FaTelegram, FaMedium } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { contact, fullName, resumeLink } from "../data";
import { motion } from "framer-motion";

const profileImage = "/assets/profile.jpg";
const naukriLogo = "/assets/naukri.png";
const githHubLogo = "/assets/github_logo.png";
const linkedinLogo = "/assets/linkedin_logo.png";
const upworkLogo = "/assets/upwork_logo.png";
const mediumLogo = "/assets/medium_logo.png";
const leetcodeLogo = "/assets/leetcode_logo.png";

const HeroSection = () => {
    const designations = ["Fullstack Developer", "Java Developer", "Backend Developer", "Frontend Developer"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const socialIcons = {
        linkedin: linkedinLogo,
        upwork: upworkLogo,
        github: githHubLogo,
        naukri: naukriLogo,
        leetcode: leetcodeLogo,
        medium: mediumLogo,

        dev: FaDev,  // If you need Dev.to icon

    };
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
                <div className="flex space-x-4 mt-6 justify-center md:justify-start ">
                    {/* {contact.socialLinks.slice(0, 6).map((acc, _) => {
                        const Icon = socialIcons[acc.name] || FaDev; // Default to FaDev if not found
                        return (
                            <a href={acc.link} key={_} target="_blank" rel="noopener noreferrer">
                                <Icon className="text-2xl cursor-pointer hover:text-gray-800" />
                            </a>
                        )
                    })} */}
                    {contact.socialLinks
                        .filter(acc => ["linkedin", "naukri", "upwork", "github", "leetcode", "medium"].includes(acc.name))
                        .map((acc, _) => {

                            const Icon = socialIcons[acc.name];

                            return (
                                <a href={acc.link} key={_} target="_blank">
                                    {/* <Icon className="text-xl cursor-pointer text-gray-700 hover:text-black hover:scale-110 transition" /> */}
                                    <img src={Icon} alt={`${acc.name} logo`} className="w-6 h-6 object-contain hover:scale-110 transition" />
                                </a>
                            );
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
