import { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMoon, IoSunny } from 'react-icons/io5';
import Logo from '../assets/logo.svg';

function Navbar() {
	const [sections, setSections] = useState<Array<HTMLElement>>([]);
	const { dark, setDark } = useContext(ThemeContext)!;

	const handleScroll = useCallback((sectionId: string) => {
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	useEffect(() => {
		setSections(Array.from(document.getElementsByTagName('section')));
	}, []);

	return (
		<nav className="fixed z-10 w-full bg-[#f2f3f3] backdrop-blur-md dark:bg-black">
			<div className="box-border flex justify-between max-w-6xl p-4 mx-auto">
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
				<div className="block sm:hidden">
					<GiHamburgerMenu className="group" />
					<ul className="hidden group-focus:block">
						<li>something</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
