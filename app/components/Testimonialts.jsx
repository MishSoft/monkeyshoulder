// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper modules
import { Navigation } from "swiper/modules";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import the icon component
import { IoMdQuote } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    rating: 5,
    comment:
      "Monkey Shoulder is my go-to whisky. Smooth, flavorful, and perfect for any occasion!",
    date: "2024-08-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London, UK",
    rating: 4,
    comment:
      "I love the rich and complex flavors of Monkey Shoulder. It's a must-try for whisky lovers.",
    date: "2024-07-20",
  },
  {
    id: 3,
    name: "Michael Brown",
    location: "Sydney, Australia",
    rating: 5,
    comment: "Best whisky I've ever had. Monkey Shoulder never disappoints!",
    date: "2024-06-15",
  },
  {
    id: 4,
    name: "Emily White",
    location: "Toronto, Canada",
    rating: 4,
    comment:
      "A fantastic whisky with great depth. Perfect for sipping or mixing.",
    date: "2024-05-10",
  },
  {
    id: 5,
    name: "Chris Green",
    location: "Dublin, Ireland",
    rating: 5,
    comment:
      "Monkey Shoulder has a unique character that sets it apart from other whiskies. Highly recommend!",
    date: "2024-04-25",
  },
  {
    id: 6,
    name: "Sophia Taylor",
    location: "Los Angeles, USA",
    rating: 5,
    comment:
      "The smoothest whisky I've ever tasted. Monkey Shoulder is simply amazing.",
    date: "2024-03-30",
  },
  {
    id: 7,
    name: "Liam Johnson",
    location: "Edinburgh, Scotland",
    rating: 5,
    comment:
      "Monkey Shoulder is a perfect blend. I always keep a bottle in my collection.",
    date: "2024-02-15",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    location: "Madrid, Spain",
    rating: 4,
    comment:
      "A delightful whisky with rich flavors. Monkey Shoulder never fails to impress.",
    date: "2024-01-28",
  },
  {
    id: 9,
    name: "William Davis",
    location: "Cape Town, South Africa",
    rating: 5,
    comment:
      "Absolutely love Monkey Shoulder. It's smooth, rich, and full of character.",
    date: "2023-12-20",
  },
  {
    id: 10,
    name: "Isabella Wilson",
    location: "Vancouver, Canada",
    rating: 4,
    comment:
      "Monkey Shoulder is a fantastic whisky. It’s versatile and always a crowd-pleaser.",
    date: "2023-11-05",
  },
];

function Testimonialts() {
  // Function to generate star icons based on rating
  const handleRatingCounter = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <MdOutlineStar size={30} className="text-yellow-300" key={i} />
        );
      } else {
        stars.push(
          <IoIosStarOutline size={30} className="text-yellow-300" key={i} />
        );
      }
    }
    return stars;
  };

  return (
    <section className="h-[60vh] xl:h-[70vh] ">
      <div className="container mx-auto h-full flex items-center">
        <Swiper navigation={true} className="h-[400px]">
          {testimonials.map((item, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="flex justify-center h-full xl:pt-14">
                  <div className="max-w-[60%] text-primary">
                    <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                    <p className="text-2xl font-secondary text-center mb-8">
                      {item.comment}
                    </p>
                    <div className="text-center">
                      {/* rating */}
                      <div className="flex justify-center gap-2 mb-5 items-center">
                        {handleRatingCounter(item.rating)}
                      </div>
                      {/* <div>{ratCount}</div> */}
                      <p className="text-xl font-bold mb-1">{item.name}</p>
                      <p className="text-secondary">{item.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonialts;
