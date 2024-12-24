"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MainSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });

	return (
		<section
			id="about"
			ref={sectionRef}
			className="top-down-gradient min-h-[500px] lg:min-h-[700px]"
		>
			<div className="flex flex-col md:flex-row items-center md:items-start">
				<motion.h1
					initial={{ x: -100, opacity: 0 }}
					animate={isInView ? { x: 0, opacity: 1 } : {}}
					transition={{ duration: 1.2 }}
					className="text-3xl md:text-4xl lg:text-5xl font-bold mt-14 md:mt-44 lg:mt-52 md:ml-24 w-full md:w-1/2 text-center md:text-left"
				>
					<p className="mr-10 ml-10">
						ASSOCIATION FOR COMPUTING MACHINERY, QATAR UNIVERSITY CHAPTER
					</p>
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ duration: 1.2, delay: 0.5 }}
					className="mt-10 md:mt-0"
				>
					<Image
						src="images/acm-logo.png"
						alt="Logo"
						width={600}
						height={600}
						className="w-48 h-48 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto md:mr-10 md:mt-10"
						priority
					/>
				</motion.div>
			</div>
			<motion.p
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 1.4, delay: 0.8 }}
				className="ml-5 mr-5 md:ml-32 text-lg md:text-xl text-center md:text-left"
			>
				Connecting students with the latest in technology and innovation.
			</motion.p>
		</section>
	);
}
