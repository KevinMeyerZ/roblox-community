import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers } from 'react-icons/fi';
import { SiDiscord, SiRoblox } from 'react-icons/si';
import { Button } from '../../common';
import { FadeIn } from '../../animations';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-gradient"></div>
        <div className="cta-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
          <div className="cta-shape cta-shape-3"></div>
        </div>
      </div>

      <div className="container-custom">
        <FadeIn>
          <div className="cta-content">
            <motion.div
              className="cta-emoji"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              🚀
            </motion.div>

            <h2 className="cta-title">
              Siap Gabung ke
              <br />
              <span className="text-gradient-fire">TALENT ALLIANCE?</span>
            </h2>

            <p className="cta-description">
              Join RTA Discord sekarang! Temukan sesama creator, akses map & item eksklusif,
              ikuti workshop gratis, dan tunjukkan bakatmu di event-event seru. Let's create together!
            </p>

            <div className="cta-buttons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="xl" leftIcon={<SiDiscord />}>
                  Join Discord RTA
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="xl" leftIcon={<SiRoblox />}>
                  Lihat Roblox Group
                </Button>
              </a>
            </div>

            <div className="cta-features">
              <div className="cta-feature">
                <SiDiscord className="cta-feature-icon" />
                <span>Discord Community Hub</span>
              </div>
              <div className="cta-divider"></div>
              <div className="cta-feature">
                <span className="cta-feature-icon">🎮</span>
                <span>Custom Maps & Items</span>
              </div>
              <div className="cta-divider"></div>
              <div className="cta-feature">
                <span className="cta-feature-icon">🏆</span>
                <span>Event & Kompetisi</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
