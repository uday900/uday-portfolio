// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// const logo = "/assets/logo.jpeg";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [active, setActive] = useState("home");  // Track active tab

//     return (
//         <nav className="bg-white p-4 shadow-md  fixed top-0 w-full z-10 ">
//             <div className="md:px-26 flex justify-between items-center ">
//                 {/* Logo */}
//                 {/* <h1 className="text-[25px] font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-transparent bg-clip-text drop-shadow-sm">
//     Uday Portfolio
// </h1> */}
//                 <div className="flex items-center gap-3">
//                     <img
//                         src={logo}
//                         alt="logo"
//                         className="h-10 w-10 object-cover rounded-full shadow-sm"
//                     />
//                     <span className="text-lg font-semibold text-gray-800">
//                         Uday darla
//                     </span>
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex space-x-4 text-sm">
//                     {["home", "about", "skills", "experience", "projects"].map((item) => (
//                         <a
//                             href={`#${item}`}
//                             key={item}
//                             onClick={() => setActive(item)}
//                             className={`px-3 py-1 rounded-full inline-flex items-center justify-center transition-all ${active === item
//                                 ? "bg-blue-500 text-white font-semibold rounded-full shadow-lg"
//                                 : "text-gray-700 hover:text-blue-500"
//                                 }`}
//                         >
//                             {item.charAt(0).toUpperCase() + item.slice(1)}
//                             {/* {active === item && (
//                                 <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-600"></span>
//                             )} */}
//                         </a>
//                     ))}
//                     <a
//                         href="#contact"
//                         className="ml-4 inline-flex items-center justify-center h-[36px] 
//                         px-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm 
//                         font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
//                     >
//                         Hire Me
//                     </a>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="md:hidden text-black"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Dropdown Menu */}
//             {isOpen && (
//                 <div className="md:hidden flex flex-col items-center space-y-4 mt-4 backdrop-blur bg-white/30 text-black p-4">
//                     {["home", "about", "skills", "experience", "projects"].map((item) => (
//                         <a
//                             key={item}
//                             onClick={() => {
//                                 setActive(item);
//                                 setIsOpen(false);
//                             }}
//                             href={`#${item}`}
//                             className={`hover:text-blue-400 cursor-pointer transition-all ${active === item ? "text-blue-400 font-bold" : "text-black"
//                                 }`}
//                         >
//                             {item.charAt(0).toUpperCase() + item.slice(1)}
//                         </a>
//                     ))}
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const logo = "/assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-gray-950/80 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 object-cover rounded-full border border-gray-700"
          />
          <span className="text-lg font-semibold text-white">
            Uday Darla
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">

          {["home", "about", "skills", "experience", "projects"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActive(item)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300
                ${
                  active === item
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="ml-3 px-5 py-1.5 rounded-full text-sm font-medium 
            bg-gradient-to-r from-pink-500 to-red-500 text-white 
            hover:scale-105 transition duration-300 shadow-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-gray-950 border-t border-gray-800">
          {["home", "about", "skills", "experience", "projects"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`text-sm transition ${
                active === item
                  ? "text-blue-400 font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="#contact"
            className="mt-2 text-center px-5 py-2 rounded-full 
            bg-gradient-to-r from-pink-500 to-red-500 text-white"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;