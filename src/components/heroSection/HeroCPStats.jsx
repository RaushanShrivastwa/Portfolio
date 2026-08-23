
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const HeroCPStats = () => {
  const stats = [
    {
      label: "LeetCode Solved",
      value: "250+",
      sub: "Data Structures & Algorithms",
      icon: <SiLeetcode className="text-yellow-500 text-2xl" />,
      link: "https://leetcode.com/u/raushan7219/",
    },
    {
      label: "CodeChef Solved",
      value: "350+",
      sub: "Competitive Programming",
      icon: <SiCodechef className="text-amber-700 text-2xl" />,
      link: "https://www.codechef.com/users/raushan2709",
    },
    {
      label: "GeeksforGeeks",
      value: "100+",
      sub: "Core CS Fundamentals",
      icon: <FaCode className="text-green-500 text-2xl" />,
      link: "https://www.geeksforgeeks.org/profile/raushan2709",
    },
    {
      label: "VIT-AP B.Tech CSE",
      value: "9.09",
      sub: "CGPA (2023 - 2027)",
      icon: <FaGraduationCap className="text-cyan text-2xl" />,
      link: "#education",
    },

  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full max-w-[1200px] mx-auto px-4 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat, idx) => (
        <a
          key={idx}
          href={stat.link}
          target={stat.link.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan/40 bg-brown/30 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan/5 rounded-bl-full pointer-events-none group-hover:bg-cyan/10 transition-colors duration-300" />
            
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan/30 transition-colors">
                {stat.icon}
              </div>
              <span className="text-2xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan transition-colors">
                {stat.value}
              </span>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-lightGrey group-hover:text-white transition-colors">
                {stat.label}
              </h4>
              <p className="text-xs text-grey/80 font-mono mt-0.5">
                {stat.sub}
              </p>
            </div>
          </div>
        </a>
      ))}
    </motion.div>
  );
};

export default HeroCPStats;
