import SkillsText from "./SkillsText";
import SkillsCategorized from "./SkillsCategorized";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills" className="w-full py-16 overflow-hidden">
      <div className="max-w-[1200px] px-4 mx-auto flex flex-col items-center justify-center relative">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <SkillsText />
        </motion.div>

        {/* Filterable Interactive 3D Skill Cards */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full"
        >
          <SkillsCategorized />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsMain;


