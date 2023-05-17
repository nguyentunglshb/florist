import { useQuery } from "react-query";

import axiosClient from "@/libs/axios/axios-client";
import type { HttpResponse, Cart } from "@/models";

const getCartFn = (): Promise<HttpResponse<Cart>> => axiosClient.get("/cart");

export const useQueryGetCart = () => {
  return useQuery({
    queryFn: getCartFn,
  });
};
