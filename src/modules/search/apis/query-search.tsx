import { useQuery } from "react-query";

import axiosClient from "@/libs/axios/axios-client";
import { HttpResponse, Plant } from "@/models";

const searchFn = (searchTerm: string): Promise<HttpResponse<Plant[]>> | null =>
  searchTerm ? axiosClient.get("/products/search/" + searchTerm) : null;

export const useQuerySearch = (searchTerm: string) => {
  return useQuery({
    queryFn: () => searchFn(searchTerm),
    queryKey: ["search", searchTerm],
  });
};
