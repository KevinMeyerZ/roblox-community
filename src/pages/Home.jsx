import { HeroSection } from '../components/sections/home';
import AboutSection from '../components/sections/home/AboutSection';
import GamesSection from '../components/sections/home/GamesSection';
import TeamSection from '../components/sections/home/TeamSection';
import EventsSection from '../components/sections/home/EventsSection';
import GallerySection from '../components/sections/home/GallerySection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="games">
        <GamesSection />
      </section>

      <section id="tim">
        <TeamSection />
      </section>

      <section id="events">
        <EventsSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>


    </div>
  );
};

export default Home;
