import axiosClient from "@/libs/axios/axios-client";
import { useMutation } from "react-query";

const registerRequest = (body: { username: string; password: string }) => {
  return axiosClient.post("/users", body);
};

export const useMutationRegister = () => {
  return useMutation({
    mutationFn: registerRequest,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
