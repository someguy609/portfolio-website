import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import TextInputLabel from '../components/TextInputLabel';
import TextInput from '../components/TextInput';
import { FaWhatsapp, FaPython } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { IoDocumentText, IoLogoJavascript } from 'react-icons/io5';
import { DiHtml5, DiCss3, DiReact } from 'react-icons/di';
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si';
import Portrait from '../assets/portrait.png';
import CV from '../assets/cv.pdf';

function Portfolio() {
	const titles = ['software engineer', 'undergrad', 'dumbass'];
	const [index, setIndex] = useState<number>(0);
	const [changing, setChanging] = useState<boolean>(false);

	useEffect(() => {
		if (!changing) return;
		const timeout = setTimeout(() => {
			setIndex((prev) => (prev + 1) % titles.length);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [changing]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setChanging((prev) => !prev);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [changing]);

	return (
		<>
			<Navbar />
			<Section
				id="home"
				className="flex items-center w-full min-h-screen"
			>
				<div className="flex flex-col items-center gap-4 sm:justify-between sm:flex-row">
					<div className="sm:w-1/2">
						<h1 className="text-5xl font-bold sm:text-6xl">
							Hi, I'm
							<br />{' '}
							<span className="text-[#064ACB] dark:text-[#40A2E3]">
								Daniel Adhitthana
							</span>
						</h1>
						<p className="mt-6 text-xs sm:text-base">
							I am a highly motivated student filled with
							determination and curiosity about the world of
							technology. I am always eager to learn new things
							and take on new challenges.
						</p>
						<a
							href={CV}
							download="Daniel Adhitthana"
							className="inline-block mt-4 focus:outline-none"
						>
							<button className="flex items-center px-4 py-2 text-white bg-black rounded-full dark:bg-[#064ACB] sm:text-base text-sm">
								Download CV <IoDocumentText className="ml-2" />
							</button>
						</a>
					</div>
					<div className="mt-4 sm:mt-0">
						<div className="absolute lg:w-80 md:w-40 sm:w-36 w-32 bg-gradient-to-tr from-[#064ACB] to-[#92C7CF] aspect-square -z-10" />
						<div className="mt-2 ml-2 sm:mt-5 sm:ml-5">
							{/* <div className="bg-[#7743DB] inline-block h-7"> */}
							<p
								className={
									' bg-[#7743DB] inline-block px-1 pt-1 transition text-white sm:text-base text-sm h-7'
								}
							>
								{titles[index]}
							</p>
							{/* </div> */}
							<img
								src={Portrait}
								alt="picture"
								className="border-4 border-[#7743DB] block lg:max-w-96 md:max-w-48 max-w-36"
							/>
						</div>
					</div>
				</div>
			</Section>
			<Section id="skills">
				<h1 className="text-4xl font-bold">Skills</h1>
				<div className="grid sm:grid-cols-8 grid-cols-4 gap-4 mt-4 *:h-full *:w-full">
					<DiHtml5 />
					<DiCss3 />
					<IoLogoJavascript />
					<SiTypescript />
					<DiReact />
					<SiExpress />
					<SiMongodb />
					<FaGolang />
					<FaPython />
				</div>
			</Section>
			<Section id="projects">
				<h1 className="text-4xl font-bold">Projects</h1>
				<p>none :(</p>
				<canvas></canvas>
			</Section>
			<Section
				id="contacts"
				className="py-4 text-white bg-neutral-800 dark:bg-neutral-800"
			>
				<div className="flex flex-col items-center sm:justify-between sm:flex-row">
					<div className="sm:w-1/2">
						<p>Don't be afraid, contact me!</p>
						<form>
							<div className="mt-4">
								{/* <p>Email</p> */}
								{/* <input
									type="email"
									className="w-full bg-transparent border-b focus:outline-none"
								/> */}
								{/* <label htmlFor="email">yo</label> */}
								<TextInputLabel>Email</TextInputLabel>
								<TextInput type="email" />
							</div>
							<div className="mt-4">
								<p>Message</p>
								<textarea className="w-full bg-transparent border-b focus:outline-none" />
							</div>
							<button className="w-full p-1 mt-4 bg-black">
								Submit
							</button>
						</form>
					</div>
					<div className="my-4 sm:mt-0">
						<ul className="*:flex *:gap-4">
							<li>
								<FaWhatsapp className="text-2xl" />
								<p>+6281281832612</p>
							</li>
							<li></li>
						</ul>
					</div>
				</div>
			</Section>
		</>
	);
}

export default Portfolio;
