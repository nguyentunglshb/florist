import { useState } from "react";

export const useForceRerender = () => {
  const [_, setCount] = useState(0);

  return {
    forceRerender: () => setCount((prev) => prev + 1),
  };
};
