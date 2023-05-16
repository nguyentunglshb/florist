import { flower } from "@/assets";
import { FlowerCard, FlowerCardProps } from "@/components/elements/flower-card";

const flowerCardDefaultData: FlowerCardProps[] = [
  {
    headImageUrl: flower,
    isLiked: true,
    name: "Cactus Plant",
    originPrice: 10,
    currentPrice: 8,
  },
  {
    headImageUrl: flower,
    isLiked: false,
    name: "Cactus Plant",
    originPrice: 10,
    currentPrice: 8,
  },
  {
    headImageUrl: flower,
    isLiked: true,
    name: "Cactus Plant",
    originPrice: 10,
    currentPrice: 8,
  },
  {
    headImageUrl: flower,
    isLiked: false,
    name: "Cactus Plant",
    originPrice: 10,
    currentPrice: 8,
  },
  {
    headImageUrl: flower,
    isLiked: true,
    name: "Cactus Plant",
    originPrice: 10,
    currentPrice: 8,
  },
  {
    headImageUrl: flower,
    isLiked: true,
    name: "Cactus Plant",
    originPrice: 10,
    currentPrice: 8,
  },
  {
    headImageUrl: flower,
    isLiked: false,
    name: "Cactus Plant",
    originPrice: 10,
    currentPrice: 8,
  },
  {
    headImageUrl: flower,
    isLiked: false,
    name: "Cactus Plant",
    originPrice: 10,
    currentPrice: 8,
  },
];

export const Offer = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto pb-16">
      <p className="text-primaryDark text-4xl font-black capitalize text-center pb-9 tracking-wider">
        What we offer to you
      </p>
      <div className="w-full grid grid-cols-4 gap-6">
        {flowerCardDefaultData.map((flower, index) => {
          return <FlowerCard {...flower} key={index} />;
        })}
      </div>
    </div>
  );
};
