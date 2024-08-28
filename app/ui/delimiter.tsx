import clsx from "clsx";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface DelimiterProps {
	variant?: "dot" | "line";
	size?: "tiny" | "small" | "medium" | "large" | "huge";
	height?: "short" | "medium" | "tall";
	color?: Color;
	className?: string;
}

var variants = {
	dot: "aspect-square",
	line: "w-0.5",
};

export default function Delimiter({
	variant = "dot",
	size = "medium",
	height = "medium",
	className,
}: DelimiterProps) {
	return (
		<div
			className={`${className} ${clsx({
				[variants.dot]: variant === "dot",
				[variants.line]: variant === "line",
			})} ${clsx({
				"h-1": size === "tiny",
				"h-2": size === "small",
				"h-3": size === "medium",
				"h-4": size === "large",
				"h-5": size === "huge",
			})} ${clsx({
				"h-4": height === "short",
				"h-6": height === "medium",
				"h-8": height === "tall",
			})} bg-black bg-opacity-15 rounded-full`}></div>
	);
}
