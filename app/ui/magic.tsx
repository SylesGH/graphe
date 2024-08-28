"use client";

import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { HiSparkles } from "react-icons/hi2";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";

gsap.registerPlugin(RoughEase);

interface MagicProps {
	children: React.ReactNode;
	effect?: "magic" | "rainbow" | "glint" | "sparkle";
	disabled?: boolean;
}

export default function Magic({ children, effect = "magic", disabled = false }: MagicProps) {
	const spanRef = useRef<HTMLSpanElement>(null);
	const sparkleRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [backgroundPosition, setBackgroundPosition] = useState("0%");

	useEffect(() => {
		if (effect === "glint" && spanRef.current) {
			const spanElement = spanRef.current;

			const handleMouseMove = (e: MouseEvent) => {
				const rect = spanElement.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const positionX = (x / rect.width) * 100;

				setBackgroundPosition(`${positionX}%`);
			};

			spanElement.addEventListener("mousemove", handleMouseMove);

			return () => {
				spanElement.removeEventListener("mousemove", handleMouseMove);
			};
		}
	}, [effect, disabled]);

	return (
		<>
			{/* {effect === "sparkle" && <>&nbsp;</>} */}
			<span
				ref={spanRef}
				style={{ backgroundPosition: backgroundPosition }}
				className={clsx("relative transition-all ease-in", {
					"bg-gradient-magic text-transparent bg-clip-text": effect === "magic" && !disabled,
					"bg-gradient-rainbow animate-gradient-text bg-[length:800%] text-transparent bg-clip-text":
						effect === "rainbow" && !disabled,
					"duration-75 bg-gradient-to-l from-yellow-600 via-yellow-300 to-yellow-600 bg-[length:400%] text-transparent bg-clip-text":
						effect === "glint" && !disabled,
					"group/sparkle text-yellow-500 hover:text-yellow-300 hover:drop-shadow": effect === "sparkle" && !disabled,
				})}>
				{children}
				{effect === "sparkle" && (
					<>
						<HiSparkles className="transition-all ease-in inline absolute left-3 bottom-0 opacity-0 scale-50 group-hover/sparkle:scale-100 group-hover/sparkle:opacity-75 group-hover/sparkle:-left-1 group-hover/sparkle:-bottom-1 text-yellow-400" />
						<HiSparkles className="transition-all ease-in inline absolute left-7 bottom-0 opacity-0 scale-50 group-hover/sparkle:scale-100 group-hover/sparkle:opacity-75 group-hover/sparkle:left-6 group-hover/sparkle:bottom-2 text-amber-400" />
						<HiSparkles className="transition-all ease-in inline absolute left-11 bottom-0 opacity-0 scale-50 group-hover/sparkle:scale-100 group-hover/sparkle:opacity-75 group-hover/sparkle:left-14 group-hover/sparkle:-bottom-2 text-orange-300" />
					</>
				)}
			</span>
		</>
	);
}
