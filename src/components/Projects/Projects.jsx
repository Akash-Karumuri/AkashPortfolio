import { useState } from "react";
import { PROJECTS } from "../../data";
import "./Projects.scss";

export default function Projects() {
  const [hov, setHov] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="projects__bg" />
      <div className="projects__container">
        <div className="section-header">
          <div className="section-eyebrow">Projects</div>
          <h2>
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p>Real-world applications built with modern technologies and best practices</p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="projects__card"
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                borderColor: hov === i ? p.color + "40" : undefined,
                boxShadow:   hov === i ? `0 20px 60px ${p.color}15` : "none",
              }}
            >
              <div className="projects__card-bar" style={{ background: `linear-gradient(90deg,${p.color},${p.accent})` }} />

              <div
                className="projects__media"
                style={{ background: `linear-gradient(135deg,${p.color}18 0%,rgba(0,0,0,0.6) 100%)` }}
              >
                <div className="projects__media-center">
                  <div className="projects__media-emoji">{p.emoji}</div>
                  <div className="projects__media-title">{p.title}</div>
                </div>

                <div
                  className="projects__media-grid"
                  style={{
                    backgroundImage: `linear-gradient(${p.color}40 1px,transparent 1px),linear-gradient(90deg,${p.color}40 1px,transparent 1px)`,
                  }}
                />

                <div className={`projects__overlay${hov === i ? " projects__overlay--visible" : ""}`}>
                  <a href={p.live} className="projects__overlay-btn" style={{ background: p.color }}>
                    Live Demo →
                  </a>
                  <a href={p.github} className="projects__overlay-btn projects__overlay-btn--ghost" style={{ borderColor: p.color + "60" }}>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="projects__body">
                <h3 className="projects__title">{p.title}</h3>
                <p className="projects__desc">{p.desc}</p>

                <div className="projects__features">
                  {p.feat.map((f) => (
                    <div key={f} className="projects__feature">
                      <span style={{ color: p.color }}>✓</span> {f}
                    </div>
                  ))}
                </div>

                <div className="projects__tech">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="projects__tech-tag"
                      style={{ borderColor: p.color + "30", color: p.accent, background: p.color + "10" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
