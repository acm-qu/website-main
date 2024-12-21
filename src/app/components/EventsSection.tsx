import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

const EventList: React.FC<EventListProps> = ({ title, events }) => (
	<div className="mb-16">
		<div className="bg-label text-xl md:text-2xl font-bold max-w-44 ml-4 md:ml-10 py-4 px-6 rounded-r-full w-auto">
			{title}
		</div>
		<div className="mt-10 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-10">
			{events.map((event, idx) => (
				<motion.div
					key={idx}
					className="bg-white text-black shadow-2xl md:ml-10 p-6 rounded-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: idx * 0.2 }}
					whileHover={{ scale: 1.05 }}
				>
					<h2 className="text-xl md:text-2xl font-bold mb-4">{event.title}</h2>
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
						<Image src="images/date.png" alt="Date" width={24} height={24} />
						<span className="text-gray-700">{event.date}</span>
					</div>
					<div className="mt-2 flex items-center space-x-2">
						<Image src="images/time.png" alt="Time" width={24} height={24} />
						<span className="text-gray-700">{event.time}</span>
					</div>
				</motion.div>
			))}
		</div>
	</div>
);

export default function EventsSection() {
	const upcomingEvents: Event[] = [
		{
			title: "Winter Bytes",
			description:
				"Gear up for the ultimate coding adventure! Solve, code, and master challenges over six action-packed sessions this winter, starting January 5th!",
			link: "https://www.instagram.com/p/DD2SHf7ggZj/",
			image: "/images/event4.jpg",
			date: "5 Jan - 16 Jan 2025",
			time: "Timing varies",
		},
	];

	const pastEvents: Event[] = [
		{
			title: "CSE Orientation",
			description:
				"The goal of the event was to provide attendees with valuable insights into the various opportunities and career paths within CSE, which could help them choose their major or better understand the direction they were already pursuing.",
			link: "https://www.instagram.com/p/DCbiQMUg8uR/",
			image: "/images/event1.jpg",
			date: "9 September 2024",
			time: "12:30 - 1:30pm",
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
			title: "Road To Big Tech",
			description:
				"This dynamic discussion explored how higher education could pave the way to exciting career opportunities at top tech companies.",
			link: "https://www.instagram.com/p/DDJcv-yAmmD/",
			image: "/images/event3.jpg",
			date: "4 December 2024",
			time: "4:00 - 4:30pm",
		},
	];

	return (
		<motion.section
			id="events"
			className="bg-primary top-down-gradient min-h-screen py-10 text-white"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2 }}
		>
			<h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
				EVENTS
			</h1>
			<EventList title="UPCOMING" events={upcomingEvents} />
			<EventList title="PAST" events={pastEvents} />
		</motion.section>
	);
}
