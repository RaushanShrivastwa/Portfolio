

const NavbarLogo = () => {
  return (
    <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan via-lightCyan to-purple p-[1px] transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full bg-darkBrown rounded-[11px] flex items-center justify-center font-mono font-black text-cyan text-sm">
          RS
        </div>
      </div>
      <span className="text-white font-extrabold text-lg tracking-tight group-hover:text-cyan transition-colors hidden sm:inline-block">
        Raushan<span className="text-cyan">.</span>
      </span>
    </a>
  );
};

export default NavbarLogo;
