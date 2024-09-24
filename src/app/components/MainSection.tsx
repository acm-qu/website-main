"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MainSection() {
	return (
		<section id="about" className="top-down-gradient min-h-[700px]">
			<div className="flex">
				<motion.h1
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.2 }}
					className="text-5xl font-bold mt-52 ml-24 w-1/2"
				>
					ASSOCIATION FOR COMPUTING MACHINERY, QATAR UNIVERSITY CHAPTER
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, delay: 0.5 }}
				>
					<Image
						src="images/img.png"
						alt="Logo"
						width={600}
						height={600}
						className="mr-10"
						priority
					/>
				</motion.div>
			</div>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.4, delay: 0.8 }}
				className="ml-24 -mt-40 text-xl"
			>
				Connecting students with the latest in technology and innovation.
			</motion.p>
		</section>
	);
}
