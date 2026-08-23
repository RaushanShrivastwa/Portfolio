import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse or touch positions relative to card boundaries (0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth out coordinate tracking
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Map coordinate values to 3D rotation angles
  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);

  // Track coordinates for moving reflection glare position
  const glareX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(springY, [0, 1], ["0%", "100%"]);

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    let clientX = e.clientX;
    let clientY = e.clientY;

    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }

    const width = rect.width;
    const height = rect.height;
    
    const relativeX = (clientX - rect.left) / width;
    const relativeY = (clientY - rect.top) / height;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    // Smoothly reset tilt
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onTouchMove={handlePointerMove}
      onTouchStart={handlePointerEnter}
      onTouchEnd={handlePointerLeave}
      className={`relative overflow-hidden rounded-xl border border-white/5 bg-brown/40 p-6 backdrop-blur-md transition-all duration-300 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      animate={{
        boxShadow: isHovered 
          ? "0 25px 50px -12px rgba(0, 242, 254, 0.18), 0 0 25px -5px rgba(0, 242, 254, 0.12)" 
          : "0 4px 30px rgba(0, 0, 0, 0.15)",
        borderColor: isHovered ? "rgba(0, 242, 254, 0.3)" : "rgba(255, 255, 255, 0.05)"
      }}
    >
      {/* 3D Perspective Glare / Reflection Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-full z-10 bg-[radial-gradient(circle_at_var(--glare-x)_var(--glare-y),rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_50%)]"
        style={{
          "--glare-x": glareX,
          "--glare-y": glareY,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Content wrapper with transform depth to raise text in 3D space */}
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
