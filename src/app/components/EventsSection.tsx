// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { FaCalendar, FaClock } from "react-icons/fa";

// interface Event {
// 	title: string;
// 	description: string;
// 	link: string;
// 	image: string;
// 	date: string;
// 	time: string;
// }

// interface EventListProps {
// 	title: string;
// 	events: Event[];
// }

// const EventList: React.FC<EventListProps> = ({ title, events }) => {
// 	const listRef = useRef(null);
// 	const isInView = useInView(listRef, { once: true });
// 	const [hasAnimated, setHasAnimated] = useState(false);

// 	useEffect(() => {
// 		if (isInView && !hasAnimated) {
// 			setHasAnimated(true);
// 		}
// 	}, [isInView, hasAnimated]);

// 	return (
// 		<div className="mb-16">
// 			<div className="bg-label text-xl md:text-2xl font-bold max-w-44 ml-4 md:ml-10 py-4 px-6 rounded-r-full w-auto">
// 				{title}
// 			</div>
// 			<div
// 				ref={listRef}
// 				className="mt-10 grid grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 md:px-10"
// 			>
// 				{events.map((event, idx) => (
// 					<motion.div
// 						key={idx}
// 						className="bg-white text-black shadow-2xl md:ml-10 p-6 rounded-lg"
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={isInView ? { opacity: 1, y: 0 } : {}}
// 						transition={{
// 							duration: 0.8,
// 							delay: hasAnimated ? 0 : idx * 0.5,
// 						}}
// 						whileHover={{ scale: 1.05 }}
// 					>
// 						<h2 className="text-xl md:text-2xl font-bold mb-4">
// 							{event.title}
// 						</h2>
// 						<p className="text-gray-600 mb-4">{event.description}</p>
// 						<Link href={event.link} target="_blank" rel="noopener noreferrer">
// 							<Image
// 								src={event.image}
// 								alt="Event Image"
// 								width={400}
// 								height={400}
// 							/>
// 						</Link>
// 						<div className="mt-4 flex items-center space-x-2">
// 							<FaCalendar className="text-gray-700" />
// 							<span className="text-gray-700">{event.date}</span>
// 						</div>
// 						<div className="mt-2 flex items-center space-x-2">
// 							<FaClock className="text-gray-700" />
// 							<span className="text-gray-700">{event.time}</span>
// 						</div>
// 					</motion.div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default function EventsSection() {
// 	const upcomingEvents: Event[] = [];

// 	const pastEvents: Event[] = [
// 		{
// 			title: "Winter Bytes",
// 			description:
// 				"Gear up for the ultimate coding adventure! Solve, code, and master challenges over six action-packed sessions this winter, starting January 5th!",
// 			link: "https://www.instagram.com/p/DD2SHf7ggZj/",
// 			image: "/images/event4.jpg",
// 			date: "5 Jan - 16 Jan 2025",
// 			time: "Timings varied",
// 		},
// 		{
// 			title: "Road To Big Tech",
// 			description:
// 				"This dynamic discussion explored how higher education could pave the way to exciting career opportunities at top tech companies.",
// 			link: "https://www.instagram.com/p/DDJcv-yAmmD/",
// 			image: "/images/event3.jpg",
// 			date: "4 December 2024",
// 			time: "4:00 - 4:30pm",
// 		},
// 		{
// 			title: "Cyber Awareness 101",
// 			description:
// 				"This exciting session featured a cybersecurity expert who shared invaluable tips and real-world stories to help attendees stay safe in the digital age.",
// 			link: "https://www.instagram.com/p/DCySlRmgMie/",
// 			image: "/images/event2.jpg",
// 			date: "27 November 2024",
// 			time: "12:30 - 2:00pm",
// 		},
// 		{
// 			title: "CSE Orientation",
// 			description:
// 				"The event aimed to offer attendees valuable insights into career paths and opportunities in CSE, helping them choose their major or better understand their current direction.",
// 			link: "https://www.instagram.com/p/DCbiQMUg8uR/",
// 			image: "/images/event1.jpg",
// 			date: "9 September 2024",
// 			time: "12:30 - 1:30pm",
// 		},
// 	];

// 	return (
// 		<section
// 			id="events"
// 			className="bg-primary top-down-gradient min-h-screen py-10 text-white"
// 		>
// 			<h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
// 				EVENTS
// 			</h1>
// 			<EventList title="UPCOMING" events={upcomingEvents} />
// 			<EventList title="PAST" events={pastEvents} />
// 		</section>
// 	);
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaCalendar, FaClock } from "react-icons/fa";

interface Event {
	title: string;
	description: string;
	link: string;
	image: string;
	date: string;
	time: string;
}

interface EventListProps {
	title: string;
	events: Event[];
}

const EventList: React.FC<EventListProps> = ({ title, events }) => {
	const listRef = useRef(null);
	const isInView = useInView(listRef, { once: true });
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (isInView && !hasAnimated) {
			setHasAnimated(true);
		}
	}, [isInView, hasAnimated]);

	return (
		<div className="mb-16">
			<div className="bg-label text-xl md:text-2xl font-bold max-w-44 ml-4 md:ml-10 py-4 px-6 rounded-r-full w-auto">
				{title}
			</div>
			<div
				ref={listRef}
				className="mt-10 grid grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 md:px-10"
			>
				{events.length === 0 && title === "UPCOMING" ? (
					<div className="col-span-full text-center text-xl">
						Nothing yet,{" "}
						<Link
							href="https://instagram.com/acm.qu"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-gray-300"
						>
							keep an eye on our page tho 👀
						</Link>
					</div>
				) : (
					events.map((event, idx) => (
						<motion.div
							key={idx}
							className="bg-white text-black shadow-2xl md:ml-10 p-6 rounded-lg"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.8,
								delay: hasAnimated ? 0 : idx * 0.5,
							}}
							whileHover={{ scale: 1.05 }}
						>
							<h2 className="text-xl md:text-2xl font-bold mb-4">
								{event.title}
							</h2>
							<p className="text-gray-600 mb-4">{event.description}</p>
							<Link href={event.link} target="_blank" rel="noopener noreferrer">
								<Image
									src={event.image}
									alt="Event Image"
									width={400}
									height={400}
								/>
							</Link>
							<div className="mt-4 flex items-center space-x-2">
								<FaCalendar className="text-gray-700" />
								<span className="text-gray-700">{event.date}</span>
							</div>
							<div className="mt-2 flex items-center space-x-2">
								<FaClock className="text-gray-700" />
								<span className="text-gray-700">{event.time}</span>
							</div>
						</motion.div>
					))
				)}
			</div>
		</div>
	);
};

export default function EventsSection() {
	// No upcoming events for now.
	const upcomingEvents: Event[] = [];

	const pastEvents: Event[] = [
		{
			title: "Winter Bytes",
			description:
				"Gear up for the ultimate coding adventure! Solve, code, and master challenges over six action-packed sessions this winter, starting January 5th!",
			link: "https://www.instagram.com/p/DD2SHf7ggZj/",
			image: "/images/event4.jpg",
			date: "5 Jan - 16 Jan 2025",
			time: "Timings varied",
		},
		{
			title: "Road To Big Tech",
			description:
				"This dynamic discussion explored how higher education could pave the way to exciting career opportunities at top tech companies.",
			link: "https://www.instagram.com/p/DDJcv-yAmmD/",
			image: "/images/event3.jpg",
			date: "4 December 2024",
			time: "4:00 - 4:30pm",
		},
		{
			title: "Cyber Awareness 101",
			description:
				"This exciting session featured a cybersecurity expert who shared invaluable tips and real-world stories to help attendees stay safe in the digital age.",
			link: "https://www.instagram.com/p/DCySlRmgMie/",
			image: "/images/event2.jpg",
			date: "27 November 2024",
			time: "12:30 - 2:00pm",
		},
		{
			title: "CSE Orientation",
			description:
				"The event aimed to offer attendees valuable insights into career paths and opportunities in CSE, helping them choose their major or better understand their current direction.",
			link: "https://www.instagram.com/p/DCbiQMUg8uR/",
			image: "/images/event1.jpg",
			date: "9 September 2024",
			time: "12:30 - 1:30pm",
		},
	];

	return (
		<section
			id="events"
			className="bg-primary top-down-gradient min-h-screen py-10 text-white"
		>
			<h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
				EVENTS
			</h1>
			<EventList title="UPCOMING" events={upcomingEvents} />
			<EventList title="PAST" events={pastEvents} />
		</section>
	);
}
