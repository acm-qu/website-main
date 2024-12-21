import { motion } from "framer-motion";
import MainSection from "@/app/components/MainSection";
import MissionSection from "@/app/components/MissionSection";
import EventsSection from "@/app/components/EventsSection";
import TeamSection from "@/app/components/TeamSection";
import ContactSection from "@/app/components/ContactSection";

export default function HomePage() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<MainSection />
			<MissionSection />
			<EventsSection />
			<TeamSection />
			<ContactSection />
		</motion.main>
	);
}
