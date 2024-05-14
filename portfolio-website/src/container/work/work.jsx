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
        id: 0,
        title: "BrainWave",
        url: "https://projectbrainwave.netlify.app",
        githubURL:
          "https://github.com/MWolf02/portfolio-projects/tree/main/brainwave-project",
        image: images.project0,
        description:
          "Fully responsive modern UI/UX website selling AI services",
        tags: ["React JS"],
      },
      {
        id: 1,
        title: "Weather",
        url: "https://660164668b1c4a0706f700ee--monumental-pika-2877d3.netlify.app",
        githubURL:
          "https://github.com/MWolf02/intermediate-react-projects/tree/main/weather-app",
        image: images.project1,
        description:
          "Weather application to check the current weather conditions.",
        tags: ["React JS"],
      },
      {
        id: 2,
        title: "Food Recipes",
        url: "https://6603eb5a8fa7e47e04116ec2--roaring-macaron-1a546e.netlify.app",
        githubURL:
          "https://github.com/MWolf02/intermediate-react-projects/tree/main/food-recipe-app",
        image: images.project2,
        description:
          "Application for discovering and exploring various food recipes.",
        tags: ["React JS"],
      },
      {
        id: 3,
        title: "Shopping Cart",
        url: "https://660a7a8e0a8a027624cbf27a--roaring-macaron-1a546e.netlify.app",
        githubURL:
          "https://github.com/MWolf02/intermediate-react-projects/tree/main/shopping-cart-app",
        image: images.project3,
        description: "Online shopping cart application for managing purchases.",
        tags: ["React JS"],
      },
      {
        id: 4,
        title: "Expense Tracker",
        url: "https://660bf900fa1004133b293f77--resplendent-palmier-1bd5ac.netlify.app",
        githubURL:
          "https://github.com/MWolf02/intermediate-react-projects/tree/main/expense-tracker-app",
        image: images.project4,
        description:
          "Track your expenses and manage your budget with this application.",
        tags: ["React JS"],
      },
      {
        id: 10,
        title: "Pokemon Search",
        url: "https://66163dcfa3b2a686056c4729--statuesque-travesseiro-45f400.netlify.app",
        githubURL:
          "https://github.com/MWolf02/FFC---JavaScript-Algorithms-and-Data-Structures-Beta-/tree/main/Project%205",
        image: images.project10,
        description: "Search and explore information about different Pokemon.",
        tags: [ "FreeCodeCamp Projects"],
      },
      {
        id: 11,
        title: "Pomodoro Clock",
        url: "https://66164083c98b6da5006c3fa9--wonderful-tulumba-b2509a.netlify.app",
        githubURL:
          "https://github.com/MWolf02/First-React-Projects/tree/main/pomodoro-clock",
        image: images.project11,
        description: "A productivity timer based on the Pomodoro Technique.",
        tags: ["FreeCodeCamp Projects"],
      },
      {
        id: 12,
        title: "Calculator",
        url: "https://amazing-druid-f450a8.netlify.app",
        githubURL:
          "https://github.com/MWolf02/First-React-Projects/tree/main/javascript-calculator",
        image: images.project12,
        description:
          "Simple calculator for performing basic arithmetic operations.",
        tags: ["FreeCodeCamp Projects"],
      },
      {
        id: 13,
        title: "Drum Machine",
        url: "https://jade-brigadeiros-7cfc8f.netlify.app",
        githubURL:
          "https://github.com/MWolf02/First-React-Projects/tree/main/drum-machine-js",
        image: images.project13,
        description: "Virtual drum machine for creating beats and rhythms.",
        tags: ["FreeCodeCamp Projects"],
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
        {["React JS", "FreeCodeCamp Projects", "All"].map((item, index) => (
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
              <h4 className="bold-text" style={{ textAlign: "center" }}>
                {work.title}
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10, textAlign: "center" }}
              >
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                {activeFilter === "All" ? (
                  <p className="p-text">{work.tags[0]}</p>
                ) : (
                  work.tags.includes(activeFilter) && (
                    <p className="p-text">{activeFilter}</p>
                  )
                )}
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
