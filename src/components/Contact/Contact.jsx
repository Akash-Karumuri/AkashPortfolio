import { useState } from "react";
import { CONTACT_LINKS } from "../../data";
import "./Contact.scss";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [emailDraftOpened, setEmailDraftOpened] = useState(false);

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:karumuriakash888@gmail.com?subject=${subject}&body=${body}`;
    setEmailDraftOpened(true);
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
            {emailDraftOpened ? (
              <div className="contact__success">
                <div className="contact__success-title">Email draft opened</div>
                <p className="contact__success-sub">
                  Review and send the message from your email app.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={submit}>
                <div className="contact__field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={handle("name")}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={handle("email")}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={handle("message")}
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                <button className="contact__submit" type="submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
