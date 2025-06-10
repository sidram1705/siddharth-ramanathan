/** 
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */ 

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/CO_AWAY.jpg',
    title: 'CO-AWAY: Carbon Monoxide Detector',
    tags: ['PCB design', 'Firmware development', 'Product development'],
    projectLink: 'https://ese5160.github.io/a14g-final-submission-s25-t29-straw-hats/'
  },
  {
    imgSrc: '/images/Sleepinator.png',
    title: 'Sleep-inator: The Smart Pillow',
    tags: ['Firmware development', 'Embedded systems'],
    projectLink: 'https://sidram1705.github.io/Sleep-inator/'
  },
  {
    imgSrc: '/images/PDL_proj.png',
    title: 'Weight-based decomposibility via Bilinear Activation Function',
    tags: ['Neural Networks', 'Deep Learning'],
    projectLink: 'https://drive.google.com/file/d/1wRo284nT2hI7cbwoypKpoPB6DOZc2TXy/view?usp=sharing'
  },
];

const publications = [
  {
    title: 'CycleGAN for Flash-to-Ambient Image Conversion: A Style Transfer Approach',
    journal: 'IEEE Access',
    authors: 'Siddharth Ramanathan, Archit Mukherjee, U. Moulisvaran, K. P. Pramoth, Mohanaprasad Kothandaraman, P. Reena Monica, L. Ramesh Kumar, Sunil Gangele',
    year: '2024',
    link: 'https://ieeexplore.ieee.org/document/10772212'
  },
  {
    title: 'An approach to Generation of sentences using Sign Language Detection',
    journal: '2023 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT)',
    authors: 'K S Vikash, Kaavya Jayakrishnan, Siddharth Ramanathan, G. Rohith, Vijayendra Hanumara',
    year: '2023',
    link: 'https://ieeexplore.ieee.org/document/10170218'
  }
];

const Work = () => {
  return (
    <section id="project" className="section">
      <div className="container text-center">

        <h2 className="headline-2 mb-8 mx-auto reveal-up">
          My Portfolio Highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] mb-16">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes='reveal-up'
            />
          ))}
        </div>

        {/* Publications Section */}
        <h2 className="headline-2 mx-auto mb-8">
          Publications
        </h2>

        <ul className="space-y-6">
          {publications.map(({ title, journal, authors, year, link }, index) => (
            <li key={index} className="p-4 bg-zinc-800 hover:bg-zinc-700/50 rounded-xl transition-colors ring-1 ring-inset ring-zinc-50/5">
              <a href={link} target="_blank" rel="noopener noreferrer" className="block reveal-up">
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">{title}</h3>
                <p className="text-sm text-zinc-400">{authors}</p>
                <p className="text-sm text-zinc-200 italic">{journal}, {year}</p>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Work;
