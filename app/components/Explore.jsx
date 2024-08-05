import Image from "next/image";
import React from "react";
import { LiaWineBottleSolid } from "react-icons/lia";

export default function Explore() {
  return (
    <section className="py-12  mt-32 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className=" w-full flex flex-col lg:flex-row gap-12">
          <div className="flex-1  flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 1 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:flex-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    width={100}
                    height={56}
                    src="/image1.png"
                    alt="Whisky image"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Ginger Monkey
                </h3>
                <p className="max-w-[400px]">
                  A crowd pleasing favorite, there is no more perfect pairing
                  than Monkey Shoulder whisky, ginger ale and orange. The
                  easiest of drinks to make, tastes like...OMG! (Orange / Monkey
                  / Ginger).
                </p>
              </div>
            </div>
            {/* item 2 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:flex-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    width={100}
                    height={56}
                    src="/image2.jpg"
                    alt="Whisky image"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Lazy Old Fashioned
                </h3>
                <p className="max-w-[400px]">
                  The old fashioned is the world's favourite cocktail recipe and
                  Monkey was made for this long standing classic. But this
                  whisky cocktail need not be hard work, why not join Joe, our
                  global brand ambassador for a quick lesson in and learn how to
                  make a batch of our Lazy Old Fashioned cocktail at home which
                  you can store in the fridge for later or share with your
                  mates.
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[200px] h-[580px]">
              <Image
                src="/bottle.png"
                fill
                alt=""
                className="rounded-full"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div>
          <div className="flex-1  flex flex-col justify-around  text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* item 3 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:flex-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    width={100}
                    height={56}
                    src="/image4.jpg"
                    alt="Whisky image"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Monkey Colada
                </h3>
                <p className="max-w-[400px]">
                  Everyone needs a beach holiday now and again and our whisky is
                  no different. Take monkey on your next tropical summer
                  adventure with this twist on a Pina Colada. Tastes like that
                  tropical holiday you’d rather be on, pass the coconuts.
                </p>
              </div>
            </div>
            {/* item 4 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:flex-left xl:flex xl:flex-col xl:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    width={100}
                    height={56}
                    src="/image3.jpg"
                    alt="Whisky image"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
                  Monkey Jam Sour
                </h3>
                <p className="max-w-[400px]">
                  We love a classic whisky sour cocktail, but we had to give it
                  that Monkey Shoulder spin with a dollop of mouthwatering
                  strawberry jam. Not only does this fruity concoction tastes
                  like whisky and donuts, but it’s the perfect red cocktail for
                  summer and we love it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
