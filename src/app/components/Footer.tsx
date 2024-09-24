import { FaCopyright } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-black text-white text-center py-4 px-4">
			<div className="flex flex-col md:flex-row justify-center items-center md:space-x-2">
				<div className="flex justify-center items-center space-x-2">
					<FaCopyright className="text-sm md:text-lg" />
					<p className="text-sm md:text-base lg:text-base">
						2024 Association for Computing
					</p>
				</div>
				<p className="text-sm md:text-base md:ml-2">
					Machinery, Qatar University Chapter
				</p>
			</div>
		</footer>
	);
}
