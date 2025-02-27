"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";

export function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const formRef = useRef<HTMLFormElement>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const form = formRef.current;
		if (form) {
			form.submit();
		}

		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<Card className="w-full max-w-screen-sm">
			<CardHeader>
				<CardTitle className="text-xl text-center">Contact Us Form</CardTitle>
				<CardDescription>
					Send us a message and we will get back to you soon.
				</CardDescription>
			</CardHeader>
			<form
				ref={formRef}
				action="https://formspree.io/f/xdkooegk"
				method="POST"
				onSubmit={handleSubmit}
			>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input
							id="name"
							name="name"
							placeholder="Your name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="Your email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea
							id="message"
							name="message"
							placeholder="Your message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button type="submit" className="bg-secondary w-full">
						Send Message
					</Button>
				</CardFooter>
			</form>
		</Card>
	);
}
