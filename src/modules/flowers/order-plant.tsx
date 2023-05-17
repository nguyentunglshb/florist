import { IconHeart } from "@/assets";
import { ButtonDefault, ButtonFilled, InputNumber } from "@/components";
import { useMutationAddToCart } from ".";
import { useState } from "react";
import { useParams } from "react-router-dom";

type OrderPlantProps = {
  name: string;
  description: string;
  currentPrice: number;
  originPrice: number;
  headImageUrl: string;
};

export const OrderPlant = (props: OrderPlantProps) => {
  const { name, description, currentPrice, originPrice, headImageUrl } = props;

  const { id } = useParams();

  const [count, setCount] = useState(0);

  const setQuantity = (value: number | string) => {
    setCount(+value);
  };

  const mutationAddToCart = useMutationAddToCart();

  return (
    <div className="w-full">
      <p className="text-primaryDark font-bold text-3xl">{name}</p>
      <div className="flex py-4 border-b-2 border-solid border-grey.500">
        <p className="text-3xl font-semibold text-defaultText line-through opacity-40">
          $ {originPrice}
        </p>
        <p className="text-3xl font-semibold text-primary pl-2">
          $ {currentPrice}
        </p>
      </div>
      <p className="text-defaultText opacity-70 font-medium text-base py-6 leading-6">
        {description}
      </p>
      <div className="w-full">
        <div className="flex items-center space-x-8 py-8">
          <InputNumber count={count} setCount={setQuantity} />
          <ButtonDefault
            className="h-full py-3 flex-1"
            onClick={() => {
              if (count > 0) {
                mutationAddToCart.mutate({
                  name,
                  price: currentPrice,
                  productId: id as string,
                  quantity: count,
                  headImageUrl,
                });
              }
            }}
          >
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
