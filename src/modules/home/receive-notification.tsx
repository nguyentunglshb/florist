import { bgReceiveNotification } from "@/assets";
import { ButtonFilled } from "@/components";

export const ReceiveNotification = () => {
	return (
		<div className="w-full relative py-14">
			<img src={bgReceiveNotification} alt="receive" />
			<div className="absolute w-full h-full top-0 left-0">
				<div className="w-full h-full max-w-screen-lg mx-auto flex items-center">
					<p className="text-white font-bold text-[32px] flex-1">
						Enter your email address for our mailing Promo or other interesting
						things
					</p>
					<div className="flex-1 flex space-x-6">
						<input
							className="flex-1 bg-tr backdrop-blur-sm bg-[rgba(217,217,217,0.03)] border border-white rounded-[5px] placeholder:text-white px-6"
							placeholder="Enter your email"
						/>
						<ButtonFilled>
							<p className="text-white opacity-80 font-bold px-11">Submit</p>
						</ButtonFilled>
					</div>
				</div>
			</div>
		</div>
	);
};
