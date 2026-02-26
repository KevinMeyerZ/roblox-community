import {
  FiGithub,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiArrowUp
} from 'react-icons/fi';
import {
  SiDiscord,
  SiRoblox
} from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    community: [
      { label: 'Home', path: '#home' },
      { label: 'Tentang Kami', path: '#about' },
      { label: 'Struktur Tim', path: '#tim' },
    ],
    content: [
      { label: 'Games & Maps', path: '#games' },
      { label: 'Events', path: '#events' },
      { label: 'Gallery', path: '#gallery' },
    ],
  };

  const socialLinks = [
    { icon: <SiDiscord />, label: 'Discord', url: '#', color: '#5865F2' },
    { icon: <FiYoutube />, label: 'YouTube', url: '#', color: '#FF0000' },
    { icon: <FiTwitter />, label: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: <SiRoblox />, label: 'Roblox', url: '#', color: '#FF0000' },
    { icon: <FiGithub />, label: 'GitHub', url: '#', color: '#ffffff' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Wave Divider */}
      <div className="footer-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="wave-path"
          ></path>
        </svg>
      </div>

      <div className="footer-content container-custom">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logo-rta.png" alt="RTA" className="footer-logo-img" />
                <div className="footer-logo-text">
                  <span className="text-gradient-blue">ROBLOX TALLENT</span>
                  <span className="text-gradient-pink">ALLIANCE</span>
                </div>
              </div>
              <p className="footer-description">
                Aliansi talent kreatif Roblox Indonesia! Kami develop map sendiri, buat item custom,
                dan punya komunitas Discord yang solid. Join dan tunjukkan bakatmu!
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="social-link hover-bounce"
                    style={{ '--social-color': social.color }}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Community Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Community</h3>
            <ul className="footer-links">
              {footerLinks.community.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Content</h3>
            <ul className="footer-links">
              {footerLinks.content.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="footer-newsletter-text">
              Subscribe untuk update terbaru tentang event dan map baru!
            </p>
            <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter-input-group">
                <FiMail className="newsletter-icon" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="newsletter-input"
                  required
                />
              </div>
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} ROBLOX TALLENT ALLIANCE. All rights reserved.
            <br />
            <span className="footer-credit">
              Made with 💙 by the community
            </span>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="scroll-top-button hover-float"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
