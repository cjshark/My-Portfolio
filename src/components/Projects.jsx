import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./Project_Comp";

const allProjects = [
  {
    title: "CBG Suites Homestay",
    description:
      "A rental apartment complex. Dynamic and fully responsive Web design.",
    tech: ["React", "Tailwind CSS"],
    live: "https://cjshark.github.io/CBG-Homestay-2/",
    code: "https://github.com/cjshark/CBG-Homestay-2",
  },
  {
    title: "Shop For Gamers",
    description:
      "An eCommerce front-end site for gaming parts and peripherals.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://Shop-4-Gamers.com",
    code: "https://github.com/cjshark/Shop-4-Gamers.git",
  },
  {
    title: "Simple Landing Page",
    description:
      "A clean and responsive HTML/CSS landing page for product showcase.",
    tech: ["HTML", "CSS"],
    live: "https://your-landing-page.com",
    code: "https://github.com/your-username/html-css-landing-page",
  },
];

const allTags = ["All", "React", "Tailwind CSS", "HTML", "CSS"];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? allProjects
      : allProjects.filter((project) => project.tech.includes(selectedTech));

  return (
    <section id="projects" className="pt-10 pb-30 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="fade-down"
          className="text-4xl font-bold text-center text-orange-500 mb-12 tracking-tight"
        >
          Featured Projects
        </h2>

        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTech(tag)}
              className={`px-4 py-2 rounded-full border text-sm font-medium tracking-wide transition-all duration-300
              ${
                selectedTech === tag
                  ? "bg-orange-500 text-black border-orange-500 shadow-lg"
                  : "bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 300} // 0ms, 100ms, 200ms, etc.
              data-aos-duration="600"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
