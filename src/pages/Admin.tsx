import { useState } from 'react';
import Logo from '../assets/logo.svg';
import TextInputLabel from '../components/TextInputLabel';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';

interface IData {
	name: string;
	start: number;
	end?: number;
	details?: string[];
}

function Admin() {
	const [data, setData] = useState<IData[]>([]);
	return (
		// <div className="flex items-center justify-center min-h-screen">
		// 	<div className="p-4 border">
		// 		<form>
		// 			<TextInputLabel className="font-semibold">
		// 				Password
		// 			</TextInputLabel>
		// 			<TextInput type="password" />
		// 			<button className="w-full p-1 mt-4 text-center text-white bg-black">
		// 				Login
		// 			</button>
		// 		</form>
		// 	</div>
		// </div>
		<div className="flex min-h-screen">
			<div className="w-1/3 p-4 border">
				<img src={Logo} alt="logo" className="h-8" />
				<div className="mt-4">
					<h1 className="text-lg font-semibold">Sections</h1>
					<ul className="mt-2 *:rounded *:border-b *:mb-2">
						<li>Education</li>
						<li>Experience</li>
						<li>Projects</li>
						<li>Skills</li>
						<li>Contacts</li>
					</ul>
				</div>
				<p className="text-sm text-neutral-500">test</p>
			</div>
			<div className="w-full p-4 overflow-auto">
				<div className="w-full p-4 border rounded">
					<form>
						<TextInputLabel className="font-semibold">
							Name
						</TextInputLabel>
						<TextInput type="text" />
						<select>
							{Array.from(
								new Array(50),
								(_, index) => new Date().getFullYear() - index
							).map((val) => (
								<option>{val}</option>
							))}
						</select>{' '}
						- <select></select>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Admin;
