"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonialts from "./components/Testimonialts";

export default function Home() {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      <Menu />
      <Testimonialts />
    </div>
  );
}
