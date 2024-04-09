import React from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const About = () => {
  const abouts = [
    {
      title: "Skilled React.js Developer",
      description:
        "Self-taught developer with expertise in React.js. Proficient in creating dynamic and interactive user interfaces for web applications.",
      imgUrl: images.about01,
    },
    {
      title: "Persistent Problem Solver",
      description:
        "Dedicated problem solver with a knack for tackling challenges head-on. Thrives in situations that require perseverance and determination to find solutions.",
      imgUrl: images.about02,
    },
    {
      title: "High-Energy Team Player",
      description:
        "Outgoing and highly driven team player with a contagious energy that uplifts those around them. Embraces learning and fosters a positive team environment.",
      imgUrl: images.about03,
    },
    {
      title: "Personal Growth Enthusiast",
      description:
        "Passionate about personal growth and continuous learning. Committed to evolving skills and embracing new opportunities for development.",
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
            whileInView={{ opacity: 0.9 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.4, type: "tween" }}
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

export default AppWrap(About, 'about');
