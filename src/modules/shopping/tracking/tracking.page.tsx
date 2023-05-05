import { ButtonFilled } from "@/components";

export const TrackingPage = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto py-32">
      <p className="text-primaryDark font-black text-4xl text-center py-16">
        Order Tracking
      </p>
      <div className="w-1/2 mx-auto text-defaultText opacity-70 text-lg leading-6">
        <p>
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <form className="block w-full">
          <div className="w-full">
            <p className="text-primaryDark font-semibold py-4">Order ID</p>
            <input
              type="text"
              className="w-full p-4 border border-solid border-grey.500 focus-visible:outline-primary"
            />
          </div>
          <div className="w-full">
            <p className="text-primaryDark font-semibold py-4">Billing email</p>
            <input
              type="text"
              className="w-full p-4 border border-solid border-grey.500 focus-visible:outline-primary"
            />
          </div>
          <ButtonFilled className="w-full mt-8">
            <p className="w-full text-center text-white font-black text-2xl">
              TRACK
            </p>
          </ButtonFilled>
        </form>
      </div>
    </div>
  );
};
