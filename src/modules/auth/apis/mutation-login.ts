import { useMutation } from "react-query";

import axiosClient from "@/libs/axios/axios-client";
import { setLocalStorage } from "@/helpers";

type Response = {
  access_token: string;
  user: {
    avatarUrl?: string;
    username?: string;
  };
};

type LoginBody = {
  username: string;
  password: string;
};

const loginRequest = (body: LoginBody): Promise<Response> =>
  axiosClient.post("/auth/login", body);

export const useMutationLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: loginRequest,
    mutationKey: "login",
    onSuccess: (data) => {
      setLocalStorage("access_token", data.access_token);
      setLocalStorage("avatarUrl", data.user.avatarUrl);
      setLocalStorage("username", data.user.username);
      onSuccess();
    },
  });
};
