import { useState, useEffect } from "react";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Particles      from "./components/Particles/Particles";
import NavBar          from "./components/NavBar/NavBar";
import Hero            from "./components/Hero/Hero";
import Skills          from "./components/Skills/Skills";
import Experience      from "./components/Experience/Experience";
import Projects        from "./components/Projects/Projects";
import Certifications  from "./components/Certifications/Certifications";
import Contact         from "./components/Contact/Contact";
import Footer          from "./components/Footer/Footer";

import { NAV_ITEMS } from "./data";
import "./styles/global.scss";

export default function Portfolio() {
  const [loading, setLoading]   = useState(true);
  const [progress, setProgress] = useState(0);
  const [active, setActive]     = useState("home");

  // ── Fake loading progress ──────────────────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return p + 4;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  // ── Scroll-spy for active nav section ──────────────────────────────────
  useEffect(() => {
    const fn = () => {
      const sections = NAV_ITEMS.map((n) =>
        document.getElementById(n.toLowerCase()),
      ).filter(Boolean);
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].offsetTop) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="portfolio">
      <Particles />
      <NavBar active={active} />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      {/* <Certifications /> */}
      <Contact />
      <Footer />
    </div>
  );
}
