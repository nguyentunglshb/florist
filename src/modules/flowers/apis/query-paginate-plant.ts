import axiosClient from "@/libs/axios/axios-client";
import { useQuery } from "react-query";

const getPlants = (page: number) =>
  axiosClient.get("/products", {
    params: {
      page,
      perPage: 16,
    },
  });

export const useQueryGetPlantsPaginate = (page: number) => {
  return useQuery({
    queryFn: () => getPlants(page),
    queryKey: ["plants", page],
  });
};
