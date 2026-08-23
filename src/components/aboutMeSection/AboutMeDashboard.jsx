import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "../TiltCard";
import { FaCode, FaGithub, FaFire, FaChartPie, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const AboutMeDashboard = () => {
  const [activeTab, setActiveTab] = useState("chart"); // 'chart' | 'heatmap' | 'metrics'

  // Coding platforms data
  const platforms = [
    { name: "CodeChef", count: 350, percentage: 50.0, color: "#ff5a36", icon: <SiCodechef className="text-orange" />, url: "https://www.codechef.com/users/raushan2709" },
    { name: "LeetCode", count: 250, percentage: 35.7, color: "#00f2fe", icon: <SiLeetcode className="text-cyan" />, url: "https://leetcode.com/u/raushan7219/" },
    { name: "GeeksforGeeks", count: 100, percentage: 14.3, color: "#10b981", icon: <FaCode className="text-emerald-400" />, url: "https://www.geeksforgeeks.org/profile/raushan2709" },
  ];

  // Simulated GitHub 52-week activity grid (7 rows x 20 columns snippet)
  const contributionGrid = Array.from({ length: 140 }, () => {
    const r = Math.random();
    if (r > 0.7) return 3; // high
    if (r > 0.45) return 2; // medium
    if (r > 0.25) return 1; // low
    return 0; // none
  });

  return (
    <div className="relative group w-full max-w-[520px]">
      {/* Ambient Backdrop Blur Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan via-purple to-orange rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-35 transition-all duration-700 -z-10 animate-float-slow" />

      <TiltCard className="border border-white/10 bg-brown/30 backdrop-blur-2xl p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
        {/* Header Title Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan animate-pulse" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Developer Analytics Dashboard
            </span>
          </div>

          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("chart")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                activeTab === "chart" ? "bg-cyan text-black shadow-md" : "text-grey hover:text-white"
              }`}
            >
              <FaChartPie className="inline mr-1" /> Pie
            </button>
            <button
              onClick={() => setActiveTab("heatmap")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                activeTab === "heatmap" ? "bg-cyan text-black shadow-md" : "text-grey hover:text-white"
              }`}
            >
              <FaCalendarAlt className="inline mr-1" /> Activity
            </button>
            <button
              onClick={() => setActiveTab("metrics")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                activeTab === "metrics" ? "bg-cyan text-black shadow-md" : "text-grey hover:text-white"
              }`}
            >
              <FaCheckCircle className="inline mr-1" /> Stats
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "chart" && (
            <motion.div
              key="chart"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center py-2"
            >
              {/* SVG Donut Pie Chart */}
              <div className="relative w-44 h-44 flex items-center justify-center my-2">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Background Track */}
                  <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.05)" strokeWidth="12" fill="transparent" />
                  
                  {/* Segment 1: CodeChef 50% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#ff5a36"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="238.7"
                    strokeDashoffset="119.3"
                    className="transition-all duration-1000 hover:opacity-80"
                  />
                  {/* Segment 2: LeetCode 35.7% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#00f2fe"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="238.7"
                    strokeDashoffset="153.5"
                    transform="rotate(180 50 50)"
                    className="transition-all duration-1000 hover:opacity-80"
                  />
                  {/* Segment 3: GFG 14.3% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#10b981"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="238.7"
                    strokeDashoffset="204.5"
                    transform="rotate(308.5 50 50)"
                    className="transition-all duration-1000 hover:opacity-80"
                  />
                </svg>

                {/* Donut Center Label */}
                <div className="absolute flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-2xl font-black font-mono text-white tracking-tight">
                    700+
                  </span>
                  <span className="text-[10px] font-mono text-cyan uppercase tracking-widest font-bold">
                    Problems
                  </span>
                </div>
              </div>

              {/* Platform Distribution Legend Bar */}
              <div className="w-full grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
                {platforms.map((p, idx) => (
                  <a
                    key={idx}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:scale-105"
                  >
                    <div className="flex items-center gap-1 text-xs font-bold text-white mb-0.5">
                      {p.icon}
                      <span>{p.name}</span>
                    </div>
                    <span className="text-xs font-mono font-extrabold text-cyan">{p.count}+</span>
                    <span className="text-[9px] font-mono text-grey/70">{p.percentage}%</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "heatmap" && (
            <motion.div
              key="heatmap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-3 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaGithub className="text-white text-lg" />
                  <span className="text-xs font-bold text-white font-mono">
                    1,200+ Contributions (2025 - 2026)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan">
                  <FaFire className="inline text-orange mr-1 animate-pulse" /> 42 Day Streak
                </span>
              </div>

              {/* Simulated Contribution Matrix */}
              <div className="bg-black/50 p-3 rounded-2xl border border-white/10">
                <div className="grid grid-rows-7 grid-flow-col gap-1.5 justify-center">
                  {contributionGrid.map((val, idx) => {
                    let bg = "bg-white/5";
                    if (val === 1) bg = "bg-cyan/30";
                    if (val === 2) bg = "bg-cyan/60";
                    if (val === 3) bg = "bg-cyan shadow-[0_0_8px_#00f2fe]";
                    return (
                      <div
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-sm ${bg} transition-all duration-300 hover:scale-125`}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-grey px-1">
                <span>Less</span>
                <div className="flex gap-1 items-center">
                  <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-cyan/30" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-cyan/60" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-cyan" />
                </div>
                <span>More</span>
              </div>
            </motion.div>
          )}

          {activeTab === "metrics" && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-2 grid grid-cols-2 gap-3"
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-grey uppercase tracking-wider">Session Latency</span>
                <span className="text-lg font-extrabold text-cyan font-mono mt-1">-15% Response</span>
                <span className="text-[10px] text-grey/80 mt-0.5">Redis Centralized Cache</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-grey uppercase tracking-wider">Docker Build</span>
                <span className="text-lg font-extrabold text-orange font-mono mt-1">-50% Image Size</span>
                <span className="text-[10px] text-grey/80 mt-0.5">Multi-Stage Jenkins CI/CD</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-grey uppercase tracking-wider">Disease Prediction</span>
                <span className="text-lg font-extrabold text-emerald-400 font-mono mt-1">85 - 95% Acc</span>
                <span className="text-[10px] text-grey/80 mt-0.5">3 ML Models on 10k Samples</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-grey uppercase tracking-wider">Academic Merit</span>
                <span className="text-lg font-extrabold text-purple font-mono mt-1">9.09 CGPA</span>
                <span className="text-[10px] text-grey/80 mt-0.5">VIT-AP CSE (2023-2027)</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </TiltCard>
    </div>
  );
};

export default AboutMeDashboard;
