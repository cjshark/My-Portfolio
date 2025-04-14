import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Icon & color map
const techIconMap = {
  React: {
    icon: <FaReact className="text-cyan-400 text-2xl" title="React" />,
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss className="text-sky-400 text-2xl" title="Tailwind Css"/>,
  },
  HTML: {
    icon: <FaHtml5 className="text-orange-600 text-2xl" title="HTML"/>,
  },
  CSS: {
    icon: <FaCss3Alt className="text-blue-500 text-2xl" title="CSS" />,
  },
};

const ProjectCard = ({ title, description, tech, live, code }) => {
  return (
    <div className="bg-slate-800 hover:scale-105 transition-transform duration-300 hover:cursor-default border-orange-500 rounded-2xl p-5 shadow-lg border 0">
      <h3 className="text-xl font-semibold text-orange-500">{title}</h3>
      <p className="text-slate-300 mt-2 text-sm mb-5">{description}</p>

      {/* Icon List */}
      <div className="flex flex-wrap gap-3 mt-3 mb-10 ">
        {tech.map((item, idx) => (
          <div key={idx} title={item}>
            {techIconMap[item]?.icon || (
              <span className="text-slate-400 text-sm h-10">{item}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-orange-500">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          title="Live Demo"
        >
          <FaExternalLinkAlt className="hover:text-orange-400" />
        </a>
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          title="Source Code"
        >
          <FaGithub className="hover:text-orange-400" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
