"use client";

import clsx from "clsx";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";

interface ButtonProps {
	variant: "primary" | "secondary";
	text: string;
	endIcon?: React.ReactNode;
	look?: "pill" | "square";
	className?: string;
	tabIndex?: number;
}

export function Button({
	variant,
	text,
	endIcon,
	look = "square",
	className,
	tabIndex,
}: ButtonProps) {
	const clickHaptic = useRef<HTMLButtonElement>(null);

	const handleClick = () => {
		console.log("clicked");

		const haptic = gsap.fromTo(
			clickHaptic.current,
			{
				scale: 0,
				opacity: 1.2,
			},
			{
				scale: 1,
				opacity: 0,
				duration: 1,
				ease: "power4.out",
			}
		);

		haptic.play();
	};

	return (
		<button
			tabIndex={tabIndex}
			onClick={handleClick}
			className={`
			${className} ${clsx({
				"transition-colors ease-[cubic-bezier(.25,.1,.25,1)] bg-violet-600 text-violet-100 hover:bg-violet-500":
					variant === "primary",
				"transition-all ease-out border-indigo-500 text-indigo-500 border-2 border-solid hover:border-2 hover:bg-indigo-500 hover:text-indigo-100":
					variant === "secondary",
			})} ${clsx({
				"rounded-full": look === "pill",
				"rounded-md": look === "square",
			})} ${clsx({
				"hover:shadow-lg hover:shadow-indigo-400/65":
					look === "pill" && variant === "secondary",
			})} font-bold whitespace-nowrap overflow-hidden text-ellipsis focus:ring ring-violet-400 outline-none p-[6px] px-6 min-w-16 justify-center gap-1 flex items-center group/button relative`}>
			<span className="transition-all group-hover/button:-translate-x-2">
				{text}
			</span>
			<span
				className={`${clsx({
					"text-violet-100": variant === "primary",
					"text-indigo-100": variant === "secondary",
				})} opacity-0 absolute right-3 -translate-x-1 transition-all group-hover/button:opacity-100 group-hover/button:translate-x-0`}>
				{endIcon}
			</span>
			<span
				ref={clickHaptic}
				className="absolute w-full aspect-square bg-white/70 rounded-full scale-0"></span>
		</button>
	);
}

export function ScrollDown() {
	const arrow = useRef(null);

	useEffect(() => {
		const animation = gsap.fromTo(
			arrow.current,
			{
				y: "-130%",
			},
			{
				y: "130%",
				duration: 1.5,
				repeatDelay: 1,
				repeat: -1,
				ease: "power4.inOut",
			}
		);

		return () => {
			animation.kill();
		};
	}, []);

	function handleScroll() {
		window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
	}

	return (
		<button
			tabIndex={7}
			onClick={handleScroll}
			className="hidden lg:flex outline-none border border-black/15 focus:ring ring-violet-400 z-10 absolute bottom-12 left-5 bg-neutral-200/65 backdrop-blur w-10 aspect-square rounded-full items-center justify-center text-2xl text-neutral-500 overflow-hidden cursor-pointer transition-all ease-out hover:scale-110">
			<span ref={arrow}>
				<FaArrowDown />
			</span>
		</button>
	);
}
