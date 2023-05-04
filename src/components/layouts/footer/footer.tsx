import { IconFern, IconMonstera } from "@/assets";
import { Social } from "./social";

export const Footer = () => {
	return (
		<div className="w-full bg-primaryDark relative">
			<Social />
			<div className="opacity-20 absolute left-4 bottom-0">
				<IconMonstera />
			</div>
			<div className="opacity-20 absolute right-4 bottom-0">
				<IconFern />
			</div>
			<div className="absolute bottom-0 left-0 right-0 bg-[#000]">
				<p className="text-[#fff] text-center py-2 font-semibold opacity-80">
					Copyright © 2023 Lush. All rights reserved.
				</p>
			</div>
		</div>
	);
};
