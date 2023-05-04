import { OrderPlant } from "./order-plant";
import { PlantInformation } from "./plant-information";

export const FlowerDetailPage = () => {
	return (
		<div className="w-full max-w-screen-lg mx-auto flex pt-28">
			<div className="w-1/2">
				<PlantInformation />
			</div>
			<div className="w-1/2">
				<OrderPlant />
			</div>
		</div>
	);
};
