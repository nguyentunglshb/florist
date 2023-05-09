import { Controller, useForm } from "react-hook-form";
import { ButtonDefault, ButtonFilled, Icon, IconsName } from "@/components";
import { useState } from "react";
import { useMutationRegister } from ".";

export const RegisterForm = ({
  toggleDialog,
}: {
  toggleDialog: () => void;
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const mutationRegister = useMutationRegister();

  const { handleSubmit, control } = useForm<{
    username: string;
    password: string;
  }>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onRegister = (data: { username: string; password: string }) =>
    mutationRegister.mutate(data);

  const togglePassword = () => setIsShowPassword((prev) => !prev);

  return (
    <form
      onSubmit={handleSubmit(onRegister)}
      className="block w-full border border-solid border-grey.500 p-4 "
    >
      <p className="text-primaryDark text-4xl font-black capitalize text-center pb-9 tracking-wider">
        Register
      </p>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <input
            type="text"
            className="w-full p-4 border border-solid border-grey.500 mb-4 focus-visible:outline-primary"
            placeholder="Your email"
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <div className="w-full relative">
            <input
              type={isShowPassword ? "text" : "password"}
              className="w-full p-4 border border-solid border-grey.500 focus-visible:outline-primary"
              placeholder="Password"
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
        )}
      />
      <ButtonFilled type="submit" className="w-full mb-4 mt-8">
        <p className="w-full text-center text-white py-2">REGISTER</p>
      </ButtonFilled>
      <ButtonDefault className="w-full " onClick={toggleDialog}>
        <p className="py-2">ALREADY HAS AN ACCOUNT</p>
      </ButtonDefault>
    </form>
  );
};
