import { ButtonFilled } from "@/components";

export const CheckoutCard = () => {
  return (
    <div className="w-full border border-solid border-[#000] p-8">
      <p className="text-2xl text-primaryDark font-bold pb-4">Product</p>
      <div className="w-full py-2 border-b border-solid border-grey.500">
        <div className="h-16 flex mb-4">
          <img
            src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/10-6-600x713.jpg"
            className="h-full"
            alt=""
          />
          <div className="h-full px-4 flex-1 ">
            <p className="text-primary text-sm">ZZ PLANT</p>
            <p className="font-bold text-sm">QTY: 1</p>
          </div>
          <div className="text-defaultText opacity-80">
            <p>$50.00</p>
          </div>
        </div>
        <div className="h-16 flex mb-4">
          <img
            src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2020/12/10-6-600x713.jpg"
            className="h-full"
            alt=""
          />
          <div className="h-full px-4 flex-1 ">
            <p className="text-primary text-sm">ZZ PLANT</p>
            <p className="font-bold text-sm">QTY: 1</p>
          </div>
          <div className="text-defaultText opacity-80">
            <p>$50.00</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between py-6 items-center border-b border-solid border-grey.500">
        <p>Subtotal</p>
        <div className="text-defaultText opacity-80">
          <p>$100.00</p>
        </div>
      </div>
      <div className="w-full flex justify-between py-6 items-center border-b border-solid border-grey.500">
        <p>Shipping</p>
        <div className="text-defaultText opacity-80">
          <p>Free shipping</p>
        </div>
      </div>
      <div className="w-full flex justify-between py-6 items-center border-b border-solid border-grey.500">
        <p>Total</p>
        <div className="text-defaultText font-black text-2xl">
          <p>$100.00</p>
        </div>
      </div>
      <div className="w-full p-4 border border-solid border-grey.200">
        <p className="text-defaultText opacity-80 leading-5">
          Please send a check to Store Name, Store Street, Store Town, Store
          State / County, Store Postcode.
        </p>
      </div>
      <div className="w-full pt-8">
        <ButtonFilled className="w-full text-center">
          <p className="w-full text-white uppercase font-black py-2 text-xl">
            Place Order
          </p>
        </ButtonFilled>
      </div>
    </div>
  );
};
