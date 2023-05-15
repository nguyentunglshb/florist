import {
	about1,
	about2,
	about3,
	about4,
	bgReceiveNotification,
} from "@/assets";

export const AboutUsPage = () => {
	return (
		<div className="w-full">
			<div className="w-full relative">
				<img src={bgReceiveNotification} className="w-full" alt="" />
				<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-[64px] leading-[77px]">
					The story of Lush
				</p>
			</div>
			<div className="w-full max-w-screen-lg mx-auto pt-16">
				<img src={about1} alt="" />
				<div className="pt-16 text-center">
					<p className="text-base font-medium uppercase text-primaryDark">
						LUSH PHOTOSYNTHESIS STORIES
					</p>
					<p className="text-5xl text-primary pt-6">
						We connect buyers and sellers with
					</p>
					<p className="text-5xl text-primary pb-6">
						suitable, eco-friendly <span className="italic">products</span>
					</p>
					<p className="text-sm text-defaultText">
						Nothing adds more beauty and comfort to our homes and offices than
						the lush flowers and foliage of indoor plants. Bedrooms, bathrooms,
						kitchens, cubicles… There really isn’t a space a houseplant can’t
						enliven. Just add light and water, and you’ve got a growing indoor
						oasis. Bringing plants into your home is aesthetically pleasing and
						– amazingly – plants can offer strong health benefits as
						well!Nothing adds more beauty and comfort to our homes and offices
						than the lush flowers and foliage of indoor plants. Bedrooms,
						bathrooms, kitchens, cubicles… There really isn’t a space a
						houseplant can’t enliven. Just add light and water, and you’ve got a
						growing indoor oasis. Bringing plants into your home is
						aesthetically pleasing and – amazingly – plants can offer strong
						health benefits as well!
					</p>
				</div>
			</div>
			<div className="w-full flex gap-2 py-16">
				{gallery.map((image, index) => {
					return (
						<div key={index} className="flex-1">
							<img src={image} className="w-full" alt="" />
						</div>
					);
				})}
			</div>
			{/* <div className="w-full py-24 bg-[f8f6ef]">
				<div className="w-full max-w-screen-lg mx-auto">
					<p className="text-5xl text-primary pb-6 text-center">
						Here's How It <span className="italic">works</span>
					</p>
				</div>
			</div> */}
		</div>
	);
};

const gallery = [about2, about3, about4] as const;
