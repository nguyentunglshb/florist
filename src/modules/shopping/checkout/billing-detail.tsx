export const BillingDetail = () => {
  return (
    <div className="w-full">
      <p className="font-semibold text-primary text-2xl">Billing detail</p>
      <div className="w-full py-4">
        <p className="font-medium text-defaultText pb-4">
          Full name <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="w-full border-b-2 focus-visible:outline-none border-solid border-grey.500 h-8"
        />
      </div>
      <div className="w-full py-4">
        <p className="font-medium text-defaultText pb-4">
          Company name (optional)
        </p>
        <input
          type="text"
          className="w-full border-b-2 focus-visible:outline-none border-solid border-grey.500 h-8"
        />
      </div>
      <div className="w-full py-4">
        <p className="font-medium text-defaultText pb-4">
          Phone <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="w-full border-b-2 focus-visible:outline-none border-solid border-grey.500 h-8"
        />
      </div>
      <div className="w-full py-4">
        <p className="font-medium text-defaultText pb-4">
          Address <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="w-full border-b-2 focus-visible:outline-none border-solid border-grey.500 h-8"
        />
      </div>
      <div className="w-full py-4">
        <p className="font-medium text-defaultText pb-4">
          Email address <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          className="w-full border-b-2 focus-visible:outline-none border-solid border-grey.500 h-8"
        />
      </div>
      <div className="w-full py-4">
        <p className="font-medium text-defaultText pb-4">
          Order note (optional)
        </p>
        <input
          type="text"
          className="w-full border-b-2 focus-visible:outline-none border-solid border-grey.500 h-8"
        />
      </div>
    </div>
  );
};
