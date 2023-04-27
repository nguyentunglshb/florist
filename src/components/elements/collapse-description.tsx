import { IconPlus } from "@/assets";
import { useState } from "react";

export type CollapseDescriptionProps = {
  label: string;
  content: string;
  defaultCollapsed: boolean;
};

export const CollapseDescription = ({
  label,
  content,
  defaultCollapsed,
}: CollapseDescriptionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <div className="w-full border-solid border-b border-[#3D3B36] max-w-[450px] transition-all">
      <div className="flex w-full justify-between items-center">
        <p className="py-4">{label}</p>
        {!isCollapsed && (
          <div onClick={toggleCollapse}>
            <IconPlus />
          </div>
        )}
      </div>
      <div
        className={
          isCollapsed
            ? "h-auto transition-all"
            : "h-0 transition-all overflow-hidden"
        }
      >
        <p className="py-4 text-[#515151]">{content}</p>
      </div>
    </div>
  );
};
