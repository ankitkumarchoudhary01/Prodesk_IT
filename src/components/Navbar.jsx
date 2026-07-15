import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <nav className="
      sticky top-0 z-50
      flex items-center justify-between
      px-6 md:px-16 py-3
      bg-slate-900/40
      backdrop-blur-xl
      border-b border-white/10
      shadow-xl
      text-white">
      <div className="flex items-center">
        <a href="#">
          <img
            className="h-[50px] w-auto"
            src="/prodesk_it_logo2.webp"
            alt="Prodesk IT"
          />
        </a>
      </div>

      <div
        className={`
          absolute left-0 top-[70px] w-full bg-[var(--primary)]
          flex flex-col items-center gap-5
          overflow-hidden transition-all duration-300 ease-in-out
          md:static md:w-auto md:flex md:flex-row md:items-center
          md:gap-8 md:bg-transparent md:overflow-visible

          ${menuOpen
            ? "max-h-[400px] opacity-100 py-5"
            : "max-h-0 opacity-0 py-0 md:max-h-fit md:opacity-100"
          }
        `}
      >
        <a
          href="#"
          className="transition-all duration-300 hover:text-yellow-400 hover:scale-110"
        >
          Home
        </a>

        <a
          href="#about"
          className="transition-all duration-300 hover:text-yellow-400 hover:scale-110"
        >
          About
        </a>

        <a
          href="#services"
          className="transition-all duration-300 hover:text-yellow-400 hover:scale-110"
        >
          Services
        </a>

        <a
          href="#contact"
          className="transition-all duration-300 hover:text-yellow-400 hover:scale-110"
        >
          Contact
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 rounded-full  px-1 py-1 transition-all duration-300 hover:bg-white hover:text-[var(--primary)]"
        >
          {darkMode ? (
            <>
              <img
                className="h-8 w-8"
                src="/lightmode.png"
                alt="Light Mode"
              />
            </>
          ) : (
            <>
              <img
                className="h-8 w-8"
                src="https://static.thenounproject.com/png/1664849-200.png"
                alt="Dark Mode"
              />
            </>
          )}
        </button>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl md:hidden"
      >
        {menuOpen ? "X" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;