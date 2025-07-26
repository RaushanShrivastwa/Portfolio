import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

export const projects = [
  {
    name: "AGRO-MITRA: An AgiTech Platform",
    year: "Oct 2024",
    align: "right",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    description: "An agricultural platform providing subsidies, fertilizer use, soil health, and real-time crop pricing in local languages. Built with Tailwind CSS, Python, PHP, Flask, MySQL, and Firebase.",
    link: "https://github.com/hmm183/agromitra-ML", // Add your project link here
    videoLink: "#" // Add your video link here
  },
  {
    name: "FACIAL RECOGNITION: Biometric Authentication",
    year: "Dec 2024",
    align: "left",
    image: "https://static.tildacdn.com/tild3732-6431-4664-b037-386230346464/what-is-FR.jpg",
    description: "A precise facial recognition system using TensorFlow and Keras to verify identity by comparing a reference image with a real-time camera frame. Implemented with OpenCV.",
    link: "https://github.com/RaushanShrivastwa/Facial-Recognition", // Add your project link here
  },
  {
    name: "COLLEGE CONNECT: An Ed-Tech Platform",
    year: "Feb 2025",
    align: "right",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    description: "A web application using Node.js, Express.js, MongoDB, and Redis, enabling seamless student interactions and efficient session management with enhanced performance and scalability.",
    link: "https://github.com/RaushanShrivastwa/College-Connect", // Add your project link here
    documentLink: "#" // Add your document link here
  },
  {
    name: "FACULTY RANKER: Professor Performance Platform",
    year: "Jun 2024",
    align: "left",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/hmm183/faculty_ranker"
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
      <div className="w-full h-1 mt-16 bg-lightBrown"></div>
    </div>
    
  );
};

export default ProjectsMain;
