import Slider from "react-slick";

import type { Settings } from "react-slick";

import { flower } from "@/assets";
import { useState } from "react";

const images = [
  "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/15-8-600x713.jpg",
  "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/15-9-600x713.jpg",
  "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/16-1-600x713.jpg",
  "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/15-8-600x713.jpg",
  "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/15-9-600x713.jpg",
  "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/16-1-600x713.jpg",
];

const settings: Settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false,
  // vertical: true,
  // verticalSwiping: true,
};

export const PlantInformation = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full">
      <img
        src={images[selectedIndex]}
        className="w-full aspect-[8/9] object-cover"
        alt=""
      />
      <div className="pt-6">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-1/4 aspect-square p-0.5  focus-visible:outline-none ${
                selectedIndex === index ? "bg-primary" : "bg-white"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
      <p className="text-xl font-semibold text-primaryDark py-4">
        Echinocatus Grusonii
      </p>
      <p className="text-defaultText opacity-60 py-2">
        This minicatus type Echinocatus grusonii looks like a barrel
      </p>
    </div>
  );
};
