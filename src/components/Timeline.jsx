/**
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */

import { useState } from "react";

const educationData = [
  {
    title: "MSE Electrical Engineering",
    institution: "University of Pennsylvania",
    year: "2024 - 2026",
    logo: "/images/Penn.png",
    description:
      "Specialized in embedded systems and robotics. Representated the Electrical and Systems Engineering department as a Student Coordinator and represented the Graduate School of Engineering as a representative in the Graduate and Professional Student Assembly (GAPSA)."
  },
  {
    title: "B.Tech Electronics and Communication Engineering",
    institution: "VIT Chennai",
    year: "2020 - 2024",
    logo: "/images/VIT.png",
    description:
      "Worked on various multidisciplinary projects, and managed to publish two papers and one patent. Served as the Chairman of IEEE Student Branch, and won the Best Capstone Project Award for my patented design of an Autonomous Shopfloor Trolley."
  }
];

const workData = [
  {
    title: "Summer Intern",
    institution: "Multicoreware",
    year: "June 2025 - Aug 2025",
    logo: "/images/MulticoreWare.png",
    description: "During my internship at MulticoreWare Inc, I focused on developing and testing AI models for navigation robots and robotic arms on AMD's RyzenAI SDK hardware. My work involved quantizing and deploying these models, making them compatible for both demo robots and simulators. The goal was to deliver an out of the box experience for the client, and prove that AI models can be deployed on their custom NPU chip. This experience allowed me to deepen my understanding of AI model optimization and real time deployment of these models."
  },
  {
    title: "Research Engineer",
    institution: "Autoware Foundation",
    year: "Jan 2025 - May 2025",
    logo: "/images/Autoware.png",
    description:
      "Contributed to the development of AV2.0 sensor fusion in collaboration with Autoware Foundation. Optimized BEVFusion model for prediction using 4 cameras instead of 6. Programmed custom drivers to optimise data transfer to a simulation software named Re-Run. Encoded custom TCP communication and multicore programming for publisher-subscriber link."
  },
  {
    title: "Technical Consultant",
    institution: "Automotives India",
    year: "Jan 2024 - May 2024",
    logo: "/images/Automotives_india.png",
    description:
      "Led a team of three engineers in the development of an autonomous shop-floor trolley. Implemented sensor fusion with ultrasonic sensors safety mechanisms ensuring robust navigation. Integrated computer vision, pathfinding and IoT on a Raspberry Pi-Arduino system. Optimized the trolley to support a payload of 200kg, nominating it for a design patent."
  },
  {
    title: "Prism Research Intern",
    institution: "Samsung R&D Institute India",
    year: "Feb 2023 - Jan 2024",
    logo: "/images/Samsung.png",
    description:
      "Developed a deep learning approach to convert flash artifacts into ambient images for smartphones. Experimented on multiple Generative Adversarial Networks and image processing techniques. Achieved superior results with style transfer using CycleGAN. Awarded a Certificate of Excellence for innovation, research published in IEEE Access."
  }
];

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedCard, setSelectedCard] = useState(null);

  const data = activeTab === "education" ? educationData : workData;

  return (
    <section id="timeline" className="section container text-center">
      <h2 className="headline-2 mx-auto reveal-up mb-8">Timeline</h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center reveal-up gap-4 mb-8">
        <button
          className={`reveal-up px-4 py-2 rounded-xl font-medium text-sm transition-colors duration-200 ring-1 ring-zinc-50/10 ${
            activeTab === "education"
              ? "bg-orange-400 text-zinc-950"
              : "bg-zinc-800 text-zinc-50 hover:bg-zinc-700"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`reveal-up px-4 py-2 rounded-xl font-medium text-sm transition-colors duration-200 ring-1 ring-zinc-50/10 ${
            activeTab === "work"
              ? "bg-orange-400 text-zinc-950"
              : "bg-zinc-800 text-zinc-50 hover:bg-zinc-700"
          }`}
          onClick={() => setActiveTab("work")}
        >
          Work Experience
        </button>
      </div>

      {/* Timeline Entries */}
      <div className="space-y-6 reveal-up">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-xl p-5 text-left hover:bg-zinc-700 transition cursor-pointer ring-1 ring-zinc-50/5 w-full"
            onClick={() => setSelectedCard(item)}
          >
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.institution}</p>
              </div>
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  className="w-12 h-12 object-contain"
                />
              )}
            </div>
            <p className="text-zinc-500 text-xs">{item.year}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-zinc-900 rounded-2xl max-w-2xl w-full p-6 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <span className="material-symbols-rounded text-2xl">close</span>
            </button>
            <h3 className="text-2xl font-semibold mb-2">{selectedCard.title}</h3>
            <p className="text-zinc-400 text-sm mb-1">{selectedCard.institution}</p>
            <p className="text-zinc-500 text-xs mb-4">{selectedCard.year}</p>
            <p className="text-zinc-300 text-sm leading-relaxed">{selectedCard.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
