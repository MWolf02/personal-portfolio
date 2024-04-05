import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { images } from "../../constants";

const About = () => {
  const abouts = [
    {
      title: "Skilled React.js Developer",
      description:
        "Self-taught developer with expertise in React.js. Proficient in creating dynamic and interactive user interfaces for web applications.",
      imgUrl: images.about01,
    },
    {
      title: "JavaScript Expert",
      description:
        "JavaScript developer with a deep understanding of the language. Experienced in developing client-side scripts for enhancing user experience.",
      imgUrl: images.about02,
    },
    {
      title: "CSS & SCSS Specialist",
      description:
        "CSS and SCSS expert with a keen eye for design. Proficient in crafting visually appealing and responsive user interfaces.",
      imgUrl: images.about03,
    },
    {
      title: "Tailwind CSS Pro",
      description:
        "Skilled in utilizing Tailwind's utility-first approach to streamline development workflow and enhance productivity.",
      imgUrl: images.about04,
    },
    
  ];

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span>
      </h2>
      <h2 className="head-text">
        Means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
