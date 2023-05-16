import { useParams } from "react-router-dom";

import { OrderPlant } from "./order-plant";
import { PlantInformation } from "./plant-information";
import { useQueryGetPlantDetail } from ".";

export const FlowerDetailPage = () => {
  const { id } = useParams();

  const { data } = useQueryGetPlantDetail(id as string);

  return (
    <div className="w-full max-w-screen-lg mx-auto pt-28 ">
      <div className="flex space-x-8">
        <div className="w-1/2">
          <PlantInformation
            headImageUrl={data?.data?.headImageUrl || ""}
            imageUrls={data?.data?.imageUrls || []}
          />
        </div>
        <div className="w-1/2">
          <OrderPlant
            name={data?.data?.name || ""}
            description={data?.data?.description || ""}
            currentPrice={data?.data?.currentPrice || 0}
            originPrice={data?.data?.originPrice || 0}
          />
        </div>
      </div>
      <div className="py-16">
        <p className="text-2xl font-semibold text-primaryDark py-4">
          {data?.data?.name}
        </p>
        <p className="text-defaultText opacity-60 text-base py-2">
          {data?.data?.content}
        </p>
      </div>
    </div>
  );
};
