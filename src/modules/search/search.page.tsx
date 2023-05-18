import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ReactLoading from "react-loading";

import { IconSearch, bgSearch } from "@/assets";
import { NavigationPath } from "@/models";
import { useMutationUploadImage, useQuerySearch } from "./apis";
import { useDebounce } from "@/hooks";
import { DropUpload, TinyFlowerCard } from "@/components";

const tagNames = ["catus", "rosered", "roseblue"];

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debounceSearchTerm = useDebounce(searchTerm);

  const mutationUploadImage = useMutationUploadImage();

  const { data, isLoading } = useQuerySearch(debounceSearchTerm);

  const onDrop = (files: File[]) => {
    const fd = new FormData();
    for (const file of files) {
      fd.append("file", file);
    }
    mutationUploadImage.mutate(fd);
  };

  return (
    <div className="w-full">
      <div className="w-full relative">
        <img src={bgSearch} className="w-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-xl w-full max-w-screen-md shadow-md">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full p-4 rounded-3xl outline outline-1 outline-grey.500 focus-visible:outline-primary"
              placeholder="Search plant"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <IconSearch />
            </div>
          </div>
          <DropUpload onDrop={onDrop} multiple={false} preview />
          <p className="text-primaryDark font-semibold text-lg pt-4">
            Top search:{" "}
          </p>
          <div className="w-full flex flex-wrap py-3 gap-4">
            {tagNames.map((tag) => {
              return (
                <Link
                  to={NavigationPath.SEARCH + `/${tag}`}
                  key={tag}
                  className="bg-primary rounded-full py-2 px-4 font-medium text-white text-base"
                >
                  {tag}
                </Link>
              );
            })}
          </div>
          <div className="w-full flex flex-col space-y-2 items-center min-h-[100px]">
            {isLoading && <ReactLoading type="bars" color="#337A5B" />}
            {data?.data?.map(
              ({ _id, headImageUrl, name, originPrice, currentPrice }) => (
                <TinyFlowerCard
                  key={_id}
                  _id={_id}
                  headImageUrl={headImageUrl}
                  name={name}
                  originPrice={originPrice}
                  currentPrice={currentPrice}
                />
              )
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
