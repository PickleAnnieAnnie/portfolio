import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import Service from './Service';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Experienced Java Back-End Engineer with a Master’s in Data Science, combining software engineering expertise with data-driven problem solving. Proficient in Spring Boot, RESTful APIs, J2EE, Struts, and skilled in CI/CD pipelines (Bitbucket, Jenkins, Bamboo) as well as secure API design (OAuth, JWT). Adept in Python, machine learning, and data analytics, I bring a unique blend of engineering and data science to deliver scalable, secure, and innovative solutions.
      </motion.p>
      <Service />

    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
