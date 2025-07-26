const NavbarLogo = () => {
  return (
    <div>
      <a href="#" className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white   flex items-center gap-1 bg-gradient-to-r   transition-all duration-500 hover:scale-100 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <h1 className="text-white  text-2xl sm:hidden md:block">
        Raushan
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
        RS
      </h1>
      </a>
    </div>
  );
};

export default NavbarLogo;
