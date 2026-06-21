import { useState, useEffect, useRef } from "react";
import { useCountUp } from "../../hooks";
import { CERTIFICATIONS, EDUCATION } from "../../data";
import "./Certifications.scss";

export default function Certifications() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const exp   = useCountUp(1, 1500, visible);
  const tech  = useCountUp(18, 1500, visible);
  const certs = useCountUp(4, 1500, visible);
  const proj  = useCountUp(5, 1500, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { n: exp + "+",   label: "Years Experience", icon: "📅", color: "#6366f1" },
    { n: tech + "+",  label: "Technologies",      icon: "⚙️", color: "#8b5cf6" },
    { n: certs + "+", label: "Certifications",    icon: "🏆", color: "#a855f7" },
    { n: proj + "+",  label: "Projects Built",    icon: "🚀", color: "#c084fc" },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="certifications">
      <div className="certifications__container">
        <div className="section-header">
          <div className="section-eyebrow">Achievements</div>
          <h2>
            Certifications &amp; <span className="gradient-text">Stats</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="certifications__stats">
          {stats.map((s) => (
            <div key={s.label} className="certifications__stat-card">
              <div className="certifications__stat-icon">{s.icon}</div>
              <div className="certifications__stat-num" style={{ color: s.color }}>{s.n}</div>
              <div className="certifications__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cert list */}
        <div className="certifications__list">
          {CERTIFICATIONS.map((c) => (
            <div key={c.title} className="certifications__item">
              <div
                className="certifications__item-icon"
                style={{ background: c.color + "18", border: `1px solid ${c.color}30` }}
              >
                {c.icon}
              </div>
              <div className="certifications__item-meta">
                <div className="certifications__item-title">{c.title}</div>
                <div className="certifications__item-org">{c.org}</div>
              </div>
              <div className="certifications__item-year">{c.year}</div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="certifications__education">
          <h3 className="certifications__edu-heading">
            Education <span>Path</span>
          </h3>
          <div className="certifications__edu-timeline">
            <div className="certifications__edu-line" />
            {EDUCATION.map((e, i) => (
              <div
                key={i}
                className={`certifications__edu-row certifications__edu-row--${e.side}`}
              >
                <div className="certifications__edu-dot" />
                <div className="certifications__edu-card">
                  <div className="certifications__edu-degree">{e.deg}</div>
                  <div className="certifications__edu-school">{e.school}</div>
                  <div className="certifications__edu-year">{e.yr}</div>
                  <div className="certifications__edu-grade">{e.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
