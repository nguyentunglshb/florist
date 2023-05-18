import axiosClient from "@/libs/axios/axios-client";
import { useMutation } from "react-query";

const uploadImageFn = (body: FormData) =>
  axiosClient.post("/other/upload", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const useMutationUploadImage = () => {
  return useMutation({
    mutationFn: uploadImageFn,
    mutationKey: "upload-image",
  });
};
