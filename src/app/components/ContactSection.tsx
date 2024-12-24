"use client";
import Image from "next/image";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { useRef } from "react";

export default function ContactSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });

	return (
		<section
			ref={sectionRef}
			id="contact"
			className="bg-primary top-down-gradient px-10 py-16 md:py-28 md:px-16 text-white"
		>
			<h1 className="text-3xl md:text-5xl font-bold text-center mt-6 md:mt-10 mb-6 md:mb-10">
				GET IN TOUCH
			</h1>
			<p className="text-base md:text-xl text-center text-gray-200 mt-2 md:mt-4 mb-12 md:mb-20">
				Have any questions or want to learn more about our chapter? Feel free to
				reach out to us.
			</p>

			<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10 justify-center">
				<div className="flex flex-col items-start space-y-6 md:space-y-8 mt-0 md:mt-20">
					{[
						{
							src: "/images/qu-engage-logo.png",
							label: "ACM Student Chapter - QU Engage",
							link: "https://quqa.campuslabs.com/engage/organization/acm",
						},
						{
							icon: <FaLinkedin className="text-2xl md:text-3xl" />,
							label: "ACM Student Chapter @ QU",
							link: "http://www.linkedin.com/company/acm-qu",
						},
						{
							icon: <FaInstagram className="text-2xl md:text-3xl" />,
							label: "@acm.qu",
							link: "https://instagram.com/acm.qu",
						},
						{
							icon: <FaEnvelope className="text-2xl md:text-3xl" />,
							label: "acm@qu.edu.qa",
							link: "mailto:acm@qu.edu.qa",
						},
					].map((contact, idx) => (
						<motion.a
							key={idx}
							href={contact.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center space-x-2 md:space-x-4"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 1.0, delay: 0.5 + idx * 0.5 }}
						>
							<div className="w-8 md:w-12 flex-shrink-0 flex items-center justify-center">
								{contact.icon ? (
									contact.icon
								) : (
									<Image
										src={contact.src}
										alt={contact.label}
										width={40}
										height={40}
										className="w-6 h-6 md:w-8 md:h-8"
									/>
								)}
							</div>
							<span className="text-sm md:text-lg">{contact.label}</span>
						</motion.a>
					))}
				</div>

				<motion.div
					className="w-full md:w-1/2"
					initial={{ opacity: 0, x: 20 }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 1.0, delay: 0.5 }}
				>
					<ContactForm />
				</motion.div>
			</div>
		</section>
	);
}
