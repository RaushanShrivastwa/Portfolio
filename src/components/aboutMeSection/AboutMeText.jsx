import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am <b>Raushan Shrivastwa</b>, a passionate and detail-oriented Computer Science undergraduate at Vellore Institute of Technology, 
        with a strong foundation in full-stack web development, data structures, and emerging technologies like AI and IoT. 
        I have successfully completed multiple internships and hackathons, gaining real-world experience in building 
        scalable and user-centric solutions. 
        Proficient in technologies such as HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and Python, 
        I constantly seek opportunities to solve real-world problems through innovative tech. 
        My goal is to contribute to impactful projects while continuously upskilling in areas like 
        cloud computing, data analysis, and system design.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <a
          href="/RAUSHAN SHRIVASTWA_newww.pdf"  // Make sure this file is in the public folder
          download
        >
          Download CV
        </a>

      </button>
    </div>
  );
};

export default AboutMeText;
