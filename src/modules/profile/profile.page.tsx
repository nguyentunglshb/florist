import { bg1 } from "@/assets";
import { getAvatar, getUsername } from "@/helpers";

export const ProfilePage = () => {
  return (
    <div className="w-full">
      <div className="w-full relative">
        <img src={bg1} alt="" className="w-full" />
        <div className="absolute top-1/3 right-1/4 -translate-x-1/3 -translate-y-1/4 flex space-x-10">
          <div>
            <p className="text-primary font-semibold text-2xl">
              Hi {getUsername()},
            </p>
            <p className="text-primary font-semibold text-2xl capitalize">
              enjoy your favourite here
            </p>
          </div>
          <div className="w-16 h-1w-16 rounded-full">
            <img
              className="w-full h-full rounded-full object-cover
            "
              src={getAvatar()}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-defaultText text-center">
        <p className="">Your Order</p>
      </div>
    </div>
  );
};
