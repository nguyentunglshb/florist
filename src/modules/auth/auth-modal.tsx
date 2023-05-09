import { Modal } from "@/components";
import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

type AuthModalProps = {
  trigger: React.ReactElement;
};

export const AuthModal = (props: AuthModalProps) => {
  const { trigger } = props;

  const [isLogin, setIsLogin] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDialog = () => setIsLogin((prev) => !prev);

  return (
    <Modal isOpen={isModalOpen} toggleOpen={setIsModalOpen} trigger={trigger}>
      <div className="w-full max-w-lg p-6 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {isLogin ? (
          <LoginForm toggleDialog={toggleDialog} />
        ) : (
          <RegisterForm toggleDialog={toggleDialog} />
        )}
      </div>
    </Modal>
  );
};
