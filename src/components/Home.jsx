import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { iconMap } from "../utils/iconMap";

const profileImage = "/assets/profile.jpg";

const MotionDiv = motion.div;
const MotionImg = motion.img;

const HeroSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { data, loading } = usePortfolioData();
  const contact = data?.contact || {};
  const socialLinks = contact?.socialLinks || [];

  useEffect(() => {
    const currentText = data?.sub_designations[index];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % data?.sub_designations.length || 1);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-pink-900/20 blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      <MotionDiv
        className="relative z-10 max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
            {loading && !data?.fullName ? "..." : data?.fullName || ""}
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          I build scalable backend systems and modern web apps.
        </p>

        <p className="mt-2 text-xl font-semibold">
          <span className="text-gray-400">I am a </span>
          <span className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </span>
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          {data?.resumeLink && (
            <a
              href={data.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 
                        shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition"
            >
              View Resume
            </a>
          )}

          <a
            href="#projects"
            className="px-6 py-2 rounded-full border border-gray-700 
                        hover:border-blue-400 hover:text-blue-400 transition"
          >
            View Projects
          </a>
        </div>

        <div className="flex mt-6 gap-4 justify-center md:justify-start">
          {socialLinks
            .filter((item) =>
              ["linkedin", "github", "leetcode", "upwork", "geeeksforgeeks", "medium"].includes(
                item?.name,
              ),
            )
            .map((item, i) => {
              const Icon = iconMap[item?.icon];

              return (
                <div
                  key={item?.name || i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative"
                >
                  <a
                    href={item?.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full 
                                    bg-gray-800 hover:bg-blue-500 transition text-lg text-gray-300 
                                    hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                  >
                    {Icon ? (
                      <Icon />
                    ) : item?.customIcon ? (
                      <img
                        src={item.customIcon}
                        alt=""
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                  </a>

                  {hoveredIndex === i && (
                    <div className="absolute top-full mt-2 px-2 py-1 bg-gray-800 text-xs rounded">
                      {item?.display}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </MotionDiv>

      <MotionDiv
        className="relative z-10 mb-10 md:mb-0"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 blur-2xl opacity-30"></div>

        <MotionImg
          src={profileImage}
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full border-4 border-gray-800 relative z-10"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </MotionDiv>
    </section>
  );
};

export default HeroSection;
