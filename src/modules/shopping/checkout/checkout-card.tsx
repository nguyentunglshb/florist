import { ButtonFilled } from "@/components";
import { useQueryGetCart } from "../cart/apis";
import { Link } from "react-router-dom";
import { NavigationPath } from "@/models";
import { useMutationCreatePayment } from "../apis/create-payment";

export const CheckoutCard = () => {
  const { data } = useQueryGetCart();
  const mutationCreatePayment = useMutationCreatePayment();

  return (
    <div className="w-full border border-solid border-[#000] p-8">
      <p className="text-2xl text-primaryDark font-bold pb-4">Product</p>
      <div className="w-full py-2 border-b border-solid border-grey.500">
        {data &&
          data.data.items &&
          data.data.items.map(
            ({ headImageUrl, name, price, productId, quantity }) => (
              <Link
                key={productId}
                to={NavigationPath.PLANTERS_DETAIL.replace(":_id", productId)}
                className="h-16 flex mb-4"
              >
                <img src={headImageUrl} className="h-full" alt="" />
                <div className="h-full px-4 flex-1 ">
                  <p className="text-primary text-sm">{name}</p>
                  <p className="font-bold text-sm">QTY: {quantity}</p>
                </div>
                <div className="text-defaultText opacity-80">
                  <p>${price}</p>
                </div>
              </Link>
            )
          )}
      </div>

      <div className="w-full flex justify-between py-6 items-center border-b border-solid border-grey.500">
        <p>Subtotal</p>
        <div className="text-defaultText opacity-80">
          <p>${data?.data?.totalPrice}</p>
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
          <p>${data?.data?.totalPrice}</p>
        </div>
      </div>
      <div className="w-full p-4 border border-solid border-grey.200">
        <p className="text-defaultText opacity-80 leading-5">
          Please send a check to Store Name, Store Street, Store Town, Store
          State / County, Store Postcode.
        </p>
      </div>
      <div className="w-full pt-8">
        <ButtonFilled
          className="w-full text-center"
          onClick={() =>
            mutationCreatePayment.mutate({
              amount: `${((data && data?.data?.totalPrice * 2340) || 0).toFixed(
                0
              )}`,
              bankCode: "",
              language: "",
            })
          }
        >
          <p className="w-full text-white uppercase font-black py-2 text-xl">
            Place Order
          </p>
        </ButtonFilled>
      </div>
    </div>
  );
};
