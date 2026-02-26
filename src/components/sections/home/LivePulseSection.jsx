import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './LivePulseSection.css';

const activityPool = [
  { icon: '🎮', text: 'DarkKnight99 baru saja menyelesaikan Epic Adventure Quest!', time: 'baru saja' },
  { icon: '⭐', text: 'BlockMaster99 mendapat achievement "Master Builder"!', time: '1 menit lalu' },
  { icon: '🔥', text: 'Andhika_RBX bergabung dengan server RTA!', time: '2 menit lalu' },
  { icon: '🏆', text: 'Spring Competition — pendaftaran resmi dibuka!', time: '5 menit lalu' },
  { icon: '💬', text: 'ShadowStrike sedang livestream di #map-showcase', time: '8 menit lalu' },
  { icon: '🎉', text: 'Game Night dimulai! 47 member sedang online di voice chat', time: '10 menit lalu' },
  { icon: '🚀', text: 'Update baru: Zombie Apocalypse v2.1 dirilis!', time: '12 menit lalu' },
  { icon: '🎨', text: 'MegaFan123 mengunggah fan art baru di gallery!', time: '15 menit lalu' },
  { icon: '🔧', text: 'Marcus sedang live coding di Lua Scripting channel', time: '18 menit lalu' },
  { icon: '💡', text: 'Emily Wong membagikan tutorial: "UI Animasi Keren di Roblox"', time: '20 menit lalu' },
  { icon: '🎯', text: 'Speedrun challenge: RekorBaru diraih oleh NinjaRunner!', time: '22 menit lalu' },
  { icon: '🛡️', text: 'Rachel Green sedang aktif memoderasi server RTA', time: '25 menit lalu' },
];

const miniStats = [
  { label: 'Bergabung Hari Ini', value: 47, color: '#60A5FA' },
  { label: 'Events Minggu Ini', value: 3, color: '#F472B6' },
  { label: 'Map Baru Bulan Ini', value: 1, color: '#34D399' },
];

const LivePulseSection = () => {
  const [feedItems, setFeedItems] = useState(() => activityPool.slice(0, 5));
  const [poolIndex, setPoolIndex] = useState(5);
  const [onlineCount, setOnlineCount] = useState(1247);
  const feedRef = useRef(null);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedItems(prev => {
        const nextItem = activityPool[poolIndex % activityPool.length];
        const updated = [{ ...nextItem, _key: Date.now() }, ...prev].slice(0, 5);
        return updated;
      });
      setPoolIndex(i => (i + 1) % activityPool.length);
      // Simulate fluctuating online count
      setOnlineCount(c => c + Math.floor(Math.random() * 5) - 2);
    }, 3000);

    return () => clearInterval(interval);
  }, [poolIndex]);

  return (
    <section className="live-pulse-section" ref={sectionRef}>
      {/* Background blobs */}
      <div className="pulse-blob-1" />
      <div className="pulse-blob-2" />

      <div className="container-custom pulse-inner">
        {/* Header */}
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">
            <span className="pulse-dot-badge" /> LIVE
          </span>
          <h2 className="section-title">
            Community <span className="text-gradient-blue">Live Pulse</span>
          </h2>
          <p className="section-description-large">
            Lihat aktivitas real-time komunitas RTA — member kita nggak pernah tidur! 🔥
          </p>
        </motion.div>

        <div className="pulse-layout">
          {/* Left: Stats */}
          <motion.div
            className="pulse-stats-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Online Counter */}
            <div className="pulse-online-card">
              <div className="pulse-online-header">
                <div className="pulse-green-dot" />
                <span className="pulse-online-label">ONLINE SEKARANG</span>
              </div>
              <div className="pulse-online-number">
                {inView ? (
                  <CountUp start={0} end={onlineCount} duration={1.5} separator="," />
                ) : '0'}
              </div>
              <div className="pulse-online-sub">Member aktif di Discord & In-Game</div>
            </div>

            {/* Mini Stats */}
            <div className="pulse-mini-stats">
              {miniStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="pulse-mini-stat"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 200 }}
                  style={{ '--stat-color': stat.color }}
                >
                  <div className="pulse-mini-value" style={{ color: stat.color }}>
                    {inView ? (
                      <CountUp start={0} end={stat.value} duration={1.5} />
                    ) : '0'}
                  </div>
                  <div className="pulse-mini-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Activity Feed */}
          <motion.div
            className="pulse-feed-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="pulse-feed-header">
              <h3 className="pulse-feed-title">
                <span className="pulse-dot-sm" /> Activity Feed
              </h3>
              <span className="pulse-live-tag">LIVE</span>
            </div>
            <div className="pulse-feed-list" ref={feedRef}>
              <AnimatePresence initial={false}>
                {feedItems.map((item, i) => (
                  <motion.div
                    key={item._key || item.text}
                    className="pulse-feed-item"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    layout
                  >
                    <span className="pulse-feed-icon">{item.icon}</span>
                    <div className="pulse-feed-content">
                      <span className="pulse-feed-text">{item.text}</span>
                      <span className="pulse-feed-time">{item.time}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="pulse-feed-footer">
              🤖 Feed diperbarui setiap 3 detik secara otomatis
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LivePulseSection;
