import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { FaWhatsapp, FaPython, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoDocumentText, IoLogoJavascript } from 'react-icons/io5';
import { DiHtml5, DiCss3, DiReact } from 'react-icons/di';
import Portrait from '../assets/portrait.png';
import CV from '../assets/cv.pdf';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { SiC, SiCplusplus, SiTailwindcss } from 'react-icons/si';

function Portfolio() {
	const titles = ['software engineer', 'undergrad', 'ai enthusiast'];
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
				<div className="flex items-center gap-4 text-center sm:justify-between md:flex-row md:text-left">
					<div className="md:w-1/2">
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
							<button className="flex items-center px-4 py-2 text-white bg-black rounded-full dark:bg-[#064ACB] transition hover:bg-[#7745ff] hover:dark:bg-[#d95eff] sm:text-base text-sm">
								Download CV <IoDocumentText className="ml-2" />
							</button>
						</a>
					</div>
					<div className="relative justify-end hidden pr-4 mb-48 xl:pr-44 xl:mb-96 lg:pr-32 lg:mb-64 md:flex">
						<div className="flex w-full min-h-full sm:mt-0">
							<div className="absolute mt-2 ml-2 sm:mt-5 sm:ml-5">
								<p
									className={
										' bg-[#7743DB] inline-block px-1 pt-1 transition text-white sm:text-base text-sm h-7'
									}
								>
									{titles[index]}
								</p>
								<img
									src={Portrait}
									alt="picture"
									className="border-4 border-[#7743DB] block xl:max-w-80 lg:max-w-64 max-w-48"
								/>
							</div>
							<div className="lg:w-54 md:w-40 sm:w-36 w-24 bg-gradient-to-tr from-[#064ACB] to-[#92C7CF] aspect-square block" />
						</div>
					</div>
				</div>
			</Section>
			<Section id="experience">
				<h1 className="text-4xl font-bold text-center sm:text-left">
					Experience
				</h1>
				<ul className="p-4 mt-4 ml-2 border-l-4 border-black dark:border-white">
					<li className="mb-4 last:mb-0">
						<h2 className="text-lg font-semibold lg:text-2xl">
							Programmer
						</h2>
						<h3 className="">Banyubramanta ITS</h3>
						<p className="text-neutral-500">2023 - now</p>
						<ul className="mt-2 ml-4 text-sm list-disc text-neutral-400">
							<li>
								Developed Banyubramanta’s ROV navigation system
								and simulation with Nav2, Gazebo, and RViz
							</li>
							<li>
								Preprocess a surplus amount of images for
								Banyubramanta’s ROV obstacle and goal detection
							</li>
						</ul>
					</li>
					<li className="mb-4 last:mb-0">
						<h2 className="text-lg font-semibold lg:text-2xl">
							Programmer Intern
						</h2>
						<h3 className="">Banyubramanta ITS</h3>
						<p className="text-neutral-500">2023</p>
						<ul className="mt-2 ml-4 text-sm list-disc text-neutral-400">
							<li>
								Developed an ROV and semi-AUV system for team
								Lele Dumbo's underwater robot.
							</li>
						</ul>
					</li>
				</ul>
			</Section>
			<Section id="education">
				<h1 className="text-4xl font-bold text-center sm:text-left">
					Education
				</h1>
				<ul className="p-4 mt-4 ml-2 border-l-4 border-black dark:border-white">
					<li className="mb-4 last:mb-0">
						<h2 className="text-lg font-semibold lg:text-2xl">
							Informatics Engineering
						</h2>
						<h3 className="">
							Institut Teknologi Sepuluh Nopember
						</h3>
						<p className="text-neutral-500">2023 - now</p>
						<ul className="text-neutral-400"></ul>
					</li>
				</ul>
			</Section>
			<Section id="skills">
				<h1 className="text-4xl font-bold">Skills</h1>
				<div className="grid sm:grid-cols-8 grid-cols-4 gap-4 mt-4 *:h-full *:w-full *:transition">
					<SiC className="hover:text-blue-500" />
					<SiCplusplus className="hover:text-blue-500" />
					<DiHtml5 className="hover:text-blue-500" />
					<DiCss3 className="hover:text-blue-500" />
					<IoLogoJavascript className="hover:text-blue-500" />
					<DiReact className="hover:text-blue-500" />
					<FaPython className="hover:text-blue-500" />
				</div>
			</Section>
			<Section
				id="contacts"
				className="py-4 text-white bg-neutral-800 dark:bg-neutral-800"
			>
				<div className="flex flex-col items-center text-center sm:justify-between sm:flex-row sm:text-left">
					<div className="flex flex-col items-center sm:w-1/2 sm:block">
						<p>Don't be afraid, feel free to contact me!</p>
						<ul className="flex gap-4 mx-auto mt-4 text-3xl">
							<li>
								<Link to="https://wa.me/6281281832612">
									<FaWhatsapp />
								</Link>
							</li>
							<li>
								<Link to="www.linkedin.com/in/daniel-adhitthana">
									<FaLinkedin />
								</Link>
							</li>
							<li>
								<Link to="mailto:dadhitthana@gmail.com">
									<MdEmail />
								</Link>
							</li>
							<li>
								<Link to="https://github.com/someguy609">
									<FaGithub />
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col mt-4 text-sm sm:block sm:text-base sm:mt-0 text-neutral-500">
						<p>This website was made with</p>
						<div className="flex justify-end gap-2 mx-auto mt-2 text-3xl">
							<DiReact />
							<SiTailwindcss />
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}

export default Portfolio;
