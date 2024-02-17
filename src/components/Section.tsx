import { useRef, forwardRef } from 'react';

// function Section({
// 	id,
// 	children,
// 	className,
// }: {
// 	id: string;
// 	children?: React.ReactNode;
// 	className?: string;
// }) {
// 	return (
// 		<section id={id} className={className}>
// 			<div className="w-full max-w-6xl p-4 mx-auto">{children}</div>
// 		</section>
// 	);
// }

interface ISectionProps {
	id: string;
	children?: React.ReactNode;
	className?: string;
}

const Section = forwardRef<HTMLDivElement, ISectionProps>((props, ref) => {
	const sectionRef = ref || useRef(null);
	return (
		<section
			id={props.id}
			className={'dark:bg-black dark:text-white ' + props.className}
			ref={sectionRef}
		>
			<div className="w-full max-w-sm p-4 mx-auto lg:max-w-6xl sm:max-w-3xl">
				{props.children}
			</div>
		</section>
	);
});

export default Section;
