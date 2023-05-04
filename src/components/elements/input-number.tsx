import { ChangeEvent, useState } from "react";

export const InputNumber = () => {
	const [count, setCount] = useState(0);

	const onInputNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (Number(value) <= 0) setCount(0);
		else setCount(Number(value));
	};

	return (
		<div className="flex h-10 w-fit">
			<button
				className="h-full aspect-square text-white bg-primary"
				onClick={() => setCount((prev) => (prev <= 0 ? 0 : prev - 1))}
			>
				-
			</button>
			<input
				type="number"
				className=" text-center text-primary appearance-none focus-visible:outline-none"
				value={count}
				onChange={onInputNumberChange}
			/>
			<button
				className="h-full aspect-square text-white bg-primary"
				onClick={() => setCount((prev) => prev + 1)}
			>
				+
			</button>
		</div>
	);
};
