import { useQuery } from "react-query";

import axiosClient from "@/libs/axios/axios-client";

import type { HttpResponse, Plant } from "@/models";

const getPlantDetailFn = (id: string): Promise<HttpResponse<Plant>> =>
  axiosClient.get("/products/" + id);

export const useQueryGetPlantDetail = (id: string) => {
  return useQuery({
    queryFn: () => getPlantDetailFn(id),
  });
};
