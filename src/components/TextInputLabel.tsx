function TextInputLabel({ children }: { children?: React.ReactNode }) {
	return <label className="peer-invalid:text-red-500">{children}</label>;
}

export default TextInputLabel;
