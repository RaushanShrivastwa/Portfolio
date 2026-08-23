import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Certifications", section: "certifications" },
  { link: "Education", section: "education" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex items-center gap-1 md:gap-6 text-sm font-medium text-lightGrey">
      {links.map((item, index) => {
        return (
          <li key={index} className="relative group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              to={item.section}
              activeClass="!text-cyan font-bold"
              className="cursor-pointer px-3 py-1.5 rounded-full hover:text-white transition-colors duration-200 block text-xs md:text-sm font-medium"
            >
              {item.link}
            </Link>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan rounded-full group-hover:w-1/2 transition-all duration-300 pointer-events-none" />
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
