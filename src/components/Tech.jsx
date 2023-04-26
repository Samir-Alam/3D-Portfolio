import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ index, name, icon }) => (
  <Tilt className="xs:w-[152px] w-1/3 text-center justify-center flex">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-3 px-5 min-h-[150px] flex justify-evenly items-center flex-col h-full"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10 hidden md:flex'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
      <div className="mt-20 flex flex-wrap gap-10 md:hidden justify-center">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
