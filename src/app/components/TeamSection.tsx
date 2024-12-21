import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamsSection() {
	return (
		<motion.section
			id="team"
			className="bg-primary down-top-gradient p-10 md:p-20 text-white text-center"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2 }}
		>
			<h1 className="text-3xl md:text-4xl font-bold mb-10">MEET THE TEAM</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
				{[
					{
						name: "Muhsen Khan",
						title: "President",
						description:
							"Senior CE student with a passion for innovation through ML",
					},
					{
						name: "Anas Rustom",
						title: "Vice President",
						description: "CS sophomore working on small, cool projects",
					},
					{
						name: "Sara Metwaly",
						title: "Vice President",
						description: "Junior CE student interested in AI and ML",
					},
					{
						name: "Mohamed Ali",
						title: "Treasurer",
						description: "Junior CE student interested in AI and ML",
					},
				].map((teamMember, idx) => (
					<motion.div
						key={idx}
						className="bg-white text-black rounded-lg shadow-2xl p-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						whileHover={{
							scale: 1.05,
						}}
					>
						<Image
							src="images/team.png"
							alt={teamMember.name}
							width={70}
							height={70}
							className="rounded-full mx-auto"
						/>
						<h2 className="text-xl md:text-2xl font-bold mt-4">
							{teamMember.name}
						</h2>
						<h3 className="text-md md:text-lg text-gray-500">
							{teamMember.title}
						</h3>
						<p className="text-gray-600 mt-2 text-sm md:text-base">
							{teamMember.description}
						</p>
					</motion.div>
				))}
			</div>

			<div className="mt-16 text-center">
				<h1 className="text-3xl md:text-4xl font-bold mb-8">
					CORE TEAM LEADERS
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
					{[
						{
							name: "Hunzalah Bhatti",
							title: "Technical Lead",
							description:
								"Senior CS student with a passion for security and cloud",
						},
						{
							name: "Faseeh Nawaz",
							title: "Creative Lead",
							description:
								"Final year CS student who loves graphic designing and empowering the youth",
						},
					].map((leader, idx) => (
						<motion.div
							key={idx}
							className="bg-white text-black rounded-lg shadow-2xl p-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							whileHover={{
								scale: 1.05,
							}}
						>
							<Image
								src="images/team.png"
								alt={leader.name}
								width={70}
								height={70}
								className="rounded-full mx-auto"
							/>
							<h2 className="text-xl md:text-2xl font-bold mt-4">
								{leader.name}
							</h2>
							<h3 className="text-md md:text-lg text-gray-500">
								{leader.title}
							</h3>
							<p className="text-gray-600 mt-2 text-sm md:text-base">
								{leader.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}