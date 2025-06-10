/** 
 * @copyright 2025 siddharthramanathan
 * @license Apache-2.0
 */ 

import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes
}) => {
  return (
    <div className={`relative rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors p-0 overflow-hidden ${classes}`}>

      {/* Image */}
      <figure className="img-box aspect-square rounded-t-2xl overflow-hidden">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      {/* Content */}
      <div className="flex flex-col p-5 gap-4">

        {/* Header Row: Title + Arrow */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-snug text-left max-w-[85%]">
            {title}
          </h3>

          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg grid place-items-center bg-orange-400 text-zinc-950 hover:bg-orange-300 shrink-0 transition"
          >
            <span className="material-symbols-rounded text-xl">
              arrow_outward
            </span>
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-700/40 rounded-md ring-1 ring-zinc-50/5"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
};

export default ProjectCard;
