import { useState } from "react";
import { CONTACT_LINKS } from "../../data";
import "./Contact.scss";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__bg" />
      <div className="contact__container">
        <div className="section-header">
          <div className="section-eyebrow">Contact</div>
          <h2>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p>Open to new opportunities, collaborations, and exciting frontend projects</p>
        </div>

        <div className="contact__layout">
          {/* ── Left info ── */}
          <div className="contact__info">
            {CONTACT_LINKS.map((c) => (
              <a
                key={c.label}
                href={c.link || undefined}
                target={c.link ? "_blank" : undefined}
                rel={c.link ? "noopener noreferrer" : undefined}
                className="contact__link"
              >
                <div className="contact__link-icon">{c.icon}</div>
                <div className="contact__link-meta">
                  <div className="contact__link-label">{c.label}</div>
                  <div className="contact__link-val">{c.val}</div>
                </div>
              </a>
            ))}

            <div className="contact__availability">
              <div className="contact__availability-row">
                <span className="contact__availability-dot" />
                <span className="contact__availability-text">Available for Work</span>
              </div>
              <p className="contact__availability-sub">
                Open to frontend roles &amp; freelance opportunities
              </p>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-emoji">✅</div>
                <div className="contact__success-title">Message Sent!</div>
                <p className="contact__success-sub">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="contact__form">
                <div className="contact__field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handle("name")}
                    placeholder="John Doe"
                  />
                </div>
                <div className="contact__field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handle("email")}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="contact__field">
                  <label>Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={handle("message")}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button className="contact__submit" onClick={submit}>
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
