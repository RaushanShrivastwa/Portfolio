import AboutMeDashboard from "./AboutMeDashboard";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-24 justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full md:w-[50%]"
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full md:w-[48%] flex justify-center md:justify-end"
      >
        <AboutMeDashboard />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;

