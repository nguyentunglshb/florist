import {
	DetailedHTMLProps,
	ImgHTMLAttributes,
	useEffect,
	useRef,
	useState,
} from "react";

export const LazyImage = (
	props: DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>
) => {
	const [inView, setInView] = useState(false);
	const imageRef = useRef<HTMLImageElement>(null);

	const callback = (
		entries: IntersectionObserverEntry[],
		observer: IntersectionObserverInit
	) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setInView(true);
			}
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callback);

		if (imageRef?.current) {
			observer.observe(imageRef.current);
		}
		return () => {
			// observer.unobserve(imageRef.current);
			observer.disconnect();
		};
	}, []);

	return inView ? <img {...props} /> : <img ref={imageRef} />;
};
