"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

export default function TeamsSection() {
	const sectionRef = useRef(null);
	const leadersRef = useRef(null);

	const isInViewSection = useInView(sectionRef, { once: true });
	const isInViewLeaders = useInView(leadersRef, { once: true });

	const [hasAnimatedSection, setHasAnimatedSection] = useState(false);
	const [hasAnimatedLeaders, setHasAnimatedLeaders] = useState(false);

	useEffect(() => {
		if (isInViewSection && !hasAnimatedSection) {
			setHasAnimatedSection(true);
		}
		if (isInViewLeaders && !hasAnimatedLeaders) {
			setHasAnimatedLeaders(true);
		}
	}, [
		isInViewSection,
		isInViewLeaders,
		hasAnimatedSection,
		hasAnimatedLeaders,
	]);

	return (
		<section
			ref={sectionRef}
			id="team"
			className="bg-primary down-top-gradient p-10 md:p-20 text-white text-center"
		>
			<h1 className="text-3xl md:text-4xl font-bold mb-10">MEET THE TEAM</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
				{[
					{
						name: "Muhsen Khan",
						title: "President",
					},
					{
						name: "Anas Rustom",
						title: "Vice President",
					},
					{
						name: "Sara Metwaly",
						title: "Vice President",
					},
					{
						name: "Noor Soueid",
						title: "Secretary",
					},
					{
						name: "Mohamed Ali",
						title: "Treasurer",
					},
				].map((teamMember, idx) => (
					<motion.div
						key={idx}
						className="bg-white text-black rounded-lg shadow-2xl p-6"
						initial={{ opacity: 0, y: 40 }}
						animate={isInViewSection ? { opacity: 1, y: 0 } : {}}
						transition={{
							duration: 1.0,
							delay: hasAnimatedSection ? 0 : idx * 0.5,
						}}
						whileHover={{
							scale: 1.05,
						}}
					>
						<FaUserCircle className="rounded-full mx-auto w-16 h-16" />
						<h2 className="text-xl md:text-2xl font-bold mt-4">
							{teamMember.name}
						</h2>
						<h3 className="text-md md:text-lg text-gray-500">
							{teamMember.title}
						</h3>
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
						},
						{
							name: "Faseeh Nawaz",
							title: "Creative Lead",
						},
					].map((leader, idx) => (
						<motion.div
							key={idx}
							className="bg-white text-black rounded-lg shadow-2xl p-6"
							initial={{ opacity: 0, y: 40 }}
							animate={isInViewLeaders ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 1.0,
								delay: hasAnimatedLeaders ? 0 : idx * 0.5,
							}}
							whileHover={{
								scale: 1.05,
							}}
						>
							<FaUserCircle className="rounded-full mx-auto w-16 h-16" />
							<h2 className="text-xl md:text-2xl font-bold mt-4">
								{leader.name}
							</h2>
							<h3 className="text-md md:text-lg text-gray-500">
								{leader.title}
							</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
