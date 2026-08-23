import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TiltCard from "../TiltCard";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    type: "work",
    job: "Full Stack Developer Intern",
    company: "Purple Technology",
    date: "Jan 2025 – March 2025",
    location: "Remote / Hybrid",
    highlights: "15% Latency Improvement",
    responsibilities: [
      "Developed a College Connect web application using Node.js, Express.js, MongoDB, and Redis, enabling seamless student interactions and efficient session management.",
      "Centralized user sessions within Redis, improving overall application response time by 15% and building a scalable infrastructure to support high concurrency.",
      "Collaborated on API design, DB schema optimization, and secure JWT/session authentication flows.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Redis", "REST APIs"],
  },
  {
    type: "education",
    job: "B.Tech in Computer Science & Engineering",
    company: "Vellore Institute of Technology – AP",
    date: "2023 – 2027",
    location: "Amaravati, India",
    highlights: "CGPA: 9.09 / 10.00",
    responsibilities: [
      "CS Undergrad with hands-on experience building distributed systems, containerized microservices, and production ML platforms.",
      "Strong foundation in Data Structures, Algorithms, Computer Architecture, Database Management Systems, Systems Design, and Operating Systems.",
      "Active participant in competitive programming (250+ LeetCode, 350+ CodeChef, 100+ GFG).",
    ],
    skills: ["Java", "Python", "C++", "DSA", "Systems Design", "DBMS"],
  },
  {
    type: "education",
    job: "Senior Secondary (Class XII)",
    company: "Arpa International School",
    date: "2020 – 2022",
    location: "Bihar, India",
    responsibilities: [
      "Completed higher secondary education with a strong foundation in Physics, Chemistry, and Mathematics.",
      "Explored core fundamentals of programming and computer systems in Computer Science.",
    ],
    skills: ["Mathematics", "Physics", "Chemistry", "C Programming"],
  },
];

const AllExperiences = () => {
  return (
    <div className="relative max-w-[1000px] mx-auto mt-16 px-4">
      {/* Central Glowing Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan via-purple to-orange opacity-25 transform -translate-x-1/2 pointer-events-none" />

      <div className="flex flex-col gap-12">
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-stretch w-full relative ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Alternating empty spacer for desktop grid spacing */}
              <div className="hidden md:block w-1/2" />

              {/* Timeline Connector Circle Node */}
              <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full bg-darkBrown border-4 border-cyan z-10 transform -translate-x-1/2 top-8 shadow-[0_0_20px_rgba(0,242,254,0.9)] flex items-center justify-center pointer-events-none" />

              {/* Tilted Glass Card Wrapper */}
              <motion.div
                variants={fadeIn(isEven ? "left" : "right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
              >
                <TiltCard className="border border-white/10 bg-brown/20 backdrop-blur-xl p-6 rounded-3xl shadow-2xl hover:border-cyan/40 transition-all duration-300 group">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-cyan font-mono text-xs tracking-widest uppercase font-semibold">
                      {experience.date}
                    </span>
                    {experience.highlights && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan font-mono font-bold">
                        {experience.highlights}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-white leading-snug group-hover:text-cyan transition-colors">
                    {experience.job}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-orange font-semibold text-sm mt-1">
                    {experience.type === "work" ? <FaBriefcase className="text-xs" /> : <FaGraduationCap className="text-sm" />}
                    <span>{experience.company}</span>
                    {experience.location && (
                      <span className="text-grey text-xs font-normal">({experience.location})</span>
                    )}
                  </div>
                  
                  <ul className="list-disc mt-4 pl-4 space-y-2 text-grey text-sm leading-relaxed">
                    {experience.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>

                  {experience.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-white/5">
                      {experience.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-lightGrey">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </TiltCard>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllExperiences;
