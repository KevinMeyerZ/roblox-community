import { motion } from 'framer-motion';
import { SiDiscord, SiRoblox } from 'react-icons/si';
import { FiTwitter } from 'react-icons/fi';
import { teamMembers } from '../../../data/team';
import './TeamSection.css';

const rankConfig = {
  Founders: {
    label: 'Founder',
    gradient: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
    color: '#FCD34D',
    border: 'rgba(251, 191, 36, 0.5)',
    glow: '0 0 20px rgba(251, 191, 36, 0.4)',
    ring: '#FBBF24',
  },
  Developers: {
    label: 'Developer',
    gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
    color: '#60A5FA',
    border: 'rgba(59, 130, 246, 0.5)',
    glow: '0 0 20px rgba(37, 99, 235, 0.4)',
    ring: '#3B82F6',
  },
  Builders: {
    label: 'Builder',
    gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)',
    color: '#22D3EE',
    border: 'rgba(6, 182, 212, 0.5)',
    glow: '0 0 20px rgba(6, 182, 212, 0.4)',
    ring: '#06B6D4',
  },
  Artists: {
    label: 'Artist',
    gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
    color: '#F472B6',
    border: 'rgba(236, 72, 153, 0.5)',
    glow: '0 0 20px rgba(236, 72, 153, 0.4)',
    ring: '#EC4899',
  },
  Moderators: {
    label: 'Moderator',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    color: '#34D399',
    border: 'rgba(16, 185, 129, 0.5)',
    glow: '0 0 20px rgba(16, 185, 129, 0.4)',
    ring: '#10B981',
  },
};

const founders = teamMembers.filter(m => m.category === 'Founders');
const staff = teamMembers.filter(m => ['Developers', 'Builders', 'Artists'].includes(m.category));
const mods = teamMembers.filter(m => m.category === 'Moderators');

const MemberCard = ({ member, size = 'normal', delay = 0 }) => {
  const rank = rankConfig[member.category] || rankConfig.Moderators;
  return (
    <motion.div
      className={`team-card team-card-${size}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 180 }}
      style={{ '--ring-color': rank.ring }}
    >
      <div className="team-avatar-wrapper">
        <img
          src={member.avatar}
          alt={member.name}
          className="team-avatar"
          loading="lazy"
        />
      </div>
      <div className="team-card-info">
        <h3 className="team-name">{member.name}</h3>
        <span
          className="team-role-badge"
          style={{
            background: rank.gradient,
          }}
        >
          {rank.label}
        </span>
        <p className="team-role-title">{member.role}</p>
        {size === 'large' && member.bio && (
          <p className="team-bio">{member.bio.slice(0, 100)}…</p>
        )}
        <div className="team-socials">
          {member.social?.discord && (
            <span className="team-social-icon" title={`Discord: ${member.social.discord}`}>
              <SiDiscord />
            </span>
          )}
          {member.social?.twitter && (
            <span className="team-social-icon" title={`Twitter: ${member.social.twitter}`}>
              <FiTwitter />
            </span>
          )}
          {member.social?.roblox && (
            <span className="team-social-icon" title={`Roblox: ${member.social.roblox}`}>
              <SiRoblox />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">👑 Struktur Tim</span>
          <h2 className="section-title">
            Tim <span className="text-gradient-yellow">TALLENT Alliance</span>
          </h2>
          <p className="section-description-large">
            Kenali orang-orang keren di balik semua map dan event kece yang kami buat!
          </p>
        </motion.div>

        {/* Row 1: Founders */}
        <div className="team-rank-label">
          <span className="rank-label-text rank-founder">👑 Owner / Founders</span>
        </div>
        <div className="team-row team-row-founders">
          {founders.map((m, i) => (
            <MemberCard key={m.id} member={m} size="large" delay={i * 0.15} />
          ))}
        </div>

        {/* Connector */}
        <div className="team-connector" />

        {/* Row 2: Staff */}
        <div className="team-rank-label">
          <span className="rank-label-text rank-staff">⚙️ Tim Inti (Dev, Builder, Artist)</span>
        </div>
        <div className="team-row team-row-staff">
          {staff.map((m, i) => (
            <MemberCard key={m.id} member={m} size="normal" delay={i * 0.1} />
          ))}
        </div>

        {/* Connector */}
        <div className="team-connector" />

        {/* Row 3: Mods */}
        <div className="team-rank-label">
          <span className="rank-label-text rank-mod">🛡️ Moderator</span>
        </div>
        <div className="team-row team-row-mods">
          {mods.map((m, i) => (
            <MemberCard key={m.id} member={m} size="normal" delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
