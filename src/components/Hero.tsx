import React from 'react';
import Navbar from './Navbar';
import "../app/styles/Hero.css"

 // Ensure the correct path to the CSS file

const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="hero-container"
      style={{
        backgroundImage: "url('/banner1.png')",
        backgroundSize: "25%",
        backgroundPosition: "left 100px top 100px",
      }}
    >
      <Navbar />
      <div className="hero-content">
        <div className="hidden lg:block">
          <div className="hero-text">
            <p data-aos="hero-main">I&apos;m</p>
            <p data-aos="hero-up">Sakina</p>
            <p data-aos="hero-up">Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
