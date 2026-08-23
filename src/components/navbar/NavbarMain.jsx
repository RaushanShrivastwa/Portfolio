import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { FaBars, FaTimes, FaMoon, FaSun, FaMagic } from "react-icons/fa";

const NavbarMain = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark"); // 'dark' | 'night' | 'light'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.className = `theme-${savedTheme}`;
  }, []);

  const toggleTheme = () => {
    let nextTheme = "dark";
    if (theme === "dark") nextTheme = "night";
    else if (theme === "night") nextTheme = "light";
    else nextTheme = "dark";

    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.className = `theme-${nextTheme}`;
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`w-full max-w-[1050px] transition-all duration-500 rounded-full border border-white/10 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-2xl py-3 px-6 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(0,242,254,0.1)] border-cyan/20" 
          : "bg-brown/40 backdrop-blur-xl py-3.5 px-6 shadow-xl"
      } flex items-center justify-between`}>
        
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center">
          <NavbarLinks />
        </div>

        {/* CTA Button, Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={`Current Theme: ${theme.toUpperCase()} (Click to switch)`}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-cyan hover:text-white hover:border-cyan/40 hover:bg-cyan/10 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
          >
            {theme === "dark" && <FaMoon className="text-cyan text-sm" />}
            {theme === "night" && <FaMagic className="text-purple text-sm animate-pulse" />}
            {theme === "light" && <FaSun className="text-yellow-400 text-sm" />}
          </button>

          <NavbarBtn />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-cyan transition-colors"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-cyan/30 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4 z-50">
          <div onClick={() => setMobileOpen(false)}>
            <NavbarLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarMain;

