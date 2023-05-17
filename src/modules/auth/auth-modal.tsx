import { Modal } from "@/components";
import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

type AuthModalProps = {
  trigger: React.ReactElement;
  forceRerender: () => void;
};

export const AuthModal = (props: AuthModalProps) => {
  const { trigger, forceRerender } = props;

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDialog = () => setIsLoginForm((prev) => !prev);

  return (
    <Modal
      isOpen={isModalOpen}
      toggleOpen={(data) => {
        setIsModalOpen(data);
      }}
      trigger={trigger}
    >
      <div className="w-full max-w-lg p-6 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {isLoginForm ? (
          <LoginForm
            toggleDialog={toggleDialog}
            onSuccess={() => {
              setIsModalOpen(false);
              forceRerender();
            }}
          />
        ) : (
          <RegisterForm
            toggleDialog={toggleDialog}
            onSuccess={() => {
              setIsModalOpen(false);
              forceRerender();
            }}
          />
        )}
      </div>
    </Modal>
  );
};
