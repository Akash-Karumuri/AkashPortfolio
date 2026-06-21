import { EXPERIENCE_ITEMS } from "../../data";
import "./Experience.scss";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="section-header">
          <div className="section-eyebrow">Career</div>
          <h2>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="experience__timeline">
          <div className="experience__timeline-line" />

          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="experience__item">
              <div className="experience__dot" />
              <div className="experience__card">
                <div className="experience__card-header">
                  <div className="experience__card-title">
                    <div className="experience__role-row">
                      <h3 className="experience__role">{item.role}</h3>
                      <span className="experience__badge">{item.type}</span>
                    </div>
                    <div className="experience__company-row">
                      <span className="experience__company">{item.company}</span>
                      <span className="experience__location">· {item.location}</span>
                    </div>
                  </div>
                  <div className="experience__dates">
                    <div className="experience__period">{item.period}</div>
                    <div className="experience__duration">{item.duration}</div>
                  </div>
                </div>

                <ul className="experience__bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="experience__bullet">
                      <span className="experience__bullet-dot" />
                      <p>{b}</p>
                    </li>
                  ))}
                </ul>

                <div className="experience__tech-tags">
                  {item.tech.map((t) => (
                    <span key={t} className="experience__tech-tag">{t}</span>
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
