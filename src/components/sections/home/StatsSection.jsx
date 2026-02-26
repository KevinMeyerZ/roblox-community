import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiMapPin, FiCalendar, FiHeart } from 'react-icons/fi';
import { SiDiscord, SiYoutube } from 'react-icons/si';
import { communityStats } from '../../../data';
import { FadeIn } from '../../animations';
import './StatsSection.css';

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: <FiMapPin />,
      value: communityStats.mapsCreated,
      label: 'Maps Created',
      suffix: '+',
      color: 'primary',
      description: 'Unique game experiences'
    },
    {
      icon: <FiTrendingUp />,
      value: communityStats.totalPlays,
      label: 'Total Plays',
      suffix: '+',
      color: 'secondary',
      description: 'And counting!',
      decimals: 1,
      duration: 3
    },
    {
      icon: <FiUsers />,
      value: communityStats.communityMembers,
      label: 'Community Members',
      suffix: '+',
      color: 'accent',
      description: 'Active creators'
    },
    {
      icon: <FiCalendar />,
      value: communityStats.eventsHosted,
      label: 'Events Hosted',
      suffix: '+',
      color: 'success',
      description: 'Workshops & competitions'
    },
    {
      icon: <SiDiscord />,
      value: communityStats.discordMembers,
      label: 'Discord Members',
      suffix: '+',
      color: 'primary',
      description: 'Join our server!'
    },
    {
      icon: <SiYoutube />,
      value: communityStats.youtubeSubscribers,
      label: 'YouTube Subscribers',
      suffix: '+',
      color: 'error',
      description: 'Watch our content'
    }
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-background">
        <div className="stats-gradient"></div>
      </div>

      <div className="container-custom">
        <FadeIn>
          <div className="stats-header">
            <span className="section-badge">
              <FiTrendingUp /> Our Impact
            </span>
            <h2 className="section-title">
              Growing <span className="text-gradient-primary">Together</span>
            </h2>
            <p className="section-description">
              Our community achievements speak for themselves. Join thousands of creators
              and players who are building amazing experiences!
            </p>
          </div>
        </FadeIn>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <motion.div
                className={`stat-card stat-card-${stat.color}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-icon-wrapper">
                  <div className={`stat-icon stat-icon-${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className={`stat-glow stat-glow-${stat.color}`}></div>
                </div>

                <div className="stat-content">
                  <div className="stat-value">
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={stat.duration || 2.5}
                        separator={stat.value >= 1000 ? ',' : ''}
                        decimals={stat.decimals || 0}
                        decimal="."
                        suffix={stat.suffix || ''}
                      />
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>

                <div className={`stat-decoration stat-decoration-${stat.color}`}></div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Additional Stats Row */}
        <FadeIn delay={0.8}>
          <div className="stats-footer">
            <div className="footer-stat">
              <FiHeart className="footer-stat-icon" />
              <div className="footer-stat-content">
                <span className="footer-stat-value">
                  {inView && (
                    <CountUp
                      start={0}
                      end={communityStats.averageRating}
                      duration={2}
                      decimals={1}
                      decimal="."
                    />
                  )}
                </span>
                <span className="footer-stat-label">Average Rating</span>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-stat">
              <FiTrendingUp className="footer-stat-icon" />
              <div className="footer-stat-content">
                <span className="footer-stat-value">
                  {inView && (
                    <CountUp
                      start={0}
                      end={communityStats.monthlyActiveUsers}
                      duration={2.5}
                      separator=","
                    />
                  )}
                </span>
                <span className="footer-stat-label">Monthly Active Users</span>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-stat">
              <FiHeart className="footer-stat-icon" />
              <div className="footer-stat-content">
                <span className="footer-stat-value">
                  {inView && (
                    <CountUp
                      start={0}
                      end={communityStats.totalLikes}
                      duration={3}
                      separator=","
                      suffix="+"
                    />
                  )}
                </span>
                <span className="footer-stat-label">Total Likes</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default StatsSection;
