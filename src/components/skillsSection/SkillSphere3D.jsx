import { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiRedux, SiExpress, SiDocker } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { name: "HTML", Icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", Icon: IoLogoJavascript, color: "#f7df1e" },
  { name: "NodeJS", Icon: FaNodeJs, color: "#339933" },
  { name: "ReactJS", Icon: FaReact, color: "#61dafb" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "TailwindCSS", Icon: RiTailwindCssFill, color: "#06b6d4" },
  { name: "Python", Icon: FaPython, color: "#3776ab" },
  { name: "Express", Icon: SiExpress, color: "#828282" },
  { name: "Redux", Icon: SiRedux, color: "#764abc" },
  { name: "Git", Icon: FaGitAlt, color: "#f05032" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
];

const SkillSphere3D = () => {
  const containerRef = useRef(null);
  const [items, setItems] = useState([]);
  
  // Track rotation coordinates and touch swipe inputs
  const speedX = useRef(0.003);
  const speedY = useRef(0.003);
  const isDragging = useRef(false);
  const previousTouch = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const count = skills.length;
    const radius = window.innerWidth < 768 ? 120 : 190;
    const tempItems = [];

    // Distribute skills evenly across a sphere using the Fibonacci Spiral layout
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      tempItems.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        skill: skills[i],
        scale: 1,
        alpha: 1,
        projX: 0,
        projY: 0,
      });
    }
    setItems(tempItems);
  }, []);

  useEffect(() => {
    let animationId;
    const radius = window.innerWidth < 768 ? 120 : 190;

    const rotateSphere = () => {
      // Slowly decay speed if not being actively dragged/swiped (friction)
      if (!isDragging.current) {
        speedX.current *= 0.96;
        speedY.current *= 0.96;

        // Maintain a subtle baseline rotation
        if (Math.abs(speedX.current) < 0.0008) speedX.current = (Math.random() > 0.5 ? 1 : -1) * 0.0008;
        if (Math.abs(speedY.current) < 0.0008) speedY.current = (Math.random() > 0.5 ? 1 : -1) * 0.0008;
      }

      const cosX = Math.cos(speedX.current);
      const sinX = Math.sin(speedX.current);
      const cosY = Math.cos(speedY.current);
      const sinY = Math.sin(speedY.current);

      setItems((prevItems) =>
        prevItems.map((item) => {
          // Rotate coordinates around Y axis
          let x1 = item.x * cosY - item.z * sinY;
          let z1 = item.z * cosY + item.x * sinY;

          // Rotate coordinates around X axis
          let y2 = item.y * cosX - z1 * sinX;
          let z2 = z1 * cosX + item.y * sinX;

          // Project the 3D space coordinates onto a 2D perspective screen
          const focalLength = radius * 1.5;
          const scale = focalLength / (focalLength + z2);
          // Fade bubbles placed in the background
          const alpha = Math.max(0.18, (radius - z2) / (radius * 1.4));

          return {
            ...item,
            x: x1,
            y: y2,
            z: z2,
            scale,
            alpha,
            projX: x1 * scale,
            projY: y2 * scale,
          };
        })
      );

      animationId = requestAnimationFrame(rotateSphere);
    };

    animationId = requestAnimationFrame(rotateSphere);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Virtual trackball physics on mouse movement
  const handleMouseMove = (e) => {
    if (isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    speedX.current = -(e.clientY - centerY) * 0.00003;
    speedY.current = (e.clientX - centerX) * 0.00003;
  };

  // Swiping controls
  const handleTouchStart = (e) => {
    isDragging.current = true;
    if (e.touches.length > 0) {
      previousTouch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const dx = touch.clientX - previousTouch.current.x;
    const dy = touch.clientY - previousTouch.current.y;

    // Direct influence on rotation based on swipe speed
    speedY.current = dx * 0.003;
    speedX.current = -dy * 0.003;

    previousTouch.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[480px] md:h-[480px] mx-auto cursor-grab active:cursor-grabbing select-none"
    >
      {/* Core glowing orb inside the tag cloud */}
      <div className="absolute w-[180px] h-[180px] rounded-full bg-cyan/5 blur-[80px] pointer-events-none" />

      {items.map((item, idx) => {
        const style = {
          position: "absolute",
          transform: `translate3d(${item.projX}px, ${item.projY}px, 0px) scale(${item.scale})`,
          opacity: item.alpha,
          zIndex: Math.round(item.scale * 100),
          // Disable interaction for tags currently floating behind the sphere
          pointerEvents: item.z < 10 ? "auto" : "none",
        };

        const Icon = item.skill.Icon;

        return (
          <div
            key={idx}
            style={style}
            className="flex flex-col items-center gap-1 group transition-shadow duration-300"
          >
            <div
              className="w-12 h-12 md:w-20 md:h-20 rounded-full glass-panel border flex items-center justify-center text-2xl md:text-4xl transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
              style={{
                borderColor: `rgba(255, 255, 255, 0.05)`,
                color: item.skill.color,
                boxShadow: `0 0 15px rgba(0, 0, 0, 0.25)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.skill.color;
                e.currentTarget.style.boxShadow = `0 0 25px ${item.skill.color}50`;
                e.currentTarget.style.transform = `scale(1.15)`;
                // Pause rotation on hover
                speedX.current = 0;
                speedY.current = 0;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.25)";
                e.currentTarget.style.transform = `scale(1)`;
              }}
            >
              <Icon />
            </div>
            <span
              className="text-[9px] md:text-xs font-semibold px-2 py-0.5 rounded-full bg-black/80 text-white border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md"
              style={{ color: item.skill.color }}
            >
              {item.skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSphere3D;
