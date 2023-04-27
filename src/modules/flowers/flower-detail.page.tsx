import {
  IconArrowLeft,
  IconArrowRight,
  IconHeart,
  mask,
  tulip,
} from "@/assets";
import { BaseButton, CollapseDescription } from "@/components";

export const FlowerDetailPage = () => {
  return (
    <div className="w-full max-w-[1444px] mx-auto ">
      <div className="flex w-full justify-between relative">
        <div>
          <div className="max-w-[560px]">
            <p className="font-semibold text-[64px] text-[#171616] leading-[96px]">
              Minimal red tulip flower vase.
            </p>
            <p className="text-5xl text-[#171616] leading-[72px]">$18.99</p>
            <p className="text-[#515151] text-base py-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis
              imperdiet sodales.
            </p>
          </div>

          <div className="flex items-center space-x-10">
            <BaseButton>
              <p className="text-white text-sm">Add to Cart</p>
            </BaseButton>

            <div>
              <IconHeart />
            </div>
          </div>
        </div>

        <div className="w-[439px] h-[620px] bg-linear-rectangle rounded-[300px_300px_4px_4px] relative">
          <img
            src={tulip}
            className="w-full scale-125 origin-bottom
         absolute bottom-0"
          />
          <img src={mask} className="w-full absolute top-0" />
        </div>

        <div className="self-stretch flex flex-col justify-between pl-10 h-full">
          <div className="flex items-center space-x-6">
            <IconArrowLeft />
            <IconArrowRight />
          </div>
          <CollapseDescription
            label="Description"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quis imperdiet sodales egestas. Neque suspendisse sed accumsan, molestie aliquet."
            defaultCollapsed={false}
          />
        </div>
      </div>
    </div>
  );
};
