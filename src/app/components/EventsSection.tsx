import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EventsSection() {
	return (
		<motion.section
			id="events"
			className="bg-primary top-down-gradient min-h-screen py-10 text-white"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2 }}
		>
			<h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
				EVENTS
			</h1>

			<div className="mb-16">
				<div className="bg-label text-xl md:text-2xl font-bold max-w-44 ml-4 md:ml-10 py-4 px-6 rounded-r-full w-auto">
					UPCOMING
				</div>
				<div className="mt-10 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-10">
					{[1].map((_, idx) => (
						<motion.div
							key={idx}
							className="bg-white text-black shadow-2xl md:ml-10 p-6 rounded-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.2 }}
							whileHover={{ scale: 1.05 }}
						>
							<h2 className="text-xl md:text-2xl font-bold mb-4">
								Hello World!
							</h2>
							<p className="text-gray-600 mb-4">Welcome to CSE</p>
							<Link href="https://www.google.com">
								<Image
									src="/images/contact4.png"
									alt="Event Image"
									width={100}
									height={100}
								/>
							</Link>
							<div className="mt-4 flex items-center space-x-2">
								<Image
									src="/images/date.png"
									alt="Date"
									width={24}
									height={24}
								/>
								<span className="text-gray-700">9 Sept 2024</span>
							</div>
							<div className="mt-2 flex items-center space-x-2">
								<Image
									src="/images/time.png"
									alt="Time"
									width={24}
									height={24}
								/>
								<span className="text-gray-700">12:30 - 13:30</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<div className="mb-16">
				<div className="bg-label text-xl md:text-2xl font-bold max-w-28 ml-4 md:ml-10 py-4 px-6 rounded-r-full w-auto">
					PAST
				</div>
				<div className="mt-10 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-10">
					{[1].map((_, idx) => (
						<motion.div
							key={idx}
							className="bg-white text-black shadow-2xl md:ml-10 p-6 rounded-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.2 }}
							whileHover={{ scale: 1.05 }}
						>
							<h2 className="text-xl md:text-2xl font-bold mb-4">
								Past Event: Hello World!
							</h2>
							<p className="text-gray-600 mb-4">Welcome to CSE.</p>
							<Link href="https://www.google.com">
								<Image
									src="/images/contact4.png"
									alt="Event Image"
									width={100}
									height={100}
								/>
							</Link>
							<div className="mt-4 flex items-center space-x-2">
								<Image
									src="/images/date.png"
									alt="Date"
									width={24}
									height={24}
								/>
								<span className="text-gray-700">9 Sept 2024</span>
							</div>
							<div className="mt-2 flex items-center space-x-2">
								<Image
									src="/images/time.png"
									alt="Time"
									width={24}
									height={24}
								/>
								<span className="text-gray-700">12:30 - 13:30</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
