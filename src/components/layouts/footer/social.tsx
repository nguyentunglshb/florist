import { IconFacebook, IconInsta, IconTwitter } from "@/assets";

export const Social = () => {
	return (
		<div className="w-full h-[370px] flex flex-col items-center justify-center">
			<p className="text-white text-3xl text-center font-black">
				Feel free to contact us
			</p>
			<div className="flex space-x-20 py-14">
				<IconInsta />
				<IconFacebook />
				<IconTwitter />
			</div>
			<div className="flex space-x-12 pb-5">
				<p className="text-white opacity-80 font-semibold">Home</p>
				<p className="text-white opacity-80 font-semibold">About us</p>
				<p className="text-white opacity-80 font-semibold">Plants</p>
				<p className="text-white opacity-80 font-semibold">Delivery</p>
				<p className="text-white opacity-80 font-semibold">Blog</p>
				<p className="text-white opacity-80 font-semibold">Contact us</p>
			</div>
		</div>
	);
};
