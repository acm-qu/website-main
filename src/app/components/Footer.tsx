import { FaCopyright } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-black text-white text-center py-4">
			<div className="flex justify-center items-center space-x-2">
				<FaCopyright />
				<p>
					2024 Association for Computing Machinery, Qatar University Chapter
				</p>
			</div>
		</footer>
	);
}
