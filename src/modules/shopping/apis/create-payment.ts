import axiosClient from "@/libs/axios/axios-client";
import { useMutation } from "react-query";

const createPaymentFn = (body: {
  amount: string;
  bankCode: string;
  language: string;
}) => axiosClient.post("/order/create-payment", body);

export const useMutationCreatePayment = () => {
  return useMutation({
    mutationFn: createPaymentFn,
    onSuccess: (data: any) => {
      window.open(data?.data?.redirectUrl, "_blank");
    },
  });
};
