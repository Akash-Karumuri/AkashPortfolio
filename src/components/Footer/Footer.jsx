import "./Footer.scss";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Akash-Karumuri",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/n-p-r-akash-karumuri/",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__mark">AK</div>
          <span className="footer__name">Akash Karumuri</span>
        </div>

        <p className="footer__copy">
          © 2026 · Built with React.js &amp; passion for great UI
        </p>

        <div className="footer__socials">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}