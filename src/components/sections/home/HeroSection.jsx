import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { SiDiscord } from 'react-icons/si';
import { FiArrowRight, FiUsers, FiMap, FiChevronDown } from 'react-icons/fi';
import './HeroSection.css';

const stars = [
  { top: '12%', left: '8%', size: '1.4rem', delay: '0s' },
  { top: '25%', left: '88%', size: '1rem', delay: '0.8s' },
  { top: '70%', left: '6%', size: '0.9rem', delay: '1.5s' },
  { top: '60%', left: '92%', size: '1.2rem', delay: '2s' },
  { top: '85%', left: '75%', size: '0.8rem', delay: '0.4s' },
  { top: '15%', left: '60%', size: '1.1rem', delay: '1.2s' },
  { top: '45%', left: '3%', size: '0.85rem', delay: '0.6s' },
  { top: '35%', left: '95%', size: '0.75rem', delay: '1.8s' },
];

const HeroSection = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((particle, index) => {
        gsap.set(particle, { opacity: 0, y: 0 });
        gsap.to(particle, {
          y: -140,
          opacity: 0,
          duration: 2.5 + Math.random() * 2,
          delay: index * 0.2,
          repeat: -1,
          ease: 'power1.out',
          onStart: () => gsap.set(particle, { opacity: 0.8 }),
        });
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling;
      if (nextSection) {
        const offsetPosition = nextSection.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero-section">
      {/* Animated CSS blobs background */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Grid overlay */}
      <div className="hero-grid-overlay" />

      {/* Star decorations */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="hero-star"
          style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: s.delay }}
        >
          ✦
        </span>
      ))}

      {/* Particle Stars (GSAP animated) */}
      <div className="hero-particles" ref={particlesRef}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle-star"
            style={{
              left: `${(i / 20) * 100}%`,
              bottom: `${5 + Math.random() * 15}%`,
            }}
          >
            ★
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content container-custom">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          >
            <span className="badge-icon">🎮</span>
            <span>Komunitas Roblox Indonesia</span>
            {/* <span className="hero-badge-dot" />
            <span className="hero-badge-live">LIVE</span> */}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <span className="hero-title-roblox">ROBLOX</span>
            <br />
            <span className="text-gradient-blue hero-title-tallent">TALLENT</span>
            <br />
            <span className="hero-title-alliance">ALLIANCE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            Bergabunglah dengan komunitas kreator Roblox terbaik Indonesia!
            Develop map keren, buat item eksklusif, dan raih achievement bareng talent-talent terbaik. 🚀
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-primary"
            >
              <SiDiscord />
              Join Discord RTA
            </a>
            <button
              className="hero-btn hero-btn-secondary"
              onClick={() => scrollToSection('games')}
            >
              Lihat Map Kami
              <FiArrowRight />
            </button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            className="hero-feature-pills"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="hero-pill">⚡ Map Development</span>
            <span className="hero-pill">🏆 Tournament</span>
            <span className="hero-pill">🎨 Item Creator</span>
            <span className="hero-pill">🤝 Community</span>
          </motion.div>

          {/* Stat Bubbles */}
          <motion.div
            className="hero-stat-bubbles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="hero-stat-bubble">
              <FiUsers className="stat-bubble-icon blue" />
              <div>
                <div className="stat-bubble-value">28K+</div>
                <div className="stat-bubble-label">Members</div>
              </div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-bubble">
              <span className="stat-bubble-icon yellow">⭐</span>
              <div>
                <div className="stat-bubble-value">15M+</div>
                <div className="stat-bubble-label">Total Plays</div>
              </div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-bubble">
              <FiMap className="stat-bubble-icon pink" />
              <div>
                <div className="stat-bubble-value">3</div>
                <div className="stat-bubble-label">Maps Aktif</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="scroll-indicator"
        onClick={scrollToNextSection}
        aria-label="Scroll ke section berikutnya"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="scroll-text">scroll to explore</span>
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
