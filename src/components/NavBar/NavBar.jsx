import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../../data";
import "./NavBar.scss";

export default function NavBar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
          <div className="navbar__logo-mark">AK</div>
          <span className="navbar__logo-text">
          <span className="navbar__logo-accent"> Akash</span> Karumuri
          </span>
        </div>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              className={`navbar__link${active === n.toLowerCase() ? " navbar__link--active" : ""}`}
            >
              {n}
            </button>
          ))}
        </div>

        <a href="mailto:akash@email.com" className="navbar__hire">
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${open ? " navbar__hamburger--open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile">
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              className="navbar__mobile-link"
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
