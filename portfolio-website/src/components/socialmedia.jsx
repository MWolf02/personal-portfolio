import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/MWolf02" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/martin-wolf-lauring-370780207/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="" target="_blank">
        <FaFileAlt />
      </a>
    </div>
  </div>
);

export default SocialMedia;
