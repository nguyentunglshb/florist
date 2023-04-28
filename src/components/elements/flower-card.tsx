import { IconHeart, IconHeartFilled } from "@/assets";
import { ButtonDefault } from ".";

export type FlowerCardProps = {
  url: string;
  isLiked: boolean;
  name: string;
  originPrice: number;
  currentPrice: number;
};

export const FlowerCard = (props: FlowerCardProps) => {
  const { url, isLiked, name, originPrice, currentPrice } = props;
  return (
    <div className="rounded-[10px] shadow-present border border-solid border-[rgba(0,0,0,0.03)] w-[280px] relative">
      <div className="absolute w-8 aspect-square rounded-full bg-white top-4 right-4 flex items-center justify-center">
        {isLiked ? <IconHeartFilled /> : <IconHeart />}
      </div>
      <img
        src={url}
        alt="flower"
        className="w-full aspect-9/8 object-cover border-b border-solid border-[rgba(0,0,0,0.03)] shadow-present rounded-t-[10px]"
      />
      <div className="py-2.5 px-6 flex justify-between items-center">
        <div>
          <p className="text-primary font-black capitalize text-base">{name}</p>
          <div className="flex pt-1.5">
            <p className="line-through text-defaultText opacity-50 text-xs pr-2">
              ${originPrice}
            </p>
            <p className="text-primary text-xs font-bold">${currentPrice}</p>
          </div>
        </div>
        <ButtonDefault>
          <p className="capitalize font-black text-xs">Buy now</p>
        </ButtonDefault>
      </div>
    </div>
  );
};
