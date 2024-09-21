"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>ACM-QU - Home</title>
			</Head>

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

			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<section id="about" className="main-page min-h-[700px]">
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
								src="/images/img.png"
								alt="Logo"
								width={600}
								height={600}
								className="mr-10"
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

				<motion.section
					id="mission"
					className="bg-primary min-h-screen px-10 py-10 items-center"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
				>
					<h1 className="text-5xl font-bold mt-40 ml-20">MISSION</h1>
					<div className="flex items-center space-x-8">
						<p className="text-xl w-4/5 ml-20 max-w-2xl">
							The Qatar University ACM Chapter is a student-led group focused on
							advancing computer science and technology. We host workshops,
							seminars, and hackathons to offer hands-on experience and
							networking for students passionate about technology.
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

				<motion.section
					id="events"
					className="bg-primary min-h-screen py-10 text-white"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
				>
					<h1 className="text-5xl font-bold text-center mb-10">EVENTS</h1>

					<div className="mb-16">
						<div className="bg-label text-2xl font-bold max-w-44 ml-10 py-4 px-6 rounded-r-full w-auto">
							UPCOMING
						</div>
						<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
							{[1].map((_, idx) => (
								<motion.div
									key={idx}
									className="bg-white text-black shadow-lg ml-10 p-6 rounded-lg"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.2 }}
								>
									<h2 className="text-2xl font-bold mb-4">Hello World!</h2>
									<p className="text-gray-600 mb-4">Welcome to CSE</p>
									<Link href="https://www.google.com">
										<Image
											src="/images/contact4.png"
											alt="Event Image"
											width={100}
											height={100}
										/>
									</Link>
									<div className="mt-4 flex items-center space-x-2">
										<Image
											src="/images/date.png"
											alt="Date"
											width={24}
											height={24}
										/>
										<span className="text-gray-700">9 Sept 2024</span>
									</div>
									<div className="mt-2 flex items-center space-x-2">
										<Image
											src="/images/time.png"
											alt="Time"
											width={24}
											height={24}
										/>
										<span className="text-gray-700">12:30 - 13:30</span>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<div className="mb-16">
						<div className="bg-label text-2xl font-bold max-w-28 ml-10 py-4 px-6 rounded-r-full w-auto">
							PAST
						</div>
						<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
							{[1].map((_, idx) => (
								<motion.div
									key={idx}
									className="bg-white text-black shadow-lg ml-10 p-6 rounded-lg"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.2 }}
								>
									<h2 className="text-2xl font-bold mb-4">
										Past Event: Hello World!
									</h2>
									<p className="text-gray-600 mb-4">Welcome to CSE.</p>
									<Link href="https://www.google.com">
										<Image
											src="/images/contact4.png"
											alt="Event Image"
											width={100}
											height={100}
										/>
									</Link>
									<div className="mt-4 flex items-center space-x-2">
										<Image
											src="/images/date.png"
											alt="Date"
											width={24}
											height={24}
										/>
										<span className="text-gray-700">9 Sept 2024</span>
									</div>
									<div className="mt-2 flex items-center space-x-2">
										<Image
											src="/images/time.png"
											alt="Time"
											width={24}
											height={24}
										/>
										<span className="text-gray-700">12:30 - 13:30</span>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>

				<motion.section
					id="team"
					className="bg-primary p-20 text-white text-center"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
				>
					<h1 className="text-4xl font-bold mb-10">MEET THE TEAM</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{[
							{
								name: "Muhsen Khan",
								title: "President",
								description:
									"Senior CE student with a passion for innovation through ML",
								style: "ml-10",
							},
							{
								name: "Anas Rustom",
								title: "Vice-President",
								description: "CS sophomore working on small, cool projects",
							},
							{
								name: "Sara Ali",
								title: "Secretary",
								description: "Junior CE student interested in AI and ML",
								style: "mr-10",
							},
						].map((teamMember, idx) => (
							<motion.div
								key={idx}
								className={`bg-white text-black rounded-lg shadow-md p-6 ${teamMember.style}`}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.2 }}
							>
								<Image
									src="/images/team.png"
									alt={teamMember.name}
									width={70}
									height={70}
									className="rounded-full mx-auto"
								/>
								<h2 className="text-2xl font-bold mt-4">{teamMember.name}</h2>
								<h3 className="text-lg text-gray-500">{teamMember.title}</h3>
								<p className="text-gray-600 mt-2">{teamMember.description}</p>
							</motion.div>
						))}
					</div>

					<div className="mt-16 text-center">
						<h1 className="text-4xl font-bold mb-8">CORE TEAM LEADERS</h1>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
							{[
								{
									name: "Hunzalah Bhatti",
									title: "Tech Guru",
									description:
										"Senior CS student with a passion for security and cloud",
									style: "ml-10",
								},
								{
									name: "Abdallah Irhimeh",
									title: "Event Manager",
									description:
										"Final year student who gets things done on time and will be super buff",
								},
								{
									name: "Faseeh Nawaz",
									title: "Head of Creative Endeavour",
									description:
										"Final year CS student who loves graphic designing and empowering the youth",
									style: "mr-10",
								},
							].map((leader, idx) => (
								<motion.div
									key={idx}
									className={`bg-white text-black rounded-lg shadow-md p-6 ${leader.style}`}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.2 }}
								>
									<Image
										src="/images/team.png"
										alt={leader.name}
										width={70}
										height={70}
										className="rounded-full mx-auto"
									/>
									<h2 className="text-2xl font-bold mt-4">{leader.name}</h2>
									<h3 className="text-lg text-gray-500">{leader.title}</h3>
									<p className="text-gray-600 mt-2">{leader.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>

				<motion.section
					id="contact"
					className="bg-primary py-28 text-white"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
				>
					<h1 className="text-5xl font-bold text-center mt-10 mb-10">
						GET IN TOUCH
					</h1>
					<p className="text-xl text-center text-gray-200 mt-4 mb-20">
						Have any questions or want to learn more about our chapter? Feel
						free to reach out to us.
					</p>

					<div className="mt-10 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10 justify-center">
						<div className="flex flex-col items-center space-y-4 mt-20">
							{[
								{ src: "/images/contact1.png", label: "acm@qu.edu.qa" },
								{ src: "/images/contact2.png", label: "@acm@qu" },
							].map((contact, idx) => (
								<motion.div
									key={idx}
									className="flex items-center space-x-4"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.2 }}
								>
									<Image
										src={contact.src}
										alt={contact.label}
										width={50}
										height={50}
									/>
									<span className="text-lg">{contact.label}</span>
								</motion.div>
							))}
						</div>

						<motion.div
							className="bg-white text-black p-8 max-w-[800px] rounded-lg shadow-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<form
								action="https://formspree.io/f/mgvwpkga"
								method="POST"
								className="space-y-4"
							>
								<input
									type="text"
									name="name"
									placeholder="Name"
									className="w-full px-4 py-2 border rounded-md"
									required
								/>
								<input
									type="email"
									name="email"
									placeholder="Email"
									className="w-full px-4 py-2 border rounded-md"
									required
								/>
								<textarea
									name="message"
									placeholder="Message"
									className="w-full px-4 py-2 border rounded-md"
									required
								></textarea>
								<button
									type="submit"
									className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
								>
									Submit
								</button>
							</form>
						</motion.div>
					</div>
				</motion.section>
			</motion.main>

			<footer className="bg-black text-white text-center py-4">
				<p>
					© 2024 Association for Computing Machinery, Qatar University Chapter
				</p>
			</footer>
		</>
	);
}
