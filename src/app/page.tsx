"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    console.log("Initializing AOS...");
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      offset: 200,
      delay: 100,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
    AOS.refreshHard(); // Ensures animations refresh for dynamic components
  }, []);

  return (
    <main>
      <section data-aos="fade-up">
        <Hero />
      </section>
      <section data-aos="fade-right">
        <Projects />
      </section>
      <section data-aos="fade-left">
        <Skills />
      </section>
      <section data-aos="zoom-in">
        <Contact />
      </section>
      <section data-aos="slide-up">
        <About />
      </section>
      <footer data-aos="fade">
        <Footer />
      </footer>
    </main>
  );
}
