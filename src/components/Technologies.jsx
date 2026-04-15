// import { motion } from "framer-motion";
// import { skills } from "../data";

// const SkillsWave = () => {

//   // 🔥 Split data
//   const topSkills = skills.filter(s => s.type === "top");

//   const categories = {};
//   skills
//     .filter(s => s.category)
//     .forEach(skill => {
//       if (!categories[skill.category]) {
//         categories[skill.category] = [];
//       }
//       categories[skill.category].push(skill);
//     });

//   return (
//     <div id="skills" className="bg-gray-100 py-10">

//       {/* 🔥 Title */}
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.9 }}
//         className="text-3xl font-bold mb-8 text-center"
//       >
//         Technologies
//       </motion.h2>

//       {/* 🔥 TOP WAVE SECTION */}
//       <div className="flex flex-wrap justify-center gap-8 mb-12">
//         {topSkills.map((skill, index) => {
//           const Icon = skill.icon;

//           return (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center"
//               animate={{ y: [0, -12, 0, 12, 0] }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 repeatType: "mirror",
//                 delay: skill.delay,
//               }}
//             >
//               <Icon size={55} color={skill.color} />
//               <p className="mt-2 text-sm font-medium">{skill.name}</p>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* 🔥 CATEGORY SECTIONS */}
//       {/* 🔥 CATEGORY GRID */}
// <div className="grid grid-cols-2 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">

//   {Object.entries(categories).map(([category, items]) => (
//     <div key={category} className="text-center bg-white rounded-xl shadow-sm p-5">

//       {/* Category Title */}
//       <h3 className="text-lg font-semibold mb-4">
//         {category}
//       </h3>

//       {/* Icons */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {items.map((skill, index) => {
//           const Icon = skill.icon;

//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center hover:scale-110 transition duration-300"
//             >
//               <Icon size={35} color={skill.color} />
//               <p className="text-xs mt-1">{skill.name}</p>
//             </div>
//           );
//         })}
//       </div>

//     </div>
//   ))}

// </div>

//     </div>
//   );
// };

// export default SkillsWave;

import { motion } from "framer-motion";
import { skills } from "../data";

const SkillsWave = () => {

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
    <div id="skills" className="bg-gray-950 text-white py-16">

      {/* 🔥 Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Technologies
      </motion.h2>

      {/* 🔥 TOP FLOATING SKILLS */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {topSkills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: skill.delay,
              }}
            >
              <div className="p-4 rounded-full bg-gray-900 border border-gray-800 
                group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition">
                <Icon size={40} className="text-gray-300 group-hover:text-white" color={skill.color} />
              </div>

              <p className="mt-2 text-sm text-gray-400 group-hover:text-white">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* 🔥 CATEGORY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">

        {Object.entries(categories).map(([category, items]) => (
          <div
            key={category}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 
            hover:shadow-xl hover:scale-[1.02] transition"
          >

            {/* Category Title */}
            <h3 className="text-lg font-semibold mb-5 text-blue-400">
              {category}
            </h3>

            {/* Icons */}
            <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
              {items.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center group hover:scale-110 transition duration-300"
                  >
                    <div className="p-3 rounded-full bg-gray-800 transition">
                      <Icon size={24} className="text-gray-300 group-hover:text-white" color={skill.color} />
                    </div>

                    <p className="text-xs mt-2 text-gray-400 group-hover:text-white">
                      {skill.name}
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