import { IconSearch, bgSearch } from "@/assets";
import { NavigationPath } from "@/models";
import { Link, Outlet } from "react-router-dom";

const tagNames = ["catus", "rosered", "roseblue"];

export const SearchPage = () => {
  return (
    <div className="w-full">
      <div className="w-full relative">
        <img src={bgSearch} alt="" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-xl w-full max-w-screen-md shadow-md">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full p-4 rounded-3xl outline outline-1 outline-grey.500 focus-visible:outline-primary"
              placeholder="Search plant"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <IconSearch />
            </div>
          </div>
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
        </div>
      </div>
      <Outlet />
    </div>
  );
};
