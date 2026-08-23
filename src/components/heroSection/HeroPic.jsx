import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  const containerRef = useRef(null);

  // Track position relative to card (0 to 1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Background frame rotation
  const bgRotateX = useTransform(springY, [0, 1], [15, -15]);
  const bgRotateY = useTransform(springX, [0, 1], [-15, 15]);

  // Foreground image translate offset (for depth parallax)
  const imgTranslateX = useTransform(springX, [0, 1], [-12, 12]);
  const imgTranslateY = useTransform(springY, [0, 1], [-12, 12]);

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = e.clientX;
    let clientY = e.clientY;

    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }

    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handlePointerLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={containerRef}
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerLeave}
      className="h-full flex items-center justify-center relative p-8 cursor-pointer select-none"
      style={{
        perspective: 1000,
      }}
    >
      {/* 3D Background Card / Frame */}
      <motion.div
        className="w-[260px] h-[320px] md:w-[320px] md:h-[390px] rounded-[2rem] border border-white/10 bg-brown/20 backdrop-blur-md absolute -z-10 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,242,254,0.1)] flex justify-center items-center overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          rotateX: bgRotateX,
          rotateY: bgRotateY,
        }}
      >
        {/* Glowing moving light spot on card background */}
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-cyan/10 blur-3xl pointer-events-none"
          style={{
            x: useTransform(springX, [0, 1], ["-50%", "50%"]),
            y: useTransform(springY, [0, 1], ["-50%", "50%"]),
          }}
        />

        {/* Rotating inner geometric lines */}
        <div className="absolute inset-0 flex justify-center items-center opacity-30 pointer-events-none">
          <PiHexagonThin className="w-[85%] h-auto text-cyan animate-[spin_25s_linear_infinite]" />
        </div>
      </motion.div>

      {/* Floating Foreground Profile Image */}
      <motion.img
        src="/profile.jpg"
        alt="Raushan Shrivastwa"
        className="max-h-[320px] md:max-h-[390px] w-auto rounded-[2rem] object-cover border-2 border-cyan/30 shadow-[0_20px_35px_rgba(0,0,0,0.65)] select-none z-10"
        style={{
          x: imgTranslateX,
          y: imgTranslateY,
          transform: "translateZ(50px)",
        }}
      />
    </motion.div>

  );
};

export default HeroPic;
