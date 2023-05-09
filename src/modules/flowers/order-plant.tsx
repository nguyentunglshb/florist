import { IconHeart } from "@/assets";
import { ButtonDefault, ButtonFilled, InputNumber } from "@/components";

export const OrderPlant = () => {
  return (
    <div className="w-full">
      <p className="text-primaryDark font-bold text-3xl">Cactus</p>
      <div className="flex py-4 border-b-2 border-solid border-grey.500">
        <p className="text-3xl font-semibold text-defaultText line-through opacity-40">
          $ 10
        </p>
        <p className="text-3xl font-semibold text-primary pl-2">$ 8</p>
      </div>
      <p className="text-defaultText opacity-70 font-medium text-base py-6 leading-6">
        The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium weight
        fleece comfort all year around. Feel better in this sweatshirt because
        Hanes keeps plastic bottles of landfills by using recycled polyester.7.8
        ounce fleece sweatshirt made with up to 5 percent polyester created from
        recycled plastic.
      </p>
      <div className="w-full">
        <div className="flex items-center space-x-8 py-8">
          <InputNumber />
          <ButtonDefault className="h-full py-3 flex-1">
            <p>Add to Cart</p>
          </ButtonDefault>
          <button className="border-2 border-solid border-grey.500 h-11 aspect-square flex items-center justify-center rounded-md">
            <IconHeart />
          </button>
        </div>
        <ButtonFilled className="w-full">
          <p className="text-white w-full text-center py-2">Buy Now</p>
        </ButtonFilled>
      </div>
    </div>
  );
};
