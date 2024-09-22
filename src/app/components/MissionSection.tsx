"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionSection() {
	return (
		<motion.section
			id="mission"
			className="bg-primary down-top-gradient min-h-screen px-10 py-10 items-center"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2 }}
		>
			<h1 className="text-5xl font-bold mt-40 ml-20">MISSION</h1>
			<div className="flex items-center space-x-8">
				<p className="text-xl w-4/5 ml-20 max-w-2xl">
					The Qatar University ACM Chapter is a student-led group focused on
					advancing computer science and technology. We host workshops,
					seminars, and hackathons to offer hands-on experience and networking
					for students passionate about technology.
				</p>
				<Image
					src="/images/img.png"
					alt="Mission Logo"
					width={300}
					height={300}
					className="object-contain"
				/>
			</div>
		</motion.section>
	);
}
