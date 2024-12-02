import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Count Down Timer",
    desc: "A React and TypeScript-based app for managing and organizing your tasks efficiently.",
    img: "/project3.jpeg",
    tags: ["Next.JS", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Weather App",
    desc: "A Next.js and TypeScript-powered website to track time with interactive features.",
    img: "/project3.jpeg", // Fixed path issue
    tags: ["Next.JS", "Node", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/project2.jpeg",
    tags: ["Next.JS", "Node", "CSS", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      {/* Heading */}
      <Heading title="My Projects" />

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.length > 0 ? (
          data.map((el, index) => (
            <Card
              key={el.id}
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Optional: AOS animations
            />
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
