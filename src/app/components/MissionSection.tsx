"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
	return (
		<motion.section
			id="mission"
			className="bg-primary down-top-gradient min-h-screen px-6 py-10 md:px-10 items-center"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2 }}
		>
			<h1 className="text-4xl font-bold mt-20 md:text-5xl md:mt-40 md:ml-20 text-center md:text-left">
				MISSION
			</h1>
			<div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 mt-8">
				<p className="text-lg md:text-xl w-full md:w-4/5 md:ml-20 max-w-2xl text-center md:text-left">
					The Qatar University ACM Chapter is a student-led group focused on
					advancing computer science and technology. We host workshops,
					seminars, and hackathons to offer hands-on experience and networking
					for students passionate about technology.
				</p>
				<Image
					src="images/img.png"
					alt="Mission Logo"
					width={300}
					height={300}
					className="object-contain"
				/>
			</div>
		</motion.section>
	);
}
