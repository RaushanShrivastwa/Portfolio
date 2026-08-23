import { Link } from "react-scroll";
import { FaPaperPlane } from "react-icons/fa";

const NavbarBtn = () => {
  return (
    <Link
      spy={true}
      smooth={true}
      duration={500}
      offset={-100}
      to="contact"
      className="px-4 py-2 rounded-full text-xs font-bold text-black bg-gradient-to-r from-cyan to-lightCyan hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
    >
      <span>Contact</span>
      <FaPaperPlane className="text-[10px]" />
    </Link>
  );
};

export default NavbarBtn;
