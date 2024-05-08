import { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMoon, IoSunny } from 'react-icons/io5';
import Logo from '../assets/logo.svg';
// import Dropdown from './Dropdown';

function Navbar() {
	const [sections, setSections] = useState<Array<HTMLElement>>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { dark, setDark } = useContext(ThemeContext)!;

	const handleScroll = useCallback((sectionId: string) => {
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	const handleClick = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	useEffect(() => {
		setSections(Array.from(document.getElementsByTagName('section')));
	}, []);

	return (
		<nav className="fixed z-50 w-full bg-[#f2f3f3] bg-opacity-70 backdrop-blur-md dark:bg-black dark:bg-opacity-40">
			<div className="box-border flex justify-between max-w-6xl px-8 py-4 mx-auto sm:px-16">
				<img src={Logo} alt="logo" className="h-8" />
				<ul className="items-center hidden grid-flow-col gap-4 *:transition *:px-1 *:cursor-pointer sm:grid dark:text-white">
					{sections.map((val) => (
						<li
							className="block dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
							onClick={() => handleScroll(val.id)}
						>
							{val.id}
						</li>
					))}
					<li onClick={() => setDark((prev: boolean) => !prev)}>
						{dark ? <IoMoon /> : <IoSunny />}
					</li>
				</ul>
				<div className="relative block sm:hidden">
					<button onClick={handleClick}>
						<GiHamburgerMenu />
					</button>
					{isOpen && (
						<ul className="absolute right-0 p-2 border rounded bg-[#f2f3f3]">
							{sections.map((val) => (
								<li
									className="block dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
									onClick={() => handleScroll(val.id)}
								>
									{val.id}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
