import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import ServiceCard from "./ServiceCard";
import {SectionWrapper} from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.3, 2)} className='mt-4 text-secondary text-[17px] text-justify leading-[30px]'>
        I am a junior web developer with the expertise to build a compelling
        online presence from the ground up. Proficient in various aspects of web
        development, I excel in conceptualizing, designing, and programming
        user-friendly websites. My skills extend to crafting elegant code using
        current best practices, ensuring seamless user experiences and optimal
        search engine visibility.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
