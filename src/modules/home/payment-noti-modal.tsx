import { Link, useSearchParams } from "react-router-dom";

import { ButtonDefault, Modal } from "@/components";
import { useState } from "react";
import { NavigationPath, PaymenStatus } from "@/models";
import { IconOrderFail, IconOrderSuccess } from "@/assets";

export const PaymentNotiModal = () => {
  const [searchParams] = useSearchParams();

  const responseCode = searchParams.get("vnp_ResponseCode");

  const [isModalOpen, setIsModalOpen] = useState(!!responseCode);

  const toggleOpen = (open: boolean) => setIsModalOpen(open);

  return (
    <Modal
      isOpen={isModalOpen}
      toggleOpen={toggleOpen}
      trigger={<></>}
      className="p-8 rounded-xl absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {responseCode === PaymenStatus.SUCCESS ? (
        <div>
          <div className="flex items-center">
            <IconOrderSuccess />
            <p className="pl-4 text-primary font-bold">
              Purchased Successfully
            </p>
          </div>
          <p className="text-defaultText py-4 font-semibold">
            We will prepare to your order soon
          </p>
          <div className="flex justify-between items-center space-x-8">
            <Link
              to={NavigationPath.ORDER_TRACKING}
              className="text-lg font-bold text-primary underline"
            >
              Track your order
            </Link>
            <ButtonDefault
              className="flex-1"
              onClick={() => setIsModalOpen(false)}
            >
              <p className="p-2 w-max">Keep shopping</p>
            </ButtonDefault>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center">
            <IconOrderFail />
            <p className="pl-4 text-red-600 font-bold">Something when wrong</p>
          </div>
          <p className="text-defaultText py-4 font-semibold">
            Please check your order and try again later
          </p>
        </div>
      )}
    </Modal>
  );
};
