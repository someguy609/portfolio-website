function TextInputLabel({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<label className={`peer-invalid:text-red-500 ${className}`}>
			{children}
		</label>
	);
}

export default TextInputLabel;
