import React from "react";
import { SectionWrapper } from "../hoc";
import logo from "../assets/logo-black.svg";
import navIcon1 from "../assets/linkedin.svg";
import navIcon2 from "../assets/github.svg";
import navIcon3 from "../assets/instagram.svg";
import { styles } from "../styles";

function Footer() {
  return (
    <div className="flex gap-5 justify-between items-center bg-cover bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm"></div>
      <div className="z-10 relative px-3 py-10 flex gap-5 justify-between items-center w-full">
        <img src={logo} alt="logo" className="w-12 h-15 object-contain" />
        <p className={`${styles.sectionSubText} text-center`}>
          Developed by Samir
        </p>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/md-samir-9ba4351bb/"
            className="bg-white rounded-full border-2 p-1"
          >
            <img className="w-10 text-white-500" src={navIcon1} alt="Icon" />
          </a>
          <a
            href="https://github.com/Samir-Alam"
            className="bg-white rounded-full border-2 p-1"
          >
            <img className="w-10 h-11" src={navIcon2} alt="Icon" />
          </a>
          <a
            href="https://www.instagram.com/samir_ig_0/"
            className="bg-white rounded-full border-2 p-1"
          >
            <img className="w-10" src={navIcon3} alt="Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Footer, "");
