import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="absolute inset-0 h-14 md:h-24 px-1 md:px-10 z-50">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        <div className="flex items-center gap-1 md:gap-4">
          <img
            alt="Logo"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=600"
            className="h-8 md:h-16 w-auto"
          />
          <span className="uppercase text-xs md:text-2xl font-bold md:font-bold">
            ERP Miracle
          </span>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="#about"
              className="font-medium md:font-bold text-xs md:text-xl uppercase"
            >
              ABOUT
            </a>
            <a
              href="#pricing"
              className="font-medium md:font-bold text-xs md:text-xl uppercase"
            >
              PRICING
            </a>
            <a
              href="#contact"
              className="font-medium md:font-bold text-xs md:text-xl uppercase"
            >
              CONTACT
            </a>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="border border-cyan-500 text-cyan-500 px-4 text-xs md:text-base md:px-12 py-1 rounded-md"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
