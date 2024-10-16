// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";

// const navItems = [
// 	{ name: "Mission", href: "#mission" },
// 	{ name: "Events", href: "#events" },
// 	{ name: "Team", href: "#team" },
// 	{ name: "Contact", href: "#contact" },
// ];

// export function Navbar() {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<nav className="bg-black shadow-md">
// 			<div className="px-4">
// 				<div className="flex justify-between h-16">
// 					<div className="flex-shrink-0 flex items-center">
// 						<Link href="/">
// 							<Image
// 								src="images/small-logo.jpeg"
// 								alt="Logo"
// 								className="rounded-full"
// 								width={60}
// 								height={60}
// 							/>
// 						</Link>
// 					</div>

// 					{/* Desktop menu */}
// 					<div className="hidden md:flex items-center justify-center flex-1">
// 						{navItems.map((item) => (
// 							<Link
// 								key={item.name}
// 								href={item.href}
// 								className="text-white px-3 py-2 rounded-md text-sm font-medium relative group"
// 							>
// 								{item.name}
// 								{/* Underline */}
// 								<span className="absolute left-0 right-0 h-[2px] bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 -bottom-1 origin-left"></span>
// 							</Link>
// 						))}
// 					</div>

// 					<div className="hidden md:flex items-center">
// 						<Button>Sign Up ➤</Button>
// 					</div>

// 					{/* Mobile menu button */}
// 					<div className="md:hidden flex items-center">
// 						<button
// 							className="outline-none mobile-menu-button"
// 							onClick={toggleMenu}
// 						>
// 							{isOpen ? (
// 								<X className="h-8 w-8 text-white" />
// 							) : (
// 								<Menu className="h-8 w-8 text-white" />
// 							)}
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Mobile menu */}
// 			{isOpen && (
// 				<div className="md:hidden">
// 					{navItems.map((item) => (
// 						<Link
// 							key={item.name}
// 							href={item.href}
// 							className="block py-2 px-4 text-center text-sm hover:underline"
// 							onClick={toggleMenu}
// 						>
// 							{item.name}
// 						</Link>
// 					))}
// 					<Link
// 						href="#"
// 						className="block py-2 px-4 text-center text-sm hover:underline"
// 						onClick={toggleMenu}
// 					>
// 						Sign Up
// 					</Link>
// 				</div>
// 			)}
// 		</nav>
// 	);
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
	{ name: "Mission", href: "#mission" },
	{ name: "Events", href: "#events" },
	{ name: "Team", href: "#team" },
	{ name: "Contact", href: "#contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-black shadow-md">
			<div className="px-4">
				<div className="flex justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<Link href="/">
							<Image
								src="images/small-logo.jpeg"
								alt="Logo"
								className="rounded-full"
								width={60}
								height={60}
							/>
						</Link>
					</div>

					{/* Desktop menu */}
					<div className="hidden md:flex items-center justify-center flex-1">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-white px-3 py-2 rounded-md text-sm font-medium relative group"
							>
								{item.name}
								{/* Underline */}
								<span className="absolute left-0 right-0 h-[2px] bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 -bottom-1 origin-left"></span>
							</Link>
						))}
					</div>

					<div className="hidden md:flex items-center">
						<Button>Sign Up ➤</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							className="outline-none mobile-menu-button"
							onClick={toggleMenu}
						>
							{isOpen ? (
								<X className="h-8 w-8 text-white" />
							) : (
								<Menu className="h-8 w-8 text-white" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden flex flex-col items-center">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="block py-2 px-4 text-center text-sm font-medium text-white relative group"
							onClick={toggleMenu}
						>
							{item.name}
							{/* Mobile Underline */}
							<span className="absolute left-0 right-0 h-[3px] bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 -bottom-[2px] origin-left"></span>
						</Link>
					))}
					<Link
						href="#"
						className="block py-2 px-4 text-center text-sm font-medium text-white relative group"
						onClick={toggleMenu}
					>
						Sign Up
						{/* Mobile Underline */}
						<span className="absolute left-0 right-0 h-[3px] bg-white transition-transform transform scale-x-0 group-hover:scale-x-100 -bottom-[2px] origin-left"></span>
					</Link>
				</div>
			)}
		</nav>
	);
}
