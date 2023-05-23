import { bgAuth } from "@/assets";
import {
  ButtonFilled,
  ButtonWhiteDefault,
  Icon,
  IconsName,
} from "@/components";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutationLogin } from "./apis";

export const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const mutationLogin = useMutationLogin();

  const { handleSubmit, control } = useForm<{
    username: string;
    password: string;
  }>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onLogin = (data: { username: string; password: string }) =>
    mutationLogin.mutate(data);

  const togglePassword = () => setIsShowPassword((prev) => !prev);

  return (
    <div className="w-full">
      <div className="w-full relative">
        <img src={bgAuth} className="w-full" />
        <form
          onSubmit={handleSubmit(onLogin)}
          className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl w-full max-w-xl mx-auto"
        >
          <p className="font-black uppercase text-4xl text-center text-primaryDark">
            Login
          </p>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <p className="text-defaultText py-2 opacity-60">Email</p>
                <input
                  type="text"
                  className="w-full p-4 border-b border-solid border-grey.500 mb-4 focus-visible:outline-primary"
                  placeholder="Your email"
                  {...field}
                />
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <p className="text-defaultText py-2 opacity-60">Password</p>
                <div className="w-full relative">
                  <input
                    type={isShowPassword ? "text" : "password"}
                    className="w-full p-4 border-b border-solid border-grey.500 focus-visible:outline-primary"
                    placeholder="Password"
                    autoComplete="current-password"
                    {...field}
                  />
                  <div
                    onClick={togglePassword}
                    className="w-fit absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <Icon
                      as={
                        isShowPassword
                          ? IconsName.ICON_EYE_ON
                          : IconsName.ICON_EYE_OFF
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          />
          <div className="py-4">
            <ButtonFilled className="w-full" type="submit">
              <p className="w-full text-white font-semibold">Login</p>
            </ButtonFilled>
            <ButtonWhiteDefault className="w-full">
              <p className="w-full text-primaryDark font-semibold">Signup</p>
            </ButtonWhiteDefault>
          </div>
        </form>
      </div>
    </div>
  );
};
