import axiosClient from "@/libs/axios/axios-client";
import { useMutation } from "react-query";

type Item = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
};

const addToCartFn = (body: Item) => axiosClient.post("/cart", body);

export const useMutationAddToCart = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({
    mutationFn: addToCartFn,
    onSuccess: onSuccess,
  });
};
