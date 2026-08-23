import TiltCard from "../TiltCard";

const AboutMeImage = () => {
  return (
    <div className="relative group">
      {/* Decorative Glow Backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan to-purple rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 -z-10 animate-float-slow"></div>
      
      <TiltCard className="p-3 border border-white/10 bg-brown/30 backdrop-blur-md rounded-[2rem] overflow-hidden w-[300px] h-[440px]">
        <div className="h-full w-full rounded-[1.5rem] overflow-hidden relative">
          <img
            src="https://i.ibb.co/QF3d5tS1/Gemini-Generated-Image-9iqxsy9iqxsy9iqx.png"
            alt="About Me"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </TiltCard>
    </div>
  );
};

export default AboutMeImage;
