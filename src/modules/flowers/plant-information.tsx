import { useState } from "react";
import Slider from "react-slick";

import type { Settings } from "react-slick";

type PlantInforProps = {
  imageUrls: string[];
  headImageUrl: string;
};

const settings: Settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false,
  // vertical: true,
  // verticalSwiping: true,
};

export const PlantInformation = (props: PlantInforProps) => {
  const { headImageUrl, imageUrls } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full">
      <img
        src={imageUrls[selectedIndex]}
        className="w-full aspect-[8/9] object-cover"
        alt=""
      />
      <div className="pt-6">
        <Slider {...settings}>
          {imageUrls.map((image, index) => (
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
    </div>
  );
};
