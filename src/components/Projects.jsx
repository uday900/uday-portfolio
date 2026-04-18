import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionImg = motion.img;

function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeMedia, setActiveMedia] = useState({ type: "video", index: 0 });
  const [showAll, setShowAll] = useState(false);
  const [carouselRunning, setCarouselRunning] = useState(false);
  const { data, loading, error } = usePortfolioData();
  const projects = data?.projects || [];
  const selectedImages = selected?.images || [];

  useEffect(() => {
    if (!selected || activeMedia.type !== "image" || !carouselRunning) return;
    if (selectedImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveMedia((prev) => ({
        ...prev,
        index: (prev.index + 1) % selectedImages.length,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [activeMedia.type, carouselRunning, selected, selectedImages.length]);

  return (
    <div id="projects" className="bg-gray-950 text-white py-8 px-6">
      <MotionH2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Projects
      </MotionH2>

      {loading && projects.length === 0 && (
        <p className="text-center text-gray-400">Loading projects...</p>
      )}

      {error && projects.length === 0 && (
        <p className="text-center text-sm text-red-400">
          Projects data could not be loaded right now.
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects
          .slice(0, showAll ? projects.length : 4)
          .map((project, index) => {
            const images = project?.images || [];
            const impact = project?.impact || [];
            const tech = project?.tech || [];

            return (
              <MotionDiv
                key={project?.name || index}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition cursor-pointer"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: Math.min(index * 0.12, 0.36),
                }}
                onClick={() => {
                  setSelected(project);
                  if (project?.video) {
                    setCarouselRunning(false);
                    setActiveMedia({ type: "video", index: 0 });
                  } else {
                    setCarouselRunning(images.length > 1);
                    setActiveMedia({ type: "image", index: 0 });
                  }
                }}
              >
                <div className="h-48 overflow-hidden">
                  {project?.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    />
                  ) : images[0] ? (
                    <img
                      src={images[0]}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : null}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold">{project?.name}</h3>

                  <p className="text-xs text-gray-400 mt-1">
                    {project?.role}
                    {project?.duration && (
                      <>
                        <span className="text-gray-500"> - </span>
                        {project.duration}
                      </>
                    )}
                  </p>

                  <div className="text-sm text-gray-300 mt-2 space-y-1">
                    {impact.slice(0, 2).map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {tech.slice(0, 4).map((item, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded">
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="text-blue-400 text-xs mt-3">View Details -&gt;</p>
                </div>
              </MotionDiv>
            );
          })}
      </div>

      {projects.length > 4 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-400 hover:text-pink-400 underline transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 max-w-3xl w-full rounded-2xl relative max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center
                         rounded-full bg-red-400 text-white shadow-lg
                         hover:bg-red-600 transition z-50 cursor-pointer"
            >
              x
            </button>

            <div className="p-6 overflow-y-auto max-h-[90vh]">
              <div className="mb-4">
                {selected?.video && activeMedia.type === "video" ? (
                  <video src={selected.video} controls className="w-full rounded-lg" />
                ) : selectedImages.length > 0 ? (
                  <div className="overflow-hidden relative w-full h-[300px]">
                    <AnimatePresence mode="wait">
                      <MotionImg
                        key={activeMedia.index}
                        src={selectedImages[activeMedia.index] || selectedImages[0]}
                        alt=""
                        className="absolute w-full h-full object-contain rounded-lg"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => setCarouselRunning(false)}
                        onMouseLeave={() => setCarouselRunning(selectedImages.length > 1)}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </AnimatePresence>
                  </div>
                ) : null}

                <div className="flex gap-2 mt-3 flex-wrap">
                  {selected?.video && (
                    <button
                      onClick={() => setActiveMedia({ type: "video", index: 0 })}
                      className={`text-xs px-2 py-1 rounded ${activeMedia.type === "video" ? "bg-blue-500 text-white" : "bg-gray-800"
                        }`}
                    >
                      Video
                    </button>
                  )}

                  {selectedImages.map((img, i) => (
                    <img
                      key={img || i}
                      src={img}
                      alt=""
                      onClick={() => setActiveMedia({ type: "image", index: i })}
                      className={`w-14 h-10 object-cover cursor-pointer rounded border-2 ${activeMedia.type === "image" && activeMedia.index === i
                          ? "border-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                          : "border-gray-700"
                        }`}
                      onMouseEnter={() => setCarouselRunning(false)}
                      onMouseLeave={() => setCarouselRunning(selectedImages.length > 1)}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{selected?.name}</h3>

              <p className="text-sm text-gray-400 mb-3">
                {selected?.role}
                {selected?.duration && (
                  <>
                    <span className="text-gray-500"> - </span>
                    {selected.duration}
                  </>
                )}
              </p>

              {selected?.description && (
                <p className="text-gray-300 mb-4">{selected.description}</p>
              )}

              {(selected?.features || []).length > 0 && (
                <div className="mb-4">
                  <h4 className="text-blue-400 font-semibold mb-1">Features</h4>
                  <ul className="list-disc ml-5 text-gray-300">
                    {(selected?.features || []).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(selected?.challenges || []).length > 0 && (
                <div className="mb-4">
                  <h4 className="text-pink-400 font-semibold mb-1">Challenges</h4>
                  <ul className="list-disc ml-5 text-gray-300">
                    {(selected?.challenges || []).map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 mt-4">
                {selected?.live && (
                  <a
                    href={selected.live}
                    className="text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live <FaExternalLinkAlt className="inline ml-1" />
                  </a>
                )}
                {selected?.github && (
                  <a
                    href={selected.github}
                    className="text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <FaGithub className="inline ml-1" />
                  </a>
                )}
                {selected?.blog && (
                  <a
                    href={selected.blog}
                    className="text-pink-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
