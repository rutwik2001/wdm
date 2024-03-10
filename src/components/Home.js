import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ConsultationSection from './ConsultationSection';
import Footer from './Footer';


function Home() {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <StatsSection />
      <ConsultationSection />
      <Footer />
    </div>
  );
}

export default Home;
