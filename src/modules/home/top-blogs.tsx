import { IconArrowRight, IconCalendar, blog } from "@/assets";

export const TopBlogs = () => {
	return (
		<div className="w-full pt-16 pb-32">
			<p className="text-center capitalize text-primaryDark tracking-wider font-black text-4xl pb-9">
				Interesting blog to read
			</p>
			<div className="w-full max-w-screen-lg mx-auto flex space-x-12 items-stretch">
				{blogData.map((b, index) => {
					return (
						<div key={index}>
							<BlogItem {...b} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

type Blog = {
	imageUrl: string;
	title: string;
	content: string;
	createdAt: string;
};

const blogData: Blog[] = [
	{
		imageUrl: blog,
		title: "More productive with an atmosphere of greenery",
		content:
			"An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
		createdAt: "January 20, 2023",
	},
	{
		imageUrl: blog,
		title: "The benefits of plants in your room",
		content:
			"Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
		createdAt: "January 10, 2023",
	},
	{
		imageUrl: blog,
		title: "Hobbyist plants in the house",
		content:
			"Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
		createdAt: "January 15, 2023",
	},
];

const BlogItem = (props: Blog) => {
	const { imageUrl, title, content, createdAt } = props;

	return (
		<div>
			<div className="w-full">
				<img src={imageUrl} className="w-full aspect-square rounded-t-lg" />
				<p className="text-primaryDark text-xl font-black">{title}</p>
			</div>
			<p className="text-defaultText font-medium text-base opacity-80 pt-1 pb-3">
				{content}
			</p>
			<div className="w-full flex justify-between items-center">
				<div className="flex items-center">
					<IconCalendar />
					<p className="pl-1 text-defaultText font-medium text-base opacity-70">
						{createdAt}
					</p>
				</div>
				<div className="flex items-center">
					<p className="text-primaryDark font-black pr-1.5">Read more</p>
					<IconArrowRight />
				</div>
			</div>
		</div>
	);
};
