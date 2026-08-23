
import { motion } from "framer-motion";
import TiltCard from "../TiltCard";
import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";

// Helper function for animations
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const ProjectsText = () => {
  return (
    <div className="text-center mt-20 mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Featured <span className="text-cyan">SDE Projects</span>
      </h2>
      <p className="text-grey mt-4 text-base md:text-lg max-w-[650px] mx-auto leading-relaxed">
        Production-grade engineering implementations spanning distributed microservices, containerized orchestrators, full-stack systems, and AI/ML pipelines.
      </p>
    </div>
  );
};

const SingleProject = ({ name, year, description, metric, image, link, github, align, tags }) => {
  const isRightAligned = align === 'right';
  const contentOrder = isRightAligned ? 'md:flex-row-reverse' : 'md:flex-row';
  const textAlign = isRightAligned ? 'md:text-right' : 'md:text-left';
  const itemAlignment = isRightAligned ? 'md:items-end' : 'md:items-start';

  return (
    <div className={`flex flex-col ${contentOrder} gap-10 items-center w-full relative`}>
      {/* 3D Tilted Screenshot Card */}
      <a
        href={link || github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-[48%] group block"
      >
        <TiltCard className="p-2.5 border border-white/10 bg-brown/20 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-cyan/40 transition-colors duration-500">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
            <img
              src={image}
              alt={`Screenshot of ${name}`}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkBrown via-transparent to-transparent opacity-60" />

            {/* Metric Floating Badge */}
            {metric && (
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-cyan/40 px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan flex items-center gap-1.5 shadow-lg">
                <FaRocket className="text-orange" /> {metric}
              </div>
            )}
          </div>
        </TiltCard>
      </a>

      {/* Details Showcase */}
      <div className={`w-full md:w-[48%] flex flex-col ${textAlign} ${itemAlignment}`}>
        <span className="text-cyan mb-1.5 font-mono text-xs font-semibold tracking-widest uppercase">{year}</span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">{name}</h3>

        {/* Glassmorphic Description Box */}
        <div className="glass-panel border border-white/10 p-6 rounded-2xl text-grey leading-relaxed mb-6 shadow-xl w-full text-sm md:text-base">
          <p>{description}</p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6 justify-start">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-lightGrey hover:border-cyan/40 hover:text-cyan transition-colors duration-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-xs flex items-center gap-2 hover:bg-white/10 hover:border-cyan/40 transition-all duration-300"
            >
              <FaGithub className="text-sm" /> Code Repo
            </a>
          )}
          {link && link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan to-lightCyan text-black font-bold text-xs flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-xs" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const projects = [
  {
    name: "AgroMitra – Agricultural Tech Microservices Platform",
    year: "May 2026",
    align: "right",
    metric: "15+ REST Endpoints & i18n",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    description: "Led frontend architecture and UX for a full-stack agricultural platform with decoupled microservices backend. Built real-time dashboards rendering data from 15+ REST endpoints (weather, crop recommendation, Razorpay, subsidy matching) with high-availability fallback architecture during ML service outages.",
    tags: ["React.js", "Node.js/Express", "Flask ML APIs", "i18n", "Microservices", "MySQL", "Firebase"],
    github: "https://github.com/hmm183/agromitra-ML",
    link: "https://agromitra-ml.vercel.app/login",
  },
  {
    name: "SwiftMedilink – Healthcare Platform & AI Suite",
    year: "Oct 2025",
    align: "left",
    metric: "85–95% Accuracy on 10k+ Samples",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    description: "Trained 3 ML models for disease prediction on 10,000+ medical samples (85–95% accuracy) deployed on Hugging Face. Built full-stack healthcare platform featuring an LLM-powered chatbot, OCR prescription digitization, EHR management, and RBAC across 3 user roles.",
    tags: ["Python", "FastAPI", "MERN Stack", "TensorFlow", "PyTorch", "LLM", "OCR", "Hugging Face"],
    github: "https://github.com/RaushanShrivastwa/SIH",
    link: "https://swiftmedilink.vercel.app/",
  },
  {
    name: "Distributed Architecture Task Orchestrator",
    year: "Feb 2026",
    align: "right",
    metric: "50% Image Size Reduction (Docker + Jenkins)",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2070&auto=format&fit=crop",
    description: "Architected and deployed a full-stack task-orchestration system with Next.js, Node.js, Express.js, and MongoDB Atlas. Containerized microservices using Docker Compose, reducing production image size by 50% via multi-stage builds and automating deployments via a Jenkins CI/CD pipeline on git push.",
    tags: ["Next.js", "Node.js", "Express.js", "Docker Compose", "Jenkins CI/CD", "MongoDB Atlas"],
    github: "https://github.com/RaushanShrivastwa/Distributed-Architecture-Task-Orchestrator",
    link: null,
  },
  {
    name: "College Connect – Ed-Tech Platform",
    year: "Jan 2025 – Mar 2025",
    align: "left",
    metric: "15% Latency Reduction via Redis",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    description: "Developed a web application using Node.js, Express.js, MongoDB, and Redis enabling seamless student interactions. Centralized user sessions within Redis, improving overall application response latency by 15% and supporting high concurrency.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "CSS"],
    github: "https://github.com/RaushanShrivastwa/College-Connect",
    link: null,
  },
  {
    name: "Facial Recognition System",
    year: "Dec 2024",
    align: "right",
    metric: "Real-Time OpenCV Biometrics",
    image: "https://static.tildacdn.com/tild3732-6431-4664-b037-386230346464/what-is-FR.jpg",
    description: "Precise biometric authentication system using TensorFlow and Keras to verify identity by comparing reference images with real-time camera frames with OpenCV.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com/RaushanShrivastwa/Facial-Recognition",
    link: null,
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 py-16">
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[1100px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn(project.align === 'left' ? "right" : "left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <SingleProject
                {...project}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="w-full h-[1px] mt-24 bg-white/10"></div>
    </div>
  );
};

export default ProjectsMain;



