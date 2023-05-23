import { useMutation } from "react-query";

import axiosClient from "@/libs/axios/axios-client";
import { setLocalStorage } from "@/helpers";
import { useNavigate } from "react-router-dom";
import { NavigationPath } from "@/models";

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

export const useMutationLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginRequest,
    mutationKey: "login",
    onSuccess: (data) => {
      setLocalStorage("access_token", data.access_token);
      setLocalStorage("avatarUrl", data.user.avatarUrl);
      setLocalStorage("username", data.user.username);
      navigate(NavigationPath.HOME);
      location.reload();
      // onSuccess();
    },
  });
};
