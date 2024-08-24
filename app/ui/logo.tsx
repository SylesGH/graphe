"use client";

import { lexend } from "../lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
	const path = usePathname();

	return path !== "/" ? (
		<Link href="/" className={`${lexend.className} select-none text-gray-900`}>
			<h4>Graphé</h4>
		</Link>
	) : (
		<h4 className={`${lexend.className} select-none text-gray-900`}>Graphé</h4>
	);
}
