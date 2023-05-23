import axiosClient from "@/libs/axios/axios-client";
import { useQuery } from "react-query";

const getOrdersFn = () => axiosClient.get("/order");

export const useQueryGetOrders = () => {
  return useQuery({
    queryFn: getOrdersFn,
  });
};
