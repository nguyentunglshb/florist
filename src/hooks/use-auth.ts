import { useEffect, useState } from "react";

import { getStoredAuth } from "@/helpers";

export const useAuth = () => {
  const ACCESS_TOKEN = getStoredAuth();

  const [isAuthenticated, setIsAuthenticated] = useState(!!ACCESS_TOKEN);

  useEffect(() => {
    if (ACCESS_TOKEN) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [ACCESS_TOKEN]);

  return { isAuthenticated };
};
