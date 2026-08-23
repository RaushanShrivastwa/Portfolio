import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaFileDownload, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center md:text-left sm:text-center max-w-[650px]">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap items-center gap-2 self-center md:self-start"
      >
        <span className="px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-xs font-semibold uppercase tracking-widest text-cyan shadow-[0_0_15px_rgba(0,242,254,0.15)] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
          Software Development Engineer
        </span>
        <span className="px-3 py-1 rounded-full border border-orange/30 bg-orange/10 text-xs font-semibold text-orange font-mono">
          VIT-AP • CGPA: 9.09
        </span>
      </motion.div>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none"
      >
        <span className="text-white">Raushan</span> <br />
        <span className="bg-gradient-to-r from-cyan via-lightCyan to-orange bg-clip-text text-transparent drop-shadow-sm">
          Shrivastwa
        </span>
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base md:text-lg text-grey/90 leading-relaxed font-normal"
      >
        CS Undergrad specializing in <span className="text-white font-semibold">Distributed Systems</span>, <span className="text-white font-semibold">Containerized Microservices</span>, and <span className="text-white font-semibold">Production ML Platforms</span>. Experienced in Java, Python, C++, and Full-Stack Engineering with a focus on systems design and scalable backend infrastructure.
      </motion.p>

      {/* CTA Action Buttons */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan to-lightCyan text-black font-bold text-sm flex items-center gap-2 hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
        >
          <FaFolderOpen /> View Projects
        </a>

        <a
          href="/resume.pdf"
          download="Raushan_Shrivastwa_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border border-orange/40 bg-orange/10 text-orange font-bold text-sm flex items-center gap-2 hover:bg-orange/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        >
          <FaFileDownload /> Resume PDF
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm flex items-center gap-2 hover:bg-white/10 hover:border-cyan/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
        >
          <FaEnvelope className="text-cyan" /> Get In Touch
        </a>
      </motion.div>
    </div>
  );
};


export default HeroText;

