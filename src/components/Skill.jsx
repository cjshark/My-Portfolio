import React from "react";
import {
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiVite,
  SiGithub,
} from "react-icons/si";

const levelDescriptions = {
  Novice: "Starting out",
  Beginner: "Basic familiarity",
  Intermediate: "Solid understanding",
  Advanced: "Confident and efficient",
  Pro: "Expert-level mastery",
  Master: "Deep expertise and leadership",
};

const levelStyles = {
  Novice: "bg-orange-50 text-orange-500 dark:bg-orange-50 dark:text-orange-500",
  Beginner:
    "bg-orange-100 text-orange-600 dark:bg-orange-100 dark:text-orange-600",
  Intermediate:
    "bg-orange-200 text-orange-700 dark:bg-orange-200 dark:text-orange-700",
  Advanced:
    "bg-orange-300 text-orange-800 dark:bg-orange-300 dark:text-orange-800",
  Pro: "bg-orange-400 text-white dark:bg-orange-400 dark:text-white",
  Master: "bg-orange-500 text-white dark:bg-orange-500 dark:text-white",
};

const SkillCard = ({
  icon: Icon,
  label,
  color,
  level,
  experience,
  description,
  year,
  delay,
}) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={delay}
      data-aos-duration="600"
      className="group w-[160px] h-[230px] perspective cursor-pointer"
    >
      <div className="relative rounded-2xl w-full h-full transition-transform duration-500 border-2 border-orange-900 transform-style preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-black via-gray-800 to-black rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-white">
          <div className="w-14 h-14 rounded-full bg-slate-700/40 flex items-center justify-center group-hover:bg-orange-500/30 transition mb-3">
            <Icon className={`w-7 h-7 ${color}`} />
          </div>
          <h6 className="text-sm font-semibold text-orange-400 group-hover:text-white transition mb-1">
            {label}
          </h6>
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded-full ${levelStyles[level]}`}
          >
            {level}
          </span>
        </div>

        <div className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-orange-950 rounded-xl p-4 text-center text-sm text-slate-200 flex flex-col items-center justify-center shadow-inner">
          <h6 className="text-sm font-semibold text-orange-400 group-hover:text-white transition mb-1">
            {label}
          </h6>
          <p className="text-[11px] leading-snug mb-2">{description}</p>
          <span className="text-xs text-slate-300 mb-3">
            Experience: {experience}
          </span>
          <span className="text-xs text-slate-300 mb-3">Year: {year}</span>
        </div>
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="flex justify-center items-start min-h-screen py-10 px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 px-2">
          <h4
            data-aos="zoom-in"
            className="text-3xl font-bold text-orange-500 text-center mb-6"
          >
            Skills
          </h4>
          <div className="text-md text-slate-700 dark:text-slate-300 px-4">
            <h5
              data-aos="fade-up"
              className="font-semibold text-orange-400 text-center mb-3"
            >
              Legend
            </h5>
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 gap-4 text-left text-xs"
            >
              {Object.entries(levelStyles).map(([level, style], index) => (
                <div
                  key={level}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="600"
                  className={`px-2 py-3 rounded-xl font-medium ${style}`}
                >
                  <div className="font-semibold">{level}</div>
                  <div>{levelDescriptions[level]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
            <SkillCard
              icon={SiReact}
              label="REACT"
              color="text-[#61DAFB]"
              level="Beginner"
              experience="5 Months"
              description="Build dynamic UIs and manage app state."
              year="2023"
              delay={10}
            />
            <SkillCard
              icon={SiHtml5}
              label="HTML"
              color="text-[#E34F26]"
              level="Advanced"
              experience="1+ years"
              description="Structure content with semantic markup."
              year="2022"
              delay={100}
            />
            <SkillCard
              icon={SiJavascript}
              label="JAVASCRIPT"
              color="text-[#F7DF1E]"
              level="Beginner"
              experience="7 Months"
              description="Create dynamic logic and interactions."
              year="2023"
              delay={200}
            />
            <SkillCard
              icon={SiTailwindcss}
              label="TAILWIND CSS"
              color="text-teal-400"
              level="Intermediate"
              experience="5 Months"
              description="Style components with utility classes."
              year="2023"
              delay={300}
            />
            <SkillCard
              icon={SiCss3}
              label="CSS"
              color="text-[#1572B6]"
              level="Intermediate"
              experience="1+ years"
              description="Design responsive and animated UIs."
              year="2022"
              delay={400}
            />
            <SkillCard
              icon={SiVite}
              label="VITE"
              color="text-[#646CFF]"
              level="Beginner"
              experience="7 Months"
              description="Fast bundling and development tooling."
              year="2023"
              delay={500}
            />
            <SkillCard
              icon={SiGithub}
              label="GITHUB"
              color="text-white"
              level="Intermediate"
              experience="1+ years"
              description="Version control and collaboration."
              year="2022"
              delay={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
  