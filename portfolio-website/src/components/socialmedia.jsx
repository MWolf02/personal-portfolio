import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import resume from '../assets/resume.pdf'

const SocialMedia = () => (
  <div className="app__social">
    <div className="social-icon icon-1 p-text" data-tooltip="GitHub">
      <a href="https://github.com/MWolf02" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div className="social-icon icon-2 p-text" data-tooltip="LinkedIn">
      <a href="https://www.linkedin.com/in/martin-wolf-lauring-370780207/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div className="social-icon icon-3 p-text" data-tooltip="Resume">
      <a href={resume} download>
        <FaFileAlt />
      </a>
    </div>
  </div>
);

export default SocialMedia;

