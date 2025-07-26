import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="education" className="max-w-[1200px] mx-auto my-10 px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        
      </motion.div>
      
      <AllExperiences />
    </div>
  );
};

export default ExperienceMain;
