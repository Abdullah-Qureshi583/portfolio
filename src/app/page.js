
"use client"
import Navbar from "@/components/pf/Navbar";
import Hero from "@/components/pf/Hero";
import About from "@/components/pf/About";
import Projects from "@/components/pf/Projects";
import Contact from "@/components/pf/Contact";
import Footer from "@/components/pf/Footer";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   // This scrolls to the top of the page every time the component loads or reloads
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
