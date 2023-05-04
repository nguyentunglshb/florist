import { flower } from "@/assets";

export const PlantInformation = () => {
	return (
		<div className="w-full">
			<img src={flower} className="w-full" alt="" />
			<p className="text-xl font-semibold text-primaryDark py-4">
				Echinocatus Grusonii
			</p>
			<p className="text-defaultText opacity-60 py-2">
				This minicatus type Echinocatus grusonii looks like a barrel
			</p>
		</div>
	);
};
