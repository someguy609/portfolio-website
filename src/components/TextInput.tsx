import { useRef, forwardRef } from 'react';

interface ITextInputProps {
	type?: string;
	className?: string;
}

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
	(props, ref) => {
		const inputRef = ref || useRef<HTMLInputElement>(null);

		return (
			<input
				type={props.type || 'text'}
				className={
					'w-full bg-transparent border-b focus:outline-none invalid:border-red-500 invalid:text-red-500 peer ' +
					props.className
				}
				ref={inputRef}
			/>
		);
	}
);

export default TextInput;
