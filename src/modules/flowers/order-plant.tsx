import { ButtonDefault, ButtonFilled, InputNumber } from "@/components";

export const OrderPlant = () => {
	return (
		<div className="w-full">
			<p className="text-3xl font-semibold text-defaultText line-through opacity-60">
				$ 10
			</p>
			<p className="text-3xl font-semibold text-primary">$ 8</p>
			<div className="w-full">
				<div className="flex items-center space-x-8 py-8">
					<InputNumber />
					<ButtonDefault className="h-full">
						<p>Add to Cart</p>
					</ButtonDefault>
				</div>
				<ButtonFilled className="w-full">
					<p className="text-white w-full text-center">Buy Now</p>
				</ButtonFilled>
			</div>
		</div>
	);
};
