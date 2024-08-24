import type { Metadata } from "next";
import { inter, poppins } from "./lib/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
	title: "Graphé",
	description: "Dependent graph/canvas application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
