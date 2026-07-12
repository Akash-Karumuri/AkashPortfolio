import { useState, useEffect, useRef } from "react";
import { SKILLS, SKILL_CATEGORIES } from "../../data";
import "./Skills.scss";
import { FaReact } from "react-icons/fa";

const OUTER_R = 386;
const INNER_R = 235;
const CENTER = 538;

export default function Skills() {
  const [hovered, setHovered] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const [rotation, setRotation] = useState(0);

  const filtered =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current) {
        angleRef.current += 0.003;
        setRotation(angleRef.current);
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const count = filtered.length;

  return (
    <section id="skills" className="skills">
      <div className="skills__bg" />
      <div className="skills__container">
        <div className="section-header">
          <div className="section-eyebrow">Skills Universe</div>
          <h2>
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p>
            Technologies I work with daily to craft modern, performant web
            experiences
          </p>
        </div>

        {/* Category filter */}
        <div className="skills__filters">
          {SKILL_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`skills__filter-btn${activeCategory === c ? " skills__filter-btn--active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="skills__layout skills__layout--centered">
          {/* ── Wheel ── */}
          <div className="skills__wheel-wrap">
            <svg
              width={CENTER * 2}
              height={CENTER * 2}
              viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
              className="skills__wheel"
              onMouseEnter={() => {
                pausedRef.current = true;
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
                setHovered(null);
              }}
            >
              {/* Guide circles */}
              <circle
                cx={CENTER}
                cy={CENTER}
                r={OUTER_R + 59}
                fill="none"
                stroke="rgba(99,102,241,0.06)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <circle
                cx={CENTER}
                cy={CENTER}
                r={OUTER_R}
                fill="none"
                stroke="rgba(99,102,241,0.12)"
                strokeWidth="1"
              />
              <circle
                cx={CENTER}
                cy={CENTER}
                r={INNER_R + 101}
                fill="none"
                stroke="rgba(99,102,241,0.08)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
              <circle
                cx={CENTER}
                cy={CENTER}
                r={INNER_R}
                fill="none"
                stroke="rgba(99,102,241,0.15)"
                strokeWidth="1"
              />
              {/* Skill nodes */}
              {filtered.map((skill, i) => {
                const base = (i / count) * Math.PI * 2 - Math.PI / 2;
                const angle = base + rotation;
                const r = i % 2 === 0 ? OUTER_R : INNER_R + 101;
                const x = CENTER + r * Math.cos(angle);
                const y = CENTER + r * Math.sin(angle);
                const isHov = hovered?.name === skill.name;
                return (
                  <g
                    key={skill.name}
                    onMouseEnter={() => setHovered(skill)}
                    onMouseLeave={() => setHovered(null)}
                    transform={`translate(${x},${y})`}
                    style={{ cursor: "pointer" }}
                  >
                    {isHov && (
                      <circle cx={0} cy={0} r={64} fill={skill.color + "22"} />
                    )}
                    <circle
                      cx={0}
                      cy={0}
                      r={50}
                      fill="rgba(10,10,20,0.95)"
                      stroke={isHov ? skill.color : "rgba(99,102,241,0.3)"}
                      strokeWidth={isHov ? 1.5 : 1}
                    />
                    {(() => {
                      const Icon = skill.icon;

                      return (
                        <foreignObject x={-27} y={-27} width={53} height={53}>
                          <div
                            style={{
                              width: "53px",
                              height: "53px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon
                              size={41}
                              color={isHov ? skill.color : "#9ca3af"}
                            />
                          </div>
                        </foreignObject>
                      );
                    })()}
                    {isHov && (
                      <text
                        x={0}
                        y={74}
                        textAnchor="middle"
                        fontSize="18"
                        fill={skill.color}
                        fontWeight="600"
                      >
                        {skill.name}
                      </text>
                    )}
                  </g>
                );
              })}
              {/* Core */}
              <circle
                cx={CENTER}
                cy={CENTER}
                r={109}
                fill="rgba(10,10,20,0.98)"
                stroke="rgba(99,102,241,0.4)"
                strokeWidth="1.5"
              />
              <circle
                cx={CENTER}
                cy={CENTER}
                r={90}
                fill="rgba(97,218,251,0.05)"
                stroke="rgba(97,218,251,0.2)"
                strokeWidth="1"
              />
              <foreignObject
                x={CENTER - 37}
                y={CENTER - 60}
                width={74}
                height={74}
              >
                <FaReact size={74} color="#61DAFB" />
              </foreignObject>{" "}
              <text
                x={CENTER}
                y={CENTER + 31}
                textAnchor="middle"
                fontSize="20"
                fill="#61DAFB"
                fontWeight="700"
                letterSpacing="1"
              >
                REACT
              </text>
              {/* Connector line */}
              {hovered &&
                (() => {
                  const i = filtered.findIndex((s) => s.name === hovered.name);
                  const base = (i / count) * Math.PI * 2 - Math.PI / 2;
                  const angle = base + rotation;
                  const r = i % 2 === 0 ? OUTER_R : INNER_R + 101;
                  return (
                    <line
                      x1={CENTER}
                      y1={CENTER}
                      x2={CENTER + r * Math.cos(angle)}
                      y2={CENTER + r * Math.sin(angle)}
                      stroke={hovered.color}
                      strokeWidth="0.5"
                      strokeOpacity="0.4"
                      strokeDasharray="4 4"
                    />
                  );
                })()}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
