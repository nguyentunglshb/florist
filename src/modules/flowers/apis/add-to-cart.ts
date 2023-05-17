import { useMutation } from "react-query";

import axiosClient from "@/libs/axios/axios-client";

type Item = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  headImageUrl: string;
};

const addToCartFn = (body: Item) => axiosClient.post("/cart", body);

export const useMutationAddToCart = () => {
  return useMutation({
    mutationFn: addToCartFn,
  });
};
