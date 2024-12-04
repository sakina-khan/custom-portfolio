import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items">
        {/* Left Section */}
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">Technologies I Work With</h2>
          <p className="text-gray-500 pt-2">
            Hello! My name is Sakina. 🎓 I have recently completed my two-year pre-engineering program and am now diving into the exciting world of Certified Cloud Generative AI at Governor House. 🚀 Additionally, I am pursuing my bachelor&apos;s degree in Public Administration. Passionate about exploring the intersections of technology and public service, I am eager to leverage my diverse educational background to drive innovation and positive change in both fields. 🌟
            <br />
            <br />
            Eager and driven individual with excellent communication ability, I am a student-focused education professional with 3 years of demonstrated experience in helping students learn and achieve academic success. My strong teaching skills, combined with excellent knowledge of subject content, empower me to connect core content to real-world applications.
          </p>
        </div>
        {/* Right Section */}
        <div>
          <div className="grid grid-cols-2 text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="fade-right">TypeScript</h2>
              <h2 data-aos="fade-right">React.js</h2>
              <h2 data-aos="fade-right">Next.js</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="fade-left">HTML</h2>
              <h2 data-aos="fade-left">CSS</h2>
              <h2 data-aos="fade-left">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
