"use client";

import clsx from "clsx";

interface ButtonProps {
	variant: "primary" | "secondary";
	text: string;
	endIcon?: React.ReactNode;
	look?: "pill" | "square";
}

export default function Button({
	variant,
	text,
	endIcon,
	look = "square",
}: ButtonProps) {
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<button
			onClick={handleClick}
			className={`${clsx({
				"transition-colors bg-violet-800 text-violet-100 hover:bg-violet-700":
					variant === "primary",
				"transition-all ease-[cubic-bezier(.25,.1,.25,1)] ease border-indigo-400 text-indigo-700 border-2 border-solid hover:border-2 hover:bg-indigo-400 hover:text-indigo-100":
					variant === "secondary",
			})} ${clsx({
				"rounded-full": look === "pill",
				"rounded-md": look === "square",
			})} font-bold whitespace-nowrap overflow-hidden text-ellipsis focus:ring ring-violet-400 outline-none p-[6px] px-6 min-w-16 justify-center gap-1 flex items-center group/button relative`}>
			<span className="transition-all group-hover/button:-translate-x-2">{text}</span>
			<span
				className={`${clsx({
					"text-violet-100": variant === "primary",
					"text-indigo-100": variant === "secondary",
				})} opacity-0 absolute right-3 -translate-x-1 transition-all group-hover/button:opacity-100 group-hover/button:translate-x-0`}>
				{endIcon}
			</span>
		</button>
	);
}
