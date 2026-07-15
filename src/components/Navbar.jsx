import { useState } from "react";
import { useEffect } from "react";
import "./styles/Navbar.css";

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
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img className="img" src="\prodesk_it_logo2.png" alt="Prodesk IT" />
        </a>
      </div>

      <div
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#services">Services</a>
        <a href="#">Contact</a>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {
            darkMode ? (
              <div>
              Switch to{" "}
              <img
                height="40"
                width="40"
                src="/lightmode.png"
                alt="Light Mode"
              />
              </div>
            ) : (
              <div>
                Switch to{" "}
                <img
                  height="40"
                  width="40"
                  src="https://static.thenounproject.com/png/1664849-200.png"
                  alt="Dark Mode"
                />
              </div>
            )
          }
          </button>
      </div>



      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;