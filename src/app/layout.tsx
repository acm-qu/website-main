import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
	title: "ACM-QU Home",
	description: "ACM-QU Website Home Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
