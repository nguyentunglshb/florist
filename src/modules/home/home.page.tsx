import { useSearchParams } from "react-router-dom";

import { bg1 } from "@/assets";
import { ButtonFilled, ButtonWhiteDefault, IconsName } from "@/components";
import { Present } from "./present";
import { Offer } from "./offer";
import { TakeCare } from "./take-care";
import { Gallery } from "./gallery";
import { Review } from "./review";
import { ReceiveNotification } from "./receive-notification";
import { TopBlogs } from "./top-blogs";
import { PaymentNotiModal } from "./payment-noti-modal";

export const Home = () => {
  const [searchParams] = useSearchParams();

  console.log(
    searchParams.get("vnp_Amount"),
    searchParams.get("vnp_ResponseCode") === "00"
  );

  return (
    <div className="w-full">
      <PaymentNotiModal />
      <div className="w-full text-center py-2.5 bg-[#e0f5f0] font-semibold">
        {" "}
        Find Your Plant Match 🌱
      </div>
      <div className="w-full relative">
        <img src={bg1} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="font-bold text-white text-[64px] leading-[77px]">
            Nature's Beauty Delivered to You
          </p>
          <p className="w-10/12 text-[#F8F8F8] text-lg font-medium mx-auto text-center pt-7 pb-9">
            Nature's beauty is just a click away with our online flower and
            plant shop. We offer a wide variety of flowers that will bring a
            touch of nature to your home!
          </p>
          <div className="flex w-full justify-center space-x-[13px]">
            <ButtonFilled className="px-[50px]">
              <p className="text-white">Book Now</p>
            </ButtonFilled>
            <ButtonWhiteDefault
              icon={IconsName.ICON_PLAY_WHITE}
              className="px-9 space-x-2.5"
            >
              <p className="text-white">Watch Video</p>
            </ButtonWhiteDefault>
          </div>
        </div>
      </div>
      <Present />
      <Offer />
      <TakeCare />
      <Gallery />
      <Review />
      <ReceiveNotification />
      <TopBlogs />
    </div>
  );
};
