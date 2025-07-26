import SingleExperience from "./SingleExperience";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "B.Tech [ CSE ]",
    company: "Vellore Institute Of Technology",
    date: "2023 - Present",
    responsibilities: [
      "Implementing real-world software solutions using modern web technologies.",
      "Contributing to collaborative tech projects that enhance development skills.",
      "Strengthening core concepts in algorithms, databases, and system design.",
      "Building full-stack applications with a focus on performance and user experience.",
    ],
  },
  {
    job: "Senior Secondary",
    company: "Arpa International School",
    date: "2020 - 2022",
    responsibilities: [
      "Completed higher secondary education with a strong foundation in Physics, Chemistry, and Mathematics.",
      "Explored the fundamentals of programming and computer systems in Computer Science.",
      "Built a solid base in mathematics and coding to support future learning in technology and engineering.",
      "Developed logical thinking and analytical problem-solving through core science subjects.",
    ],
  },
  {
    job: "Secondary",
    company: "S S Public School",
    date: "2019-2020",
    responsibilities: [
      "Cultivated early leadership skills as School Captain and a passion for innovation through successful participation in science exhibitions.",
      "Built a solid academic and extracurricular foundation, excelling as a student leader and winning an award for a science exhibition project.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between text-blue">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("left", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowLeftLong className="text-6xl text-green lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
