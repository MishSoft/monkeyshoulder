import React from "react";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    imgSrc: "https://example.com/image1.jpg",
    name: "Monkey Shoulder Blended Malt Scotch Whisky",
    description:
      "Monkey Shoulder is a blend of three of Speyside's finest single malt whiskies.",
    price: 45.99,
  },
  {
    imgSrc: "https://example.com/image2.jpg",
    name: "Monkey Shoulder Smokey Monkey",
    description:
      "A smoky twist on the classic Monkey Shoulder, perfect for cocktails.",
    price: 49.99,
  },
  {
    imgSrc: "https://example.com/image3.jpg",
    name: "Monkey Shoulder 1000ml",
    description:
      "A larger bottle of the classic Monkey Shoulder, ideal for sharing.",
    price: 64.99,
  },
  {
    imgSrc: "https://example.com/image4.jpg",
    name: "Monkey Shoulder The Ultimate Bartender's Malt",
    description:
      "Specially crafted for bartenders, this malt is perfect for creating cocktails.",
    price: 54.99,
  },
  {
    imgSrc: "https://example.com/image5.jpg",
    name: "Monkey Shoulder Batch 27",
    description:
      "The original Monkey Shoulder batch, with a smooth and rich flavor profile.",
    price: 47.99,
  },
  {
    imgSrc: "https://example.com/image6.jpg",
    name: "Monkey Shoulder Bourbon Cask",
    description:
      "A unique blend finished in bourbon casks for added sweetness.",
    price: 52.99,
  },
  {
    imgSrc: "https://example.com/image7.jpg",
    name: "Monkey Shoulder Sherry Cask",
    description:
      "A limited edition blend finished in sherry casks, offering a fruity and spicy finish.",
    price: 59.99,
  },
  {
    imgSrc: "https://example.com/image8.jpg",
    name: "Monkey Shoulder 750ml",
    description:
      "The classic Monkey Shoulder in a 750ml bottle, perfect for gifting.",
    price: 39.99,
  },
  {
    imgSrc: "https://example.com/image9.jpg",
    name: "Monkey Shoulder Distiller's Choice",
    description:
      "A special selection by the master distiller, featuring unique flavor notes.",
    price: 55.99,
  },
  {
    imgSrc: "https://example.com/image10.jpg",
    name: "Monkey Shoulder Port Cask",
    description:
      "Finished in port casks, this blend offers a rich and fruity taste.",
    price: 58.99,
  },
  {
    imgSrc: "https://example.com/image11.jpg",
    name: "Monkey Shoulder 375ml",
    description:
      "A half-size bottle of the classic Monkey Shoulder, ideal for sampling.",
    price: 24.99,
  },
  {
    imgSrc: "https://example.com/image12.jpg",
    name: "Monkey Shoulder Single Malt",
    description: "A special edition single malt version of Monkey Shoulder.",
    price: 64.99,
  },
  {
    imgSrc: "https://example.com/image13.jpg",
    name: "Monkey Shoulder Honey Cask",
    description: "A sweet and smooth blend finished in honey casks.",
    price: 53.99,
  },
  {
    imgSrc: "https://example.com/image14.jpg",
    name: "Monkey Shoulder Double Malt",
    description: "A blend of two Speyside single malts for a richer flavor.",
    price: 51.99,
  },
  {
    imgSrc: "https://example.com/image15.jpg",
    name: "Monkey Shoulder Caribbean Rum Cask",
    description:
      "A tropical twist on the classic blend, finished in Caribbean rum casks.",
    price: 56.99,
  },
  {
    imgSrc: "https://example.com/image16.jpg",
    name: "Monkey Shoulder Triple Malt",
    description:
      "A premium blend of three single malts, offering a complex flavor profile.",
    price: 63.99,
  },
  {
    imgSrc: "https://example.com/image17.jpg",
    name: "Monkey Shoulder Spice Edition",
    description:
      "A spicier version of Monkey Shoulder, perfect for warming cocktails.",
    price: 50.99,
  },
  {
    imgSrc: "https://example.com/image18.jpg",
    name: "Monkey Shoulder Classic",
    description: "The classic Monkey Shoulder blend, versatile and smooth.",
    price: 44.99,
  },
  {
    imgSrc: "https://example.com/image19.jpg",
    name: "Monkey Shoulder Limited Edition",
    description:
      "A special limited edition release with unique flavor characteristics.",
    price: 69.99,
  },
  {
    imgSrc: "https://example.com/image20.jpg",
    name: "Monkey Shoulder Custom Label",
    description: "Create your own custom label for a personalized gift.",
    price: 74.99,
  },
];

export default function Menu() {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Menu</h2>
          <p className="text-center max-w-[620px] mx-auto">Lorem</p>
        </div>
        {/* menu & btn */}
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          {/* Menu grid */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gapy-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  name={name}
                  description={description}
                  price={price}
                  //   imgSrc={imgSrc}
                  key={index}
                />
              );
            })}
          </div>
          <button className="btn">View full menu</button>
        </div>
      </div>
    </section>
  );
}
