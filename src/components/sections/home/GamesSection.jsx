import { motion } from 'framer-motion';
import { FiPlay, FiHeart, FiExternalLink } from 'react-icons/fi';
import { maps } from '../../../data/maps';
import './GamesSection.css';

const categoryColors = {
  Adventure: { bg: 'rgba(37, 99, 235, 0.15)', border: 'rgba(59, 130, 246, 0.5)', text: '#60A5FA' },
  Racing: { bg: 'rgba(6, 182, 212, 0.15)', border: 'rgba(6, 182, 212, 0.5)', text: '#22D3EE' },
  Horror: { bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.5)', text: '#F472B6' },
  Parkour: { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.5)', text: '#34D399' },
  Strategy: { bg: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.5)', text: '#FCD34D' },
  RPG: { bg: 'rgba(139, 92, 246, 0.15)', border: 'rgba(139, 92, 246, 0.5)', text: '#A78BFA' },
};

const formatPlays = (num) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toString();
};

const displayMaps = maps.slice(0, 3);

const GamesSection = () => {
  return (
    <section className="games-section">
      {/* Background blobs */}
      <div className="games-blob games-blob-1" />
      <div className="games-blob games-blob-2" />

      <div className="container-custom games-inner">
        {/* Header */}
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">🎮 Games Kami</span>
          <h2 className="section-title">
            Map yang <span className="text-gradient-blue">Kami Develop</span>
          </h2>
          <p className="section-description-large">
            Tiga map unggulan yang dikembangkan langsung oleh tim RTA — dari adventure seru sampai survival yang menegangkan!
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="games-grid">
          {displayMaps.map((map, i) => {
            const catStyle = categoryColors[map.category] || categoryColors.Adventure;
            return (
              <motion.div
                key={map.id}
                className="game-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
              >
                {/* Thumbnail */}
                <div className="game-card-thumb">
                  <img
                    src={map.thumbnail}
                    alt={map.title}
                    loading="lazy"
                  />
                  <div className="game-thumb-overlay" />
                  {/* Category badge over image */}
                  <span
                    className="game-cat-badge"
                    style={{
                      background: catStyle.bg,
                      border: `1px solid ${catStyle.border}`,
                      color: catStyle.text,
                    }}
                  >
                    {map.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="game-card-body">
                  <h3 className="game-card-title">{map.title}</h3>
                  <p className="game-card-desc">
                    {map.description.length > 100
                      ? map.description.slice(0, 100) + '…'
                      : map.description}
                  </p>

                  <div className="game-card-meta">
                    <span className="game-meta-item">
                      <FiPlay />
                      {formatPlays(map.stats.plays)} Plays
                    </span>
                    <span className="game-meta-item">
                      <FiHeart />
                      {formatPlays(map.stats.likes)} Likes
                    </span>
                    <span className="game-difficulty" data-difficulty={map.difficulty}>
                      {map.difficulty}
                    </span>
                  </div>

                  <a
                    href={map.robloxLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="game-play-btn"
                  >
                    <FiExternalLink />
                    Main Sekarang
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
