import { bgPlants } from "@/assets";
import { useQueryGetPlantsPaginate } from "./apis/query-paginate-plant";

export const FlowersPage = () => {
  const { data } = useQueryGetPlantsPaginate(1);

  console.log(data);

  return (
    <div className="w-full">
      <div className="w-full relative">
        <img src={bgPlants} alt="" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f8f8f8] font-bold text-[64px] leading-[77px]">
          Plants
        </p>
      </div>
      <div className="w-full max-w-screen-lg mx-auto py-16"></div>
    </div>
  );
};
