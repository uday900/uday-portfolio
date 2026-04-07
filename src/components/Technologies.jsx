import { motion } from "framer-motion";
import { skills } from "../data";

const SkillsWave = () => {

  // 🔥 Split data
  const topSkills = skills.filter(s => s.type === "top");

  const categories = {};
  skills
    .filter(s => s.category)
    .forEach(skill => {
      if (!categories[skill.category]) {
        categories[skill.category] = [];
      }
      categories[skill.category].push(skill);
    });

  return (
    <div id="skills" className="bg-gray-100 py-10">

      {/* 🔥 Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.9 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Technologies
      </motion.h2>

      {/* 🔥 TOP WAVE SECTION */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {topSkills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
                delay: skill.delay,
              }}
            >
              <Icon size={55} color={skill.color} />
              <p className="mt-2 text-sm font-medium">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>

      {/* 🔥 CATEGORY SECTIONS */}
      {/* 🔥 CATEGORY GRID */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">

  {Object.entries(categories).map(([category, items]) => (
    <div key={category} className="text-center bg-white rounded-xl shadow-sm p-5">

      {/* Category Title */}
      <h3 className="text-lg font-semibold mb-4">
        {category}
      </h3>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 transition duration-300"
            >
              <Icon size={35} color={skill.color} />
              <p className="text-xs mt-1">{skill.name}</p>
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