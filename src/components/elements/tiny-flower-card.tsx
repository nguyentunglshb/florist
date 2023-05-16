import { Link } from "react-router-dom";
import { FlowerCardProps } from "./flower-card";
import { NavigationPath } from "@/models";

export const TinyFlowerCard = (props: FlowerCardProps & { _id: string }) => {
  const {
    headImageUrl,
    isLiked = false,
    name,
    originPrice,
    currentPrice,
    _id,
  } = props;

  return (
    <Link
      to={NavigationPath.PLANTERS_DETAIL.replace(":_id", _id)}
      className="w-full py-2 pl-2 pr-4 rounded-xl shadow-present flex transition-all hover:shadow-hover"
    >
      <img
        src={headImageUrl}
        className="w-10 aspect-square object-cover"
        alt=""
      />
      <div className="flex-1 pl-4 flex flex-col justify-between">
        <p className="t-ellipsis-1 text-primaryDark font-bold">{name}</p>
        <div className="flex space-x-2">
          <p className="line-through text-defaultText opacity-50 font-semibold">
            ${originPrice}
          </p>
          <p className="font-semibold text-primary">${currentPrice}</p>
        </div>
      </div>
    </Link>
  );
};
