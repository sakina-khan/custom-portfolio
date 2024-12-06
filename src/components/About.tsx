import React from 'react';
import "../app/styles/about.css"

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading" data-aos="zoom-in-up">
        About Me
      </h2>

      <p className="about-text" data-aos="zoom-in-up">
        &quot;I&apos;m Sakina Khan, a dedicated student pursuing a Bachelor&apos;s in Business and Information Technology. My passion lies at the intersection of technology and business, where I enjoy creating innovative solutions that bridge the gap between technical capabilities and strategic goals.
        <br />
        <br />
        I&apos;ve recently enhanced my skills through the prestigious Governor&apos;s Initiative course, where I gained hands-on experience with cutting-edge technologies like TypeScript, Next.js, AI, HTML, and CSS. I&apos;m always eager to take on challenges that allow me to grow and make a meaningful impact in the tech and business world.&quot;
      </p>
    </div>
  );
};

export default About;
