
import { FaDownload } from "react-icons/fa";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start items-center md:text-left text-center max-w-[650px]">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
        About <span className="text-cyan">Me</span>
      </h2>
      <div className="glass-panel border border-white/10 bg-brown/20 backdrop-blur-xl p-6 md:p-8 rounded-3xl text-grey text-base md:text-lg leading-relaxed shadow-xl space-y-4">
        <p>
          I am <strong className="text-white font-bold">Raushan Shrivastwa</strong>, a Computer Science undergrad at <span className="text-cyan font-semibold">Vellore Institute of Technology – AP (9.09 CGPA)</span> with hands-on experience building distributed systems, containerized microservices, and production-deployed ML platforms.
        </p>
        <p>
          Proficient in <strong className="text-white font-semibold">Java, Python, C++, and JavaScript</strong>, with a strong foundation in Data Structures, Algorithms, and Systems Design. I specialize in asynchronous & concurrent request handling in backend services (Node.js, Express, Redis, FastAPI, Docker Compose, Jenkins CI/CD) and full-stack AI engineering.
        </p>
      </div>

      <a
        href="/resume.pdf"
        download="Raushan_Shrivastwa_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange to-lightOrange text-black font-bold text-sm flex items-center gap-2 hover:shadow-[0_0_25px_rgba(255,90,54,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
      >
        <FaDownload className="text-sm" /> Download Resume
      </a>
    </div>
  );
};

export default AboutMeText;


