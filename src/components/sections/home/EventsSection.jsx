import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { id as localeId } from 'date-fns/locale';
import { FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi';
import { events } from '../../../data/events';
import './EventsSection.css';

const typeEmoji = {
  'Community Event': '🎮',
  'Workshop': '🔧',
  'Competition': '🏆',
  'Playtest': '🧪',
  'Talk': '🎤',
  'Meetup': '🎉',
};

const typeColors = {
  'Community Event': { bg: 'rgba(37, 99, 235, 0.12)', border: 'rgba(59, 130, 246, 0.4)', text: '#60A5FA' },
  'Workshop': { bg: 'rgba(6, 182, 212, 0.12)', border: 'rgba(6, 182, 212, 0.4)', text: '#22D3EE' },
  'Competition': { bg: 'rgba(251, 191, 36, 0.12)', border: 'rgba(251, 191, 36, 0.4)', text: '#FCD34D' },
  'Playtest': { bg: 'rgba(16, 185, 129, 0.12)', border: 'rgba(16, 185, 129, 0.4)', text: '#34D399' },
  'Talk': { bg: 'rgba(139, 92, 246, 0.12)', border: 'rgba(139, 92, 246, 0.4)', text: '#A78BFA' },
  'Meetup': { bg: 'rgba(236, 72, 153, 0.12)', border: 'rgba(236, 72, 153, 0.4)', text: '#F472B6' },
};

const extractPrize = (rewards) => {
  if (!rewards || rewards.length === 0) return null;
  const robuxReward = rewards.find(r => r.includes('Robux') || r.includes('$'));
  return robuxReward || null;
};

const displayEvents = events.slice(0, 4);

const EventsSection = () => {
  return (
    <section className="events-section">
      {/* Blob decoration */}
      <div className="events-blob-1" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">📅 Upcoming Events</span>
          <h2 className="section-title">
            Events <span className="text-gradient-pink">Seru RTA</span>
          </h2>
          <p className="section-description-large">
            Jangan lewatkan event-event kece dari RTA — workshop, kompetisi berhadiah, game night, dan banyak lagi!
          </p>
        </motion.div>

        {/* Events List */}
        <div className="events-list">
          {displayEvents.map((event, i) => {
            const emoji = typeEmoji[event.type] || '📌';
            const colors = typeColors[event.type] || typeColors['Community Event'];
            const prize = extractPrize(event.rewards);
            const slotsPercent = event.maxAttendees
              ? Math.min((event.attendees / event.maxAttendees) * 100, 100)
              : null;
            const slotsLeft = event.maxAttendees
              ? event.maxAttendees - event.attendees
              : null;
            const formattedDate = format(new Date(event.date), 'd MMM yyyy • HH:mm', { locale: localeId });

            return (
              <motion.div
                key={event.id}
                className="event-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Icon */}
                <div className="event-emoji-icon">{emoji}</div>

                {/* Content */}
                <div className="event-card-content">
                  <div className="event-card-top">
                    <div>
                      <div className="event-header-row">
                        <h3 className="event-title">{event.title}</h3>
                        <span
                          className="event-type-badge"
                          style={{
                            background: colors.bg,
                            border: `1px solid ${colors.border}`,
                            color: colors.text,
                          }}
                        >
                          {event.type}
                        </span>
                      </div>
                      <p className="event-desc">{event.description.slice(0, 90)}…</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="event-meta">
                    <span className="event-meta-item">
                      <FiCalendar />
                      {formattedDate}
                    </span>
                    <span className="event-meta-item">
                      <FiMapPin />
                      {event.location}
                    </span>
                    <span className="event-meta-item">
                      <FiUsers />
                      {event.attendees}
                      {event.maxAttendees ? ` / ${event.maxAttendees}` : ' terdaftar'}
                    </span>
                  </div>

                  {/* Slots bar */}
                  {slotsPercent !== null ? (
                    <div className="event-slots-section">
                      <div className="event-slots-bar">
                        <div
                          className="event-slots-fill"
                          style={{ width: `${slotsPercent}%` }}
                        />
                      </div>
                      <span className="event-slots-text">
                        {slotsLeft > 0 ? `${slotsLeft} slot tersisa` : 'Penuh!'}
                      </span>
                    </div>
                  ) : (
                    <div className="event-unlimited-badge">♾️ Unlimited Slots</div>
                  )}
                </div>

                {/* Right Side */}
                <div className="event-card-right">
                  {prize && (
                    <div className="event-prize-badge">
                      🏆 {prize.replace('1st: ', '').replace('$', '')}
                    </div>
                  )}
                  <a
                    href={event.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-rsvp-btn"
                  >
                    RSVP →
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

export default EventsSection;
