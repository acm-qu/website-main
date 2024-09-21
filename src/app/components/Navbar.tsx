"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="bg-black text-white py-4 px-6 flex justify-between items-center"
		>
			<div className="logo">
				<Link href="#about">
					<Image
						src="/images/small-logo.jpeg"
						alt="Logo"
						className="rounded-full"
						width={80}
						height={80}
					/>
				</Link>
			</div>
			<nav className="flex space-x-6 text-lg">
				<Link href="#mission">Mission</Link>
				<Link href="#events">Events</Link>
				<Link href="#team">Team</Link>
				<Link href="#contact">Contact</Link>
			</nav>
			<div>
				<Link href="#signup" className="py-2 px-4 rounded-md">
					Sign Up →
				</Link>
			</div>
		</motion.header>
	);
}
