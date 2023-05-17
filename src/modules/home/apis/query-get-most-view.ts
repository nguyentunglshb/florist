import axiosClient from "@/libs/axios/axios-client";
import { HttpResponse, Plant } from "@/models";
import { useQuery } from "react-query";

const mostViewFn = (): Promise<HttpResponse<Plant[]>> =>
  axiosClient.get("/products/most?type=views");

export const useQueryGetMostView = () => {
  return useQuery({
    queryFn: mostViewFn,
  });
};
