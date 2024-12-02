import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat  bg-cover"
      style={{
        backgroundImage: "url('/banner1.png')",
        backgroundSize: "25%", backgroundPosition: "left 100px top 100px" // Adjust this value as needed
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]"> {/* Fixed "100hv" to "100vh" */}
        <div className="text-center flex justify-center items-center">
          <div className="text-[30px] sm:text-[50px] md:text-[50klpx] font-bold leading-tight text-white">
            <p data-aos="zoom-in-up">I'm</p>
            <p  data-aos="zoom-in-up">Sakina</p>
            <p data-aos="zoom-in-up">Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
