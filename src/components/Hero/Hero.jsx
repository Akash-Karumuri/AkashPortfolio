import { useEffect, useRef } from "react";
import { useTyping } from "../../hooks";
import { TYPING_WORDS } from "../../data";
import "./Hero.scss";

export default function Hero() {
  const typed   = useTyping(TYPING_WORDS);
  const glowRef = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      {/* Mouse glow */}
      <div ref={glowRef} className="hero__glow" />

      {/* BG radial */}
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-line" />
      </div>

      <div className="hero__inner">
        {/* ── Left col ── */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Opportunities
          </div>

          <h1 className="hero__title">
            Hello, I'm
            <br />
            <span className="hero__title-name">Akash</span>
          </h1>

          <div className="hero__typing">
            <span className="hero__typed-text">{typed}</span>
            <span className="hero__cursor" />
          </div>

          <p className="hero__desc">
            Crafting high-performance web experiences with React.js, Redux &amp;
            modern frontend stack. Turning complex ideas into elegant,
            pixel-perfect interfaces.
          </p>

          <div className="hero__actions">
            <button className="hero__btn-primary" onClick={() => scrollTo("projects")}>
              View Projects <span className="hero__btn-arrow">→</span>
            </button>
            <button className="hero__btn-ghost" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </div>

          <div className="hero__stats">
            {[
              ["1+", "Years Exp"],
              ["15+", "Technologies"],
              ["5+", "Projects"],
              ["3+", "Certifications"],
            ].map(([n, l]) => (
              <div key={l} className="hero__stat">
                <span className="hero__stat-num">{n}</span>
                <span className="hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right col — avatar ── */}
        <div className="hero__right">
          <div className="hero__avatar-wrap">
            <div className="hero__orbit hero__orbit--outer" />
            <div className="hero__orbit hero__orbit--inner" />

            <div className="hero__avatar-card">
              <div className="hero__avatar-grid" />
              <div className="hero__avatar-body">
                <div className="hero__avatar-letter">A</div>
                <div className="hero__avatar-name">K.N.P.R. Akash</div>
                <div className="hero__avatar-role">Frontend Developer</div>
                <span className="hero__float-tag hero__float-tag--react">⚛️ React</span>
                <span className="hero__float-tag hero__float-tag--redux">🔮 Redux</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
