import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./skills.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { DiJqueryUiLogo } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const [experiences] = useState([
    {
      year: 2024,
      title: "FreeCodeCamp Certificate",
      description: "Certification in Responsive Webdesign",
    },
    {
      year: 2024,
      title: "FreeCodeCamp Certificate",
      description: "Certification in JavaScript Algorithms and Data Structures",
    },
    {
      year: 2024,
      title: "FreeCodeCamp Certificate",
      description: "Certification in Front End Development Libraries",
    },
  ]);

  const skillsIcons = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaSass />, name: "Sass" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <DiJqueryUiLogo />, name: "jQuery" },
  ];

  return (
    <>
      <h2 className="head-text">
        Skills & <span>Certificates</span>
      </h2>
      <div className="app__skills-container">
        <div className="app__skills-list">
          {skillsIcons.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div className="app__flex skills-icon">{skill.icon}</div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="app__skills-exp">
          <motion.div className="app__skills-exp-item">
            <div className="app__skills-exp-year">
              <p className="bold-text" >2024</p>
            </div>
            <div className="app__skills-exp-works">
              {experiences.map((experience, index) => (
                <div key={index}>
                  <h4 className="bold-text" >{experience.title}</h4>
                  <p className="p-text mb-6">{experience.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
