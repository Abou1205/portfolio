import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { github, netlify } from "../assets";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ project, index }) => {
  const { source_code_link, image, name, description, tags, source_demo_link } =
    project;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl w-full"
        options={{ max: 10, scale: 1, speed: 450 }}
      >
        <div className="relative w-full h-[300px]">
          <img
            src={image}
            className="w-full h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} className="w-1/2 h-1/2 object-contain" />
            </div>
            <div
              onClick={() => window.open(source_demo_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={netlify} className="w-15 h-15 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5 min-h-48">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
