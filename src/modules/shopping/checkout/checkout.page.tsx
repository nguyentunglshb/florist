import { BillingDetail } from "./billing-detail";
import { CheckoutCard } from "./checkout-card";

export const CheckoutPage = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto py-32">
      <p className="text-primaryDark font-black text-4xl text-center py-16">
        Checkout
      </p>
      <div className="w-full flex space-x-6">
        <div className="flex-2">
          <BillingDetail />
        </div>
        <div className="flex-1">
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};
