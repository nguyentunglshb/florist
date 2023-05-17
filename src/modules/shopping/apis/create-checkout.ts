import axiosClient from "@/libs/axios/axios-client";
import { useMutation } from "react-query";

const createCheckoutFn = (body: {
  fullName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}) => axiosClient.post("/order", body);

export const useMutationCheckout = () => {
  return useMutation({
    mutationFn: createCheckoutFn,
  });
};
