import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./work.scss";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const projectsData = [
      {
        id: 1,
        title: "Project 1",
        url: "https://660164668b1c4a0706f700ee--monumental-pika-2877d3.netlify.app",
        githubURL:
          "https://github.com/MWolf02/intermediate-react-projects/tree/main/weather-app",
        image: images.project1,
        description: "Description of Project 1.",
        tags: ["React JS"],
      },
      {
        id: 2,
        title: "Project 2",
        url: "https://6603eb5a8fa7e47e04116ec2--roaring-macaron-1a546e.netlify.app",
        githubURL:
          "https://github.com/MWolf02/intermediate-react-projects/tree/main/food-recipe-app",
        image: images.project2,
        description: "Description of Project 2.",
        tags: ["React JS"],
      },
      {
        id: 3,
        title: "Project 3",
        url: "https://660a7a8e0a8a027624cbf27a--roaring-macaron-1a546e.netlify.app",
        githubURL:
          "https://github.com/MWolf02/intermediate-react-projects/tree/main/shopping-cart-app",
        image: images.project3,
        description: "Description of Project 3.",
        tags: ["React JS"],
      },
      {
        id: 4,
        title: "Project 4",
        url: "https://660bf900fa1004133b293f77--resplendent-palmier-1bd5ac.netlify.app",
        githubURL:
          "https://github.com/MWolf02/intermediate-react-projects/tree/main/expense-tracker-app",
        image: images.project4,
        description: "Description of Project 4.",
        tags: ["React JS"],
      },
      {
        id: 5,
        title: "Project 5",
        url: "https://66013be13840ca9aa9d9ad99--monumental-pika-2877d3.netlify.app",
        githubURL:
          "https://github.com/MWolf02/youtube-projects/tree/main/25-react-interview-projects/src",
        image: images.project5,
        description: "Description of Project 4.",
        tags: ["React JS"],
      },
    ];

    setProjects(projectsData);
    setFilterWork(projectsData);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(projects);
      } else {
        const filteredWorks = projects.filter((work) =>
          work.tags.includes(item)
        );
        setFilterWork(filteredWorks);
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Take A Look At My <span>Portfolio</span>
      </h2>

      <div className="app__work-filter">
        {["React JS", "Vanilla JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.title} />

              <motion.div
                whileHover={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.url} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.githubURL} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                {work.tags.map((tag, tagIndex) => (
                  <p className="p-text" key={tagIndex}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
