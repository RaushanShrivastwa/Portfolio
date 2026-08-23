import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "../TiltCard";
import { 
  FaCode, FaServer, FaBrain, FaDatabase, FaCloud, FaCheckCircle, 
  FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaLinux 
} from "react-icons/fa";
import { 
  SiCplusplus, SiJavascript, SiNextdotjs, SiSpringboot, 
  SiTensorflow, SiPytorch, SiMongodb, SiMysql, SiPostgresql, SiRedis, 
  SiFirebase, SiJenkins, SiCloudflare, SiTailwindcss 
} from "react-icons/si";

const skillCategories = [
  {
    id: "all",
    label: "All Tech Stack",
    icon: <FaCode />,
  },
  {
    id: "languages",
    label: "Languages",
    icon: <FaCode className="text-yellow-400" />,
  },
  {
    id: "development",
    label: "Full-Stack & Web",
    icon: <FaServer className="text-cyan" />,
  },
  {
    id: "ai_ml",
    label: "ML & AI Systems",
    icon: <FaBrain className="text-purple" />,
  },
  {
    id: "databases",
    label: "Databases & Cache",
    icon: <FaDatabase className="text-green-400" />,
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    icon: <FaCloud className="text-orange" />,
  },
  {
    id: "engineering",
    label: "SDE Practices",
    icon: <FaCheckCircle className="text-lightCyan" />,
  },
];

const skillsData = [
  // Languages
  { name: "Java", category: "languages", icon: <FaJava className="text-red-500 text-3xl" /> },
  { name: "Python", category: "languages", icon: <FaPython className="text-blue-400 text-3xl" /> },
  { name: "C++", category: "languages", icon: <SiCplusplus className="text-blue-600 text-3xl" /> },
  { name: "C", category: "languages", icon: <FaCode className="text-grey text-3xl" /> },
  { name: "JavaScript", category: "languages", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },

  // Full Stack
  { name: "React.js", category: "development", icon: <FaReact className="text-cyan text-3xl" /> },
  { name: "Next.js", category: "development", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "Node.js", category: "development", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "Express.js", category: "development", icon: <FaServer className="text-lightGrey text-3xl" /> },
  { name: "Spring Boot", category: "development", icon: <SiSpringboot className="text-green-400 text-3xl" /> },
  { name: "Tailwind CSS", category: "development", icon: <SiTailwindcss className="text-cyan text-3xl" /> },

  // ML / AI
  { name: "TensorFlow", category: "ai_ml", icon: <SiTensorflow className="text-orange text-3xl" /> },
  { name: "PyTorch", category: "ai_ml", icon: <SiPytorch className="text-red-400 text-3xl" /> },
  { name: "Keras", category: "ai_ml", icon: <FaBrain className="text-red-500 text-3xl" /> },
  { name: "CNN & Vision", category: "ai_ml", icon: <FaBrain className="text-purple text-3xl" /> },
  { name: "LLM & AI Agents", category: "ai_ml", icon: <FaBrain className="text-cyan text-3xl" /> },

  // Databases
  { name: "MongoDB", category: "databases", icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: "Redis", category: "databases", icon: <SiRedis className="text-red-600 text-3xl" /> },
  { name: "MySQL", category: "databases", icon: <SiMysql className="text-blue-500 text-3xl" /> },
  { name: "PostgreSQL", category: "databases", icon: <SiPostgresql className="text-blue-400 text-3xl" /> },
  { name: "Firebase", category: "databases", icon: <SiFirebase className="text-yellow-500 text-3xl" /> },

  // Cloud & DevOps
  { name: "Docker", category: "devops", icon: <FaDocker className="text-blue-400 text-3xl" /> },
  { name: "Jenkins CI/CD", category: "devops", icon: <SiJenkins className="text-red-400 text-3xl" /> },
  { name: "AWS", category: "devops", icon: <FaAws className="text-orange text-3xl" /> },
  { name: "Cloudflare", category: "devops", icon: <SiCloudflare className="text-orange text-3xl" /> },
  { name: "Linux & Git", category: "devops", icon: <FaLinux className="text-white text-3xl" /> },

  // SDE Practices
  { name: "Systems Design", category: "engineering", icon: <FaServer className="text-cyan text-3xl" /> },
  { name: "Microservices", category: "engineering", icon: <FaCloud className="text-purple text-3xl" /> },
  { name: "Async & Concurrency", category: "engineering", icon: <FaCode className="text-orange text-3xl" /> },
  { name: "SDLC & Code Reviews", category: "engineering", icon: <FaCheckCircle className="text-green-400 text-3xl" /> },
];

const SkillsCategorized = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full max-w-[1100px] mx-auto mt-6 px-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-xs md:text-sm flex items-center gap-2 transition-all duration-300 border ${
                isActive
                  ? "bg-cyan/15 text-cyan border-cyan shadow-[0_0_20px_rgba(0,242,254,0.2)] scale-105"
                  : "bg-brown/20 text-grey border-white/5 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Filtered Grid with 3D Tilt Cards */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={skill.name}
            >
              <TiltCard className="h-full border border-white/10 hover:border-cyan/40 bg-brown/30 backdrop-blur-xl p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-cyan/5 transition-all duration-300 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-cyan/5 rounded-bl-full pointer-events-none group-hover:bg-cyan/10 transition-colors" />
                <div className="mb-3 transform group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                  {skill.icon}
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan transition-colors">
                  {skill.name}
                </h4>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SkillsCategorized;

