import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { router } from "@/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
