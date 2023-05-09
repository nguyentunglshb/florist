import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { IconLogo } from "@/assets/icons/logo";
import { HeaderMenu } from "./header-menu";
import { NavigationPath } from "@/models";
// import { HeaderPersonal } from "./header-personal";

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const pos = window.scrollY;
    setScrollTop(pos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full fixed z-10 transition-all ${
        scrollTop >= (headerRef?.current?.clientHeight || 120)
          ? "bg-primary "
          : ""
      }`}
      ref={headerRef}
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-9">
        {/* logo */}
        <Link to={NavigationPath.HOME}>
          <IconLogo />
        </Link>
        <HeaderMenu />
        {/* <HeaderPersonal /> */}
      </div>
    </div>
  );
};
