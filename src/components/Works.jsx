import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] text-justify leading-[30px]"
        >
          Welcome to a curated collection of projects that not only showcase my
          skills but also serve as real-world examples of my work. Each project
          represents a journey into solving complex problems, leveraging various
          technologies, and effectively managing the project lifecycle. Dive in
          to explore:
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        <Splide
          options={{
            width: "70rem",
            pagination: true,
            breakpoints: {
              785: {
                width: "35rem",
              },
              585: {
                width: "30rem",
              },
              515: {
                width: "28rem",
              },
              490: {
                width: "25rem",
              },
              445: {
                width: "22rem",
              },
              400: {
                width: "20rem",
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <SplideSlide key={`project-${index}`}>
              <ProjectCard project={project} index={index} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
