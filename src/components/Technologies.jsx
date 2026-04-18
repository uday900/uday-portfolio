import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { iconMap } from "../utils/iconMap";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;

const SkillsWave = () => {
  const { data, loading, error } = usePortfolioData();
  const skills = data?.skills || [];
  const topSkills = skills.filter((skill) => skill?.type === "top");

  const categories = skills
    .filter((skill) => skill?.category)
    .reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }

      acc[skill.category].push(skill);
      return acc;
    }, {});

  return (
    <div id="skills" className="bg-gray-950 text-white py-16">
      <MotionH2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Technologies
      </MotionH2>

      {loading && skills.length === 0 && (
        <p className="text-center text-gray-400">Loading technologies...</p>
      )}

      {error && skills.length === 0 && (
        <p className="text-center text-sm text-red-400">
          Technology data could not be loaded right now.
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {topSkills.map((skill, index) => {
          const Icon = iconMap[skill?.icon];

          return (
            <MotionDiv
              key={skill?.name || index}
              className="flex flex-col items-center group"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: skill?.delay || 0,
              }}
            >
              <div
                className="p-4 rounded-full bg-gray-900 border border-gray-800 
                group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition"
              >
                {Icon ? (
                  <Icon
                    size={40}
                    className="text-gray-300 group-hover:text-white"
                    color={skill?.color}
                  />
                ) : null}
              </div>

              <p className="mt-2 text-sm text-gray-400 group-hover:text-white">
                {skill?.name}
              </p>
            </MotionDiv>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {Object.entries(categories).map(([category, items]) => (
          <div
            key={category}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 
            hover:shadow-xl hover:scale-[1.02] transition"
          >
            <h3 className="text-lg font-semibold mb-5 text-blue-400">{category}</h3>

            <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
              {items.map((skill, index) => {
                const Icon = iconMap[skill?.icon];

                return (
                  <div
                    key={skill?.name || index}
                    className="flex flex-col items-center group hover:scale-110 transition duration-300"
                  >
                    <div className="p-3 rounded-full bg-gray-800 transition">
                      {Icon ? (
                        <Icon
                          size={24}
                          className="text-gray-300 group-hover:text-white"
                          color={skill?.color}
                        />
                      ) : null}
                    </div>

                    <p className="text-xs mt-2 text-gray-400 group-hover:text-white">
                      {skill?.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsWave;
