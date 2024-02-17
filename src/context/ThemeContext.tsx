import { createContext, useState } from 'react';

export type ThemeContextType = {
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeProvider({ children }: { children?: React.ReactNode }) {
	const [dark, setDark] = useState<boolean>(false);
	return (
		<ThemeContext.Provider value={{ dark, setDark }}>
			<div className={dark ? 'dark' : ''}>{children}</div>
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
