import { ChangeEvent } from "react";

export const InputNumber = ({
  count = 0,
  setCount,
}: {
  count: number;
  setCount: (value: string | number) => void;
}) => {
  const onInputNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (Number(value) <= 0) setCount(0);
    else setCount(Number(value));
  };

  return (
    <div className="flex h-10 w-fit border-2 border-solid border-primary">
      <button
        className="h-full aspect-square text-primary font-black"
        onClick={() => setCount(count <= 0 ? 0 : count - 1)}
      >
        -
      </button>
      <input
        type="number"
        className="text-center text-primary appearance-none focus-visible:outline-none font-black"
        value={count}
        onChange={onInputNumberChange}
      />
      <button
        className="h-full aspect-square text-primary font-black"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};
