// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";

// const navItems = [
// 	{ name: "Mission", href: "#mission" },
// 	{ name: "Events", href: "#events" },
// 	{ name: "Team", href: "#team" },
// 	{ name: "Contact", href: "#contact" },
// ];

// export function Navbar() {
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<nav className="bg-black shadow-md">
// 			<div className="px-4">
// 				<div className="flex justify-between h-16">
// 					<div className="flex-shrink-0 flex items-center">
// 						<Link href="/">
// 							<Image
// 								src="/images/small-logo.jpeg"
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
// 								className="text-white px-3 py-2 rounded-md text-sm font-medium"
// 							>
// 								{item.name}
// 							</Link>
// 						))}
// 					</div>

// 					<div className="hidden md:flex items-center">
// 						<Button>Sign Up ➤</Button>
// 					</div>

// 					{/* Mobile menu button */}
// 					<div className="md:hidden flex items-center">
// 						<Sheet open={isOpen} onOpenChange={setIsOpen}>
// 							<SheetTrigger asChild>
// 								<Button variant="ghost" size="icon">
// 									<Menu className="h-8 w-8" />
// 									<span className="sr-only">Open menu</span>
// 								</Button>
// 							</SheetTrigger>
// 							<SheetContent
// 								side="right"
// 								className="w-[300px] sm:w-[400px] backdrop"
// 							>
// 								<div className="flex flex-col space-y-4 mt-4">
// 									{navItems.map((item) => (
// 										<Link
// 											key={item.name}
// 											href={item.href}
// 											className="text-white px-3 py-2 rounded-md text-sm font-medium"
// 											onClick={() => setIsOpen(false)}
// 										>
// 											{item.name}
// 										</Link>
// 									))}
// 									<Button className="mt-4">Sign Up</Button>
// 								</div>
// 							</SheetContent>
// 						</Sheet>
// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
	{ name: "Mission", href: "#mission" },
	{ name: "Events", href: "#events" },
	{ name: "Team", href: "#team" },
	{ name: "Contact", href: "#contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-black shadow-md">
			<div className="px-4">
				<div className="flex justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<Link href="/">
							<Image
								src="/images/small-logo.jpeg"
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
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-8 w-8" />
									<span className="sr-only">Open menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[300px] sm:w-[400px] backdrop"
							>
								<div className="flex flex-col space-y-4 mt-4">
									{navItems.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className="text-white px-3 py-2 rounded-md text-sm font-medium"
											onClick={() => setIsOpen(false)}
										>
											{item.name}
										</Link>
									))}
									<Button className="mt-4">Sign Up</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
