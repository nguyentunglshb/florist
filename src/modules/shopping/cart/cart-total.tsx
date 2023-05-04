import { ButtonFilled } from "@/components";

export const CartTotal = () => {
  return (
    <div className="flex-1">
      <div className="w-full bg-grey.500 p-4 text-primaryDark font-semibold text-xl">
        <p>Cart totals</p>
      </div>
      <div className="bg-grey.300 p-4">
        <div className="flex items-center py-4">
          <p className="flex-1 text-defaultText">Subtotal</p>
          <p className="flex-1 font-semibold text-lg">$100.00</p>
        </div>
        <div className="flex items-center py-4">
          <p className="flex-1">Shipping</p>
          <div className="text-defaultText flex-1 opacity-80">
            <p className="pb-4">Free shipping</p>
            <p className="leading-5">
              Shipping options will be updated during checkout.
            </p>
          </div>
        </div>
        <div className="flex items-center py-4">
          <p className="flex-1">Total</p>
          <p className="flex-1 font-black text-primaryDark text-2xl">$100.00</p>
        </div>
      </div>
      <div className="w-full bg-grey.300 px-4 pb-4">
        <ButtonFilled className="w-full text-center">
          <p className="w-full text-white uppercase font-black py-2 text-xl">
            Process to checkout
          </p>
        </ButtonFilled>
      </div>
    </div>
  );
};
