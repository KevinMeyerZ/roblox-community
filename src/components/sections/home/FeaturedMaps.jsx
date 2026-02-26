import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FiPlay, FiHeart, FiStar, FiArrowRight } from 'react-icons/fi';
import { getFeaturedMaps } from '../../../data';
import { FadeIn } from '../../animations';
import './FeaturedMaps.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const FeaturedMaps = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const featuredMaps = getFeaturedMaps();

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <section className="featured-maps-section">
      <div className="container-custom">
        <FadeIn>
          <div className="section-header">
            <div className="section-header-content">
              <span className="section-badge">
                <FiStar /> Featured
              </span>
              <h2 className="section-title">
                Discover Our Best <span className="text-gradient-primary">Maps</span>
              </h2>
              <p className="section-description">
                Explore our most popular and highly-rated Roblox maps. Each one crafted
                with passion and played by thousands!
              </p>
            </div>
            <Link to="/games" className="section-link">
              View All Maps <FiArrowRight />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="featured-maps-carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="maps-swiper"
            >
              {featuredMaps.map((map, index) => (
                <SwiperSlide key={map.id}>
                  <motion.div
                    className="map-card"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="map-card-image">
                      <img src={map.thumbnail} alt={map.title} loading="lazy" />
                      <div className="map-card-overlay">
                        <div className="map-card-actions">
                          <button className="map-action-btn">
                            <FiPlay /> Play Now
                          </button>
                        </div>
                      </div>
                      <div className="map-card-badges">
                        <span className="map-badge map-badge-featured">Featured</span>
                        <span className="map-badge map-badge-category">{map.category}</span>
                      </div>
                    </div>

                    <div className="map-card-content">
                      <h3 className="map-card-title">{map.title}</h3>
                      <p className="map-card-description">
                        {map.description.substring(0, 100)}...
                      </p>

                      <div className="map-card-stats">
                        <div className="map-stat">
                          <FiPlay className="map-stat-icon" />
                          <span>{formatNumber(map.stats.plays)}</span>
                        </div>
                        <div className="map-stat">
                          <FiHeart className="map-stat-icon" />
                          <span>{formatNumber(map.stats.likes)}</span>
                        </div>
                        <div className="map-difficulty" data-difficulty={map.difficulty.toLowerCase()}>
                          {map.difficulty}
                        </div>
                      </div>

                      <div className="map-card-footer">
                        <div className="map-creator">
                          <img
                            src={map.createdBy.avatar}
                            alt={map.createdBy.name}
                            className="creator-avatar"
                          />
                          <span className="creator-name">{map.createdBy.name}</span>
                        </div>
                        <Link to={`/games/${map.slug}`} className="map-details-link">
                          Details <FiArrowRight />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedMaps;
