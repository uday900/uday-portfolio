import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");  // Track active tab

    return (
        <nav className="bg-white p-4 shadow-md  fixed top-0 w-full z-10 ">
            <div className="md:px-26 flex justify-between items-center ">
                {/* Logo */}
                <h1 className="text-[25px] font-bold bg-gradient-to-r from-[#0099f7] to-[#f11712] text-transparent bg-clip-text">
                    Uday Portfolio
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-sm">
                    {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
                        <a
                            href={`#${item}`}
                            key={item}
                            onClick={() => setActive(item)}
                            className={`relative hover:text-blue-500 cursor-pointer transition-all ${
                                active === item ? "text-blue-600 font-bold" : "text-black"
                            }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                            {active === item && (
                                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-600"></span>
                            )}
                        </a>
                    ))}
                    {/* resume link */}
                    <a
                        href="https://drive.google.com/file/d/190BybJv0sdNed82iIM2SWVV2IQ4_NxlK/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-pink-400 hover:text-blue-500 cursor-pointer transition-all"
                    >
                        View Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-4 backdrop-blur bg-white/30 text-black p-4">
                    {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
                        <a
                            key={item}
                            onClick={() => {
                                setActive(item);
                                setIsOpen(false);
                            }}
                            href={`#${item}`}
                            className={`hover:text-blue-400 cursor-pointer transition-all ${
                                active === item ? "text-blue-400 font-bold" : "text-black"
                            }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
