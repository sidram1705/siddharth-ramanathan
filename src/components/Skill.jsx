/**
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import SkillCard from "./SkillCard";

const originalGroups = [
  {
    heading: "Programming Languages",
    skills: [
      { imgSrc: "/images/C.svg", label: "C", desc: "5+ years" },
      { imgSrc: "/images/Cpp.svg", label: "C++", desc: "7+ years" },
      { imgSrc: "/images/Python.svg", label: "Python", desc: "4+ years" },
    ],
  },
  {
    heading: "Languages",
    skills: [
      { imgSrc: "/images/English.png", label: "English", desc: "Fluent" },
      { imgSrc: "/images/Tamil.png", label: "Tamil", desc: "Fluent" },
      { imgSrc: "/images/Malayalam.png", label: "Malayalam", desc: "Native" },
      { imgSrc: "/images/Hindi.png", label: "Hindi", desc: "Fluent" },
      { imgSrc: "/images/Japanese.png", label: "Japanese", desc: "N5 Certified" },
    ],
  },
  {
    heading: "ML and DL Frameworks",
    skills: [
      { imgSrc: "/images/TF.png", label: "TensorFlow", desc: "ML Framework" },
      { imgSrc: "/images/Pytorch.png", label: "PyTorch", desc: "ML Framework" },
      { imgSrc: "/images/OpenCV.png", label: "OpenCV", desc: "Computer Vision Library" },
    ],
  },
  {
    heading: "Data Analysis Tools",
    skills: [
      { imgSrc: "/images/Tableau.png", label: "Tableau", desc: "Data Analysis Tool" },
      { imgSrc: "/images/PowerBI.png", label: "PowerBI", desc: "Data Analysis Tool" },
    ],
  },
  {
    heading: "Hardware",
    skills: [
      { imgSrc: "/images/Microchip.png", label: "ATMEGA328PB", desc: "Microcontroller" },
      { imgSrc: "/images/Arduino.svg", label: "Arduino", desc: "Microcontroller" },
      { imgSrc: "/images/Microchip.png", label: "ATSAMW25", desc: "Microcontroller" },
      { imgSrc: "/images/RaspberryPi.svg", label: "Raspberry Pi", desc: "Microprocessor" },
      { imgSrc: "/images/Microchip.png", label: "ESP32", desc: "Microcontroller" },
    ],
  },
  {
    heading: "Design Software",
    skills: [
      { imgSrc: "/images/Altium.png", label: "Altium Designer", desc: "PCB Design" },
      { imgSrc: "/images/KICAD.png", label: "KICAD", desc: "PCB Design" },
      { imgSrc: "/images/SolidWorks.png", label: "SolidWorks", desc: "3D CAD" },
    ],
  },
];

const VISIBLE_COUNT = 3;
const CARD_WIDTH = 300;
const GAP = 16;

const Skill = () => {
  const clonedGroups = [...originalGroups, ...originalGroups.slice(0, VISIBLE_COUNT)];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const trackRef = useRef(null);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => (prev === 0 ? originalGroups.length : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) next();
    }, 2000);
    return () => clearInterval(interval);
  }, [paused]);

  // Jump to start if we're on the cloned end
  useEffect(() => {
    if (index === originalGroups.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      }, 700);
    }
  }, [index]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="headline-2 mx-auto reveal-up">Skills and Technologies</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] mx-auto reveal-up">
          Here are some of the skills I have acquired over the years. I am always eager to learn new technologies and improve my skill set.
        </p>

        <div
          className="relative overflow-hidden group rounded-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className={`flex gap-x-4 ${enableTransition ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
              width: `${(CARD_WIDTH + GAP) * clonedGroups.length}px`,
            }}
          >
            {clonedGroups.map(({ heading, skills }, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[300px] text-left space-y-4 bg-zinc-900/10 p-3 rounded-2xl group-hover:bg-zinc-800/30 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-zinc-300">{heading}</h3>
                {skills.map(({ imgSrc, label, desc }, k) => (
                  <SkillCard key={k} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
                ))}
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-400 hover:bg-orange-400/50 text-white rounded-full p-2 z-10"
          >
            <span className="material-symbols-rounded text-2xl">arrow_back</span>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-400 hover:bg-orange-400/50 text-white rounded-full p-2 z-10"
          >
            <span className="material-symbols-rounded text-2xl">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skill;
