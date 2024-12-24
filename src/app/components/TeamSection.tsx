"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

export default function TeamsSection() {
	const sectionRef = useRef(null);
	const leadersRef = useRef(null);
	const isInViewSection = useInView(sectionRef, { once: true });
	const isInViewLeaders = useInView(leadersRef, { once: true });

	return (
		<section
			ref={sectionRef}
			id="team"
			className="bg-primary down-top-gradient p-10 md:p-20 text-white text-center"
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
						description: "Senior CE student interested in AI and ML",
					},
					{
						name: "Mohamed Ali",
						title: "Treasurer",
						description: "Senior CE student interested in AI and ML",
					},
				].map((teamMember, idx) => (
					<motion.div
						key={idx}
						className="bg-white text-black rounded-lg shadow-2xl p-6"
						initial={{ opacity: 0, y: 40 }}
						animate={isInViewSection ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.0 + idx * 0.1 }}
						whileHover={{
							scale: 1.05,
						}}
					>
						<FaUserCircle
							width={70}
							height={70}
							className="rounded-full mx-auto w-16 h-16"
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

			<div className="mt-16 text-center" ref={leadersRef}>
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
							initial={{ opacity: 0, y: 40 }}
							animate={isInViewLeaders ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.0 + idx * 0.1 }}
							whileHover={{
								scale: 1.05,
							}}
						>
							<FaUserCircle
								width={70}
								height={70}
								className="rounded-full mx-auto w-16 h-16"
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
		</section>
	);
}
