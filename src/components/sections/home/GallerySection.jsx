import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX } from 'react-icons/fi';
import './GallerySection.css';

const galleryImages = [
  { id: 1, src: '/images/team/Image_1.png', alt: 'Member RTA in action', tall: true },
  { id: 2, src: '/images/team/Image_2.png', alt: 'Sesi bermain bersama', tall: false },
  { id: 3, src: '/images/team/Image_3.png', alt: 'Momen seru di map RTA', tall: false },
  { id: 4, src: '/images/team/Image_4.png', alt: 'Tim ROBLOX Tallent Alliance', tall: true },
  { id: 5, src: '/images/team/Image_5.png', alt: 'Aksi gameplay kece', tall: false },
  { id: 6, src: '/images/team/Image_6.png', alt: 'Kolaborasi member RTA', tall: false },
  { id: 7, src: '/images/team/Image_7.png', alt: 'Event komunitas RTA', tall: true },
  { id: 8, src: '/images/team/Image_8.png', alt: 'Behind the scene RTA', tall: false },
  { id: 9, src: '/images/team/Image_9.png', alt: 'Highlight map terbaik', tall: false },
  { id: 10, src: '/images/team/Image_10.png', alt: 'Community gathering RTA', tall: false },
];

const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="gallery-section">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="section-header-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">📸 Gallery</span>
          <h2 className="section-title">
            Cuplikan <span className="text-gradient-blue">Aksi Member RTA</span>
          </h2>
          <p className="section-description-large">
            Momen-momen seru dari member RTA bermain di map-map kece yang kami buat bersama!
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              className={`gallery-item ${img.tall ? 'gallery-item-tall' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <FiMaximize2 className="gallery-zoom-icon" />
                <span className="gallery-alt-text">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="gallery-lightbox-inner"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedImg(null)}>
                <FiX />
              </button>
              <img src={selectedImg.src} alt={selectedImg.alt} />
              <p className="lightbox-caption">{selectedImg.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
