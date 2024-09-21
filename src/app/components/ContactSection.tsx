import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
	return (
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
				Have any questions or want to learn more about our chapter? Feel free to
				reach out to us.
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
	);
}
