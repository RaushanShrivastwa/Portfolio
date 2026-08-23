import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroCPStats from "./HeroCPStats";

const HeroMain = () => {
  return (
    <div id="hero" className="pt-36 pb-12">
      <div className="flex md:flex-row flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-8">
        <HeroText />
        <HeroPic />
      </div>
      <HeroCPStats />
    </div>
  );
};

export default HeroMain;

