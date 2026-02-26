import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import './AboutSection.css';

const features = [
  { icon: '🎮', title: 'Custom Maps', desc: 'Kami develop map Roblox sendiri dengan gameplay unik dan design berkualitas tinggi yang bikin ketagihan!' },
  { icon: '👕', title: 'Custom Items', desc: 'Item eksklusif RTA — clothing, accessories, dan gear khusus yang bikin avatar kamu makin keren.' },
  { icon: '💬', title: 'Discord Hub', desc: 'Komunitas Discord aktif untuk diskusi, kolaborasi, sharing knowledge, dan nongkrong bareng!' },
  { icon: '🏆', title: 'Event Seru', desc: 'Workshop, kompetisi, game night — event-event menarik rutin diadakan setiap minggu.' },
];

const stats = [
  { label: 'Maps Dibuat', value: 47, suffix: '+', color: 'blue' },
  { label: 'Total Members', value: 28500, suffix: '+', separator: ',', color: 'yellow' },
  { label: 'Events Diadakan', value: 156, suffix: '+', color: 'pink' },
];

const AboutSection = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section className="about-section">
      {/* Wave divider top */}
      <div className="about-wave-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,0 L0,0 Z" fill="var(--bg-deep)" />
        </svg>
      </div>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">✦ Tentang Kami</span>
          <h2 className="section-title">
            Apa itu <span className="text-gradient-blue">RTA?</span>
          </h2>
          <p className="section-description-large">
            <strong style={{ color: 'var(--color-blue-lighter)' }}>ROBLOX TALLENT ALLIANCE (RTA)</strong> adalah komunitas kreatif Roblox Indonesia yang berfokus pada pengembangan map, pembuatan item custom, dan membangun ekosistem creator yang solid. Kami tempat berkumpulnya talent-talent terbaik!
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="about-cards-grid">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="about-feat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="about-feat-icon">{feat.icon}</div>
              <h3 className="about-feat-title">{feat.title}</h3>
              <p className="about-feat-desc">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="about-stats-row" ref={statsRef}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`about-stat-item about-stat-${stat.color}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, type: 'spring', stiffness: 200 }}
            >
              <div className="about-stat-number">
                {statsInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    separator={stat.separator || ''}
                    suffix={stat.suffix || ''}
                  />
                ) : (
                  `0${stat.suffix || ''}`
                )}
              </div>
              <div className="about-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave divider bottom */}
      <div className="about-wave-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,40 C200,0 400,80 600,40 C800,0 1000,80 1200,40 L1200,80 L0,80 Z" fill="var(--bg-deep)" />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
