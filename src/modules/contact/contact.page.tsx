import {
	bgReceiveNotification,
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
} from "@/assets";

export const ContactPage = () => {
	return (
		<div className="w-full">
			<div className="w-full relative ">
				<img src={bgReceiveNotification} className="w-full" alt="" />
				<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[64px] leading-[77px]">
					Contact
				</p>
			</div>
			<div className="w-full max-w-screen-lg mx-auto py-16">
				<p className="text-5xl text-primary pb-6">
					Contact <span className="italic">Details</span>
				</p>
				<div className="py-4">
					<p className="text-lg text-primaryDark">Address</p>
					<p className="text-base text-defaultText opacity-60">
						8331 Indian Spring Street Ames, IA 30010
					</p>
				</div>
				<div className="py-4">
					<p className="text-lg text-primaryDark">Phone</p>
					<p className="text-base text-defaultText opacity-60">037-670-3212</p>
				</div>
				<div className="py-4">
					<p className="text-lg text-primaryDark">Email</p>
					<p className="text-base text-defaultText opacity-60">
						support@lush.com
					</p>
				</div>
				<div className="py-4">
					<p className="text-lg text-primaryDark">Opening time</p>
					<p className="text-base text-defaultText opacity-60">
						8:00Am – 10:00Pm, Sunday Close
					</p>
				</div>
			</div>
			<div className="w-full flex space-x-2 pb-16">
				<img src={gallery1} className="w-1/3" />
				<div className="grid grid-cols-2 w-2/3 gap-2">
					<img src={gallery2} />
					<img src={gallery3} />
					<img src={gallery4} />
					<img src={gallery5} />
				</div>
			</div>
		</div>
	);
};
