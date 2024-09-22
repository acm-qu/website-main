import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";

export default function ContactSection() {
	return (
		<motion.section
			id="contact"
			className="bg-primary top-down-gradient px-10 py-16 md:py-28 md:px-16 text-white"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.2 }}
		>
			<h1 className="text-3xl md:text-5xl font-bold text-center mt-6 md:mt-10 mb-6 md:mb-10">
				GET IN TOUCH
			</h1>
			<p className="text-base md:text-xl text-center text-gray-200 mt-2 md:mt-4 mb-12 md:mb-20">
				Have any questions or want to learn more about our chapter? Feel free to
				reach out to us.
			</p>

			<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10 justify-center">
				<div className="flex flex-col items-center space-y-6 md:space-y-4 mt-0 md:mt-20">
					{[
						{ src: "/images/contact1.png", label: "acm@qu.edu.qa" },
						{ src: "/images/contact2.png", label: "@acm@qu" },
					].map((contact, idx) => (
						<motion.div
							key={idx}
							className="flex items-center md:space-x-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.2 }}
						>
							<Image
								src={contact.src}
								alt={contact.label}
								width={40}
								height={40}
								className="md:w-[50px] md:h-[50px]"
							/>
							<span className="text-sm md:text-lg">{contact.label}</span>
						</motion.div>
					))}
				</div>

				{/* <form
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
							className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full md:w-auto"
						>
							Submit
						</button>
					</form> */}
				<ContactForm />
			</div>
		</motion.section>
	);
}
