"use client";
import React from "react";
import Badge from "./Badge";

export default function Hero() {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
      {/* overlay */}
      <div className="bg-hero-overlay absolute w-full h-full z-10 bg-primary/[0.93]">
        {/* overlay */}
      </div>
      {/* video */}
      <video
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero_overlay/monkeyshoulder.mp4" />
      </video>
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        {/* text */}
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          {/* badge & h1 */}
          <div className="flex flex-col items-center">
            <Badge containerStyle="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white">
              <span className="text-accent">Monkey</span> Shoulder
            </h1>
          </div>

          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            Bold enough to stand out, balanced enough not to overpower. Great
            with mixers or on its own.
          </p>
          <button className="btn">Our menu</button>
        </div>
      </div>
    </section>
  );
}
