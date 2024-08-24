"use client";

import { useRef, useEffect } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { HiSparkles } from "react-icons/hi2";

gsap.registerPlugin(TextPlugin);

interface MagicProps {
	children: React.ReactNode;
	effect?: "magic" | "rainbow" | "glint" | "sparkle";
}

export default function Magic({ children, effect = "magic" }: MagicProps) {
	const spanRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (effect === "glint" && spanRef.current) {
			const spanElement = spanRef.current;

			const handleMouseMove = (e: MouseEvent) => {
				const rect = spanElement.getBoundingClientRect();
				const x = e.clientX - rect.left;

				gsap.to(spanElement, {
					backgroundPosition: `${x}px`,
					ease: "power3.out",
					duration: 0.3,
				});
			};

			const handleMouseLeave = () => {
				gsap.to(spanElement, {
					backgroundPosition: "200%",
					ease: "power3.out",
					duration: 0.6,
				});
			};

			spanElement.addEventListener("mousemove", handleMouseMove);
			spanElement.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				spanElement.removeEventListener("mousemove", handleMouseMove);
				spanElement.removeEventListener("mouseleave", handleMouseLeave);
			};
		}
	}, [effect]);

	return (
		
		<span
			ref={spanRef}
			className={`${clsx({
				"text-violet-500": effect === "magic",
				"from-pink-500 via-yellow-500 to-blue-500 bg-gradient-to-r text-transparent bg-clip-text animate-gradient bg-[length:400%]":
					effect === "rainbow",
				"bg-gradient-to-l from-yellow-600 via-yellow-300 to-yellow-600 text-transparent bg-clip-text transition-all duration-300 bg-[length:400%]":
					effect === "glint",
				"": effect === "sparkle",
			})}`}
			style={{
				backgroundPosition: "200% center",
			}}>
			{children}
			{effect === "sparkle" && <HiSparkles className= "inline" />}
		</span>
	);
}
