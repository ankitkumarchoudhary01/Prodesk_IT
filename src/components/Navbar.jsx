import { useState } from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <a href="#">Services</a>
        <a href="#">Contact</a>
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