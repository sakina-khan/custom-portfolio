import React from 'react';
import "../app/styles/skills.css"


const Skills = () => {
  return (
    <div id="Skills" className='skill-container'>
      <div className="skill-grid">
        {/* Left Section */}
        <div data-aos="zoom-in-up">
          <h2 className="skill-heading">Technologies I Work With</h2>
          <p className="skill-text">
            Hello! My name is Sakina. 🎓 I have recently completed my two-year pre-engineering program and am now diving into the exciting world of Certified Cloud Generative AI at Governor House. 🚀 Additionally, I am pursuing my bachelor&apos;s degree in Public Administration. Passionate about exploring the intersections of technology and public service, I am eager to leverage my diverse educational background to drive innovation and positive change in both fields. 🌟
            <br />
            <br />
            Eager and driven individual with excellent communication ability, I am a student-focused education professional with 3 years of demonstrated experience in helping students learn and achieve academic success. My strong teaching skills, combined with excellent knowledge of subject content, empower me to connect core content to real-world applications.
          </p>
        </div>
        {/* Right Section */}
        <div>
          <div className="skill-right">
            <div className="skill-icon-grid">
              <h2 data-aos="skill-up">TypeScript</h2>
              <h2 data-aos="skill-up">React.js</h2>
              <h2 data-aos="skill-up">Next.js</h2>
            </div>
            <div className="skill-space">
              <h2 data-aos="skill-up">HTML</h2>
              <h2 data-aos="skill-up">CSS</h2>
              <h2 data-aos="skill-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
