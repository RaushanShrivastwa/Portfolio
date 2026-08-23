import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaTimes, FaChevronRight, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const TerminalWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: '🤖 Welcome to Raushan\'s Interactive SDE Assistant Shell!\nType any question (e.g. "who are you", "skills", "projects", "internship", "cgpa", "contact") or click quick pills below.',
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuery = (queryStr) => {
    const rawQuery = queryStr.trim();
    if (!rawQuery) return;
    const q = rawQuery.toLowerCase();

    const newHistory = [...history, { type: "input", text: `$ ${rawQuery}` }];

    // Help / Commands
    if (q === "help" || q === "?" || q === "commands") {
      newHistory.push({
        type: "output",
        text: `Available Quick Commands:\n  • about        - Brief summary & background\n  • skills       - Technical stack, ML/AI, & databases\n  • projects     - AgroMitra, Orchestrator, & SwiftMedilink\n  • experience   - Internship @ Purple Technology\n  • education    - VIT-AP CSE & CGPA details\n  • cp           - LeetCode, CodeChef, & GFG stats\n  • certs        - Oracle, Google, & Microsoft certifications\n  • contact      - Email, phone, & social handles\n  • resume       - Direct link to PDF resume\n  • clear        - Clear shell history\n\nOr ask any natural question like "What is your CGPA?" or "Tell me about AgroMitra"!`,
      });
    }
    // About / Who / Profile
    else if (q.includes("about") || q.includes("who") || q.includes("profile") || q.includes("bio") || q.includes("background")) {
      newHistory.push({
        type: "output",
        text: `[ABOUT RAUSHAN SHRIVASTWA]\nRaushan is a Computer Science undergrad at Vellore Institute of Technology – AP (9.09 CGPA) specializing in Distributed Systems, Containerized Microservices, and Production ML Platforms. Experienced in Java, Python, C++, and Full-Stack Engineering.`,
        action: { label: "Jump to About Me Section ➔", sectionId: "about" },
      });
      scrollToSection("about");
    }
    // Skills / Tech Stack
    else if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("java") || q.includes("python") || q.includes("react") || q.includes("node") || q.includes("docker")) {
      newHistory.push({
        type: "output",
        text: `[TECHNICAL TECH STACK]\n► Languages: Java, Python, C, C++, JavaScript\n► Full-Stack: React.js, Next.js, Node.js, Express.js, Spring Boot, Tailwind CSS\n► ML & AI: TensorFlow, PyTorch, Keras, CNN, LLM Integration, AI-Agents\n► Databases & Cache: MongoDB, MySQL, PostgreSQL, Firebase, Redis\n► Cloud & DevOps: AWS, Docker, Docker Compose, Jenkins CI/CD, Linux, Git`,
        action: { label: "Jump to Skills Matrix ➔", sectionId: "skills" },
      });
      scrollToSection("skills");
    }
    // Projects
    else if (q.includes("project") || q.includes("agromitra") || q.includes("swiftmedilink") || q.includes("orchestrator") || q.includes("college connect") || q.includes("facial")) {
      newHistory.push({
        type: "output",
        text: `[FEATURED SDE PROJECTS]\n1. AgroMitra: AgTech platform with decoupled microservices & 15+ REST endpoints.\n2. Distributed Task Orchestrator: Next.js + Docker Compose + Jenkins CI/CD (50% image reduction).\n3. SwiftMedilink: Healthcare suite with 3 ML models (95% accuracy) & LLM chatbot.\n4. College Connect: EdTech platform with Redis session caching (15% latency reduction).`,
        action: { label: "Jump to SDE Projects Showcase ➔", sectionId: "projects" },
      });
      scrollToSection("projects");
    }
    // Experience / Internship / Purple Tech
    else if (q.includes("experience") || q.includes("intern") || q.includes("work") || q.includes("purple") || q.includes("job")) {
      newHistory.push({
        type: "output",
        text: `[WORK EXPERIENCE]\n► Full Stack Developer Intern @ Purple Technology (Jan 2025 - Mar 2025)\n  - Built College Connect web app with Node.js, Express.js, MongoDB, & Redis.\n  - Centralized user sessions in Redis, cutting latency by 15% and supporting high concurrency.`,
        action: { label: "Jump to Work Experience Timeline ➔", sectionId: "education" },
      });
      scrollToSection("education");
    }
    // Education / VIT / CGPA
    else if (q.includes("education") || q.includes("vit") || q.includes("cgpa") || q.includes("gpa") || q.includes("college") || q.includes("university") || q.includes("degree")) {
      newHistory.push({
        type: "output",
        text: `[ACADEMIC EDUCATION]\n► Vellore Institute of Technology – AP (2023 - 2027)\n► B.Tech in Computer Science & Engineering\n► CGPA: 9.09 / 10.00\n► Core: DSA, Systems Design, DBMS, OOPs, Computer Architecture, OS`,
        action: { label: "Jump to Education Details ➔", sectionId: "education" },
      });
      scrollToSection("education");
    }
    // Competitive Programming / LeetCode / CodeChef / GFG
    else if (q.includes("cp") || q.includes("leetcode") || q.includes("codechef") || q.includes("gfg") || q.includes("solved") || q.includes("dsa") || q.includes("algorithm")) {
      newHistory.push({
        type: "output",
        text: `[COMPETITIVE PROGRAMMING (700+ SOLVED)]\n► LeetCode (250+ Solved): leetcode.com/u/raushan7219/\n► CodeChef (350+ Solved): codechef.com/users/raushan2709\n► GeeksforGeeks (100+ Solved): geeksforgeeks.org/profile/raushan2709\n► Focus: Graph Theory, Dynamic Programming, Trees, Backtracking`,
        action: { label: "Jump to Certifications & Achievements ➔", sectionId: "certifications" },
      });
      scrollToSection("certifications");
    }
    // Certifications
    else if (q.includes("cert") || q.includes("oracle") || q.includes("google") || q.includes("microsoft") || q.includes("cloud")) {
      newHistory.push({
        type: "output",
        text: `[VERIFIED CERTIFICATIONS]\n1. Oracle Cloud Infrastructure Certified Foundation Associate (Oracle)\n2. Foundation: Data, Data, Everywhere (Google)\n3. Career Essentials in Generative AI (Microsoft)`,
        action: { label: "Jump to Certifications Section ➔", sectionId: "certifications" },
      });
      scrollToSection("certifications");
    }
    // Contact / Reach
    else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("message") || q.includes("hire")) {
      newHistory.push({
        type: "output",
        text: `[DIRECT CONTACT DETAILS]\n► Email: raushann.shrivastwa@gmail.com\n► Phone: +91 6205431508\n► Location: Bihar, India\n► GitHub: github.com/RaushanShrivastwa\n► LinkedIn: linkedin.com/in/raushan-shrivastwa-319a2a232/`,
        action: { label: "Jump to Contact Form ➔", sectionId: "contact" },
      });
      scrollToSection("contact");
    }
    // Resume
    else if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      newHistory.push({
        type: "output",
        text: `[RESUME DOWNLOAD]\nRaushan's latest SDE Resume is available for download. Click below to view or download the PDF.`,
        downloadUrl: "/resume.pdf",
      });
    }
    // Clear
    else if (q === "clear" || q === "cls") {
      setHistory([]);
      setInputVal("");
      return;
    }
    // Default fallback
    else {
      newHistory.push({
        type: "output",
        text: `Brief: Raushan Shrivastwa is an SDE & AI Systems engineer at VIT-AP (9.09 CGPA). Type "help" or ask about "skills", "projects", "experience", "education", or "contact".`,
        action: { label: "Explore Projects Section ➔", sectionId: "projects" },
      });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleQuery(inputVal);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-darkBrown border border-cyan/40 text-cyan shadow-[0_0_25px_rgba(0,242,254,0.35)] backdrop-blur-2xl hover:bg-cyan/10 transition-all font-mono text-xs font-bold cursor-pointer"
        >
          <FaTerminal className="text-sm animate-pulse text-cyan" />
          <span>SDE Terminal</span>
        </motion.button>
      )}

      {/* Terminal Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="w-[92vw] max-w-[520px] h-[400px] rounded-3xl bg-black/90 border border-cyan/40 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(0,242,254,0.2)] backdrop-blur-2xl flex flex-col overflow-hidden font-mono text-xs"
          >
            {/* Header Bar */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-lightGrey text-[11px] ml-2 font-mono">raushan@sde-shell ~ </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-grey hover:text-white transition-colors cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            {/* Quick Action Preset Pills */}
            <div className="px-3 py-2 bg-white/[0.02] border-b border-white/5 flex flex-wrap gap-1.5 overflow-x-auto">
              {["about", "skills", "projects", "experience", "education", "cp", "contact", "resume", "clear"].map((btnCmd) => (
                <button
                  key={btnCmd}
                  onClick={() => handleQuery(btnCmd)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan/20 border border-white/10 hover:border-cyan/40 text-[10px] font-bold text-cyan transition-all cursor-pointer"
                >
                  {btnCmd}
                </button>
              ))}
            </div>

            {/* Terminal Console Display */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-lightGrey scrollbar-thin scrollbar-thumb-cyan/20">
              {history.map((item, idx) => (
                <div key={idx} className="leading-relaxed whitespace-pre-wrap flex flex-col gap-1.5">
                  {item.type === "input" && (
                    <span className="text-cyan font-semibold">{item.text}</span>
                  )}
                  {item.type === "output" && (
                    <span className="text-grey">{item.text}</span>
                  )}
                  {item.type === "system" && (
                    <span className="text-cyan/90 italic">{item.text}</span>
                  )}
                  
                  {/* Action Jump Button */}
                  {item.action && (
                    <button
                      onClick={() => {
                        scrollToSection(item.action.sectionId);
                        setIsOpen(false);
                      }}
                      className="self-start mt-1 px-3 py-1.5 rounded-lg bg-cyan/15 hover:bg-cyan/30 border border-cyan/40 text-cyan text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>{item.action.label}</span>
                      <FaArrowRight className="text-[10px]" />
                    </button>
                  )}

                  {/* Resume Download Action Button */}
                  {item.downloadUrl && (
                    <a
                      href={item.downloadUrl}
                      download="Raushan_Shrivastwa_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start mt-1 px-3 py-1.5 rounded-lg bg-orange/20 hover:bg-orange/30 border border-orange/40 text-orange text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Download Resume PDF ➔</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Command Input Bar */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 p-3 flex items-center gap-2 bg-black/90">
              <FaChevronRight className="text-cyan text-sm animate-pulse" />
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask anything about me (e.g. 'skills', 'cgpa', 'projects')..."
                className="flex-1 bg-black/90 text-cyan font-bold border border-cyan/40 rounded-xl px-3 py-2 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/40 font-mono text-xs placeholder:text-grey/60 text-cyan selection:bg-cyan selection:text-black shadow-inner"
              />
              <button
                type="submit"
                className="text-xs px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan to-lightCyan text-black font-extrabold hover:shadow-[0_0_15px_rgba(0,242,254,0.5)] transition-all cursor-pointer"
              >
                Send
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TerminalWidget;
