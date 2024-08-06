import React from "react";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";

const data = [
  {
    imageSrc: "/journey.jpg",
    title: "Our Journey",
    description:
      "Monkey Shoulder Whisky was created by William Grant & Sons, a family-owned Scottish distillery with a rich history dating back to 1887. The brand was launched in 2005, and it quickly gained a reputation for its innovative approach to Scotch whisky. Unlike traditional single malts, Monkey Shoulder is a blended malt, meaning it is made from a combination of single malts from three different Speyside distilleries: Glenfiddich, Balvenie, and Kininvie.",
  },

  {
    imageSrc: "/promise.jpg",
    title: "Our Promise",
    description:
      "Monkey Shoulder aims to bring a modern and fun approach to whisky, breaking away from the often stuffy and traditional image of Scotch whisky. The brand promises high quality and versatility, making their whisky approachable for both new whisky drinkers and connoisseurs. Their promise also includes a commitment to crafting whisky that can be enjoyed neat, on the rocks, or in a wide range of cocktails. Monkey Shoulder emphasizes accessibility.",
  },

  {
    imageSrc: "/team.jpg",
    title: "Our Team",
    description:
      "The team behind Monkey Shoulder consists of passionate whisky makers and innovators. Key figures include: Brian Kinsman: Master Blender at William Grant & Sons, responsible for the blending of Monkey Shoulder. He has a wealth of experience in the whisky industry and plays a crucial role in maintaining the quality and consistency of the brand. The Malt Men: A dedicated group of craftsmen who oversee the production process.",
  },
];

export default function About() {
  const scrollableSectionRef = useRef(null);
  const scrollTrigger = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTrigger.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden pb-20 xl:pb-0 mt-20 bg-primary">
      <div ref={scrollTrigger}>
        <div
          ref={scrollableSectionRef}
          className=" flex h-screen w-[300vw] relative"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-screen h-screen  flex flex-col justify-center items-center relative"
              >
                <div className="container  mx-auto">
                  <div className="flex  items-center gap-40 p-20 relative">
                    {/* text */}
                    <div className="flex flex-col justify-center items-center">
                      <Badge containerStyle="w-[180px] h-[180px]" />
                      <div className="max-w-[560px] text-center">
                        {/* title */}
                        <h2 className="h2 text-white mb-4">
                          <span className="mr-4">
                            {item.title.split(" "[0])}
                          </span>
                          <span className="text-accent">
                            {item.title.split(" ")[1]}
                          </span>
                        </h2>
                        {/* description */}
                        <p className="leading-relaxed mb-16 px-8 xl:px-0">
                          {item.description}
                        </p>
                        <button className="btn">See more</button>
                      </div>
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex  flex-1 w-full h-[70vh] relative">
                      <Image
                        src={item.imageSrc}
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
