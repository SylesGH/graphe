"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Preview() {
	const cursor = useRef<HTMLSpanElement | null>(null);
	const container = useRef<HTMLDivElement | null>(null);
	const lastPosition = useRef({ x: 0, y: 0 });
	const lastTime = useRef(Date.now());
	const [isHovered, setIsHovered] = useState(false);
	const [mode, setMode] = useState<"xray" | "normal">("normal");

	useEffect(() => {
		function handleMouseMove(event: MouseEvent) {
			if (!isHovered) return;

			if (container.current && cursor.current) {
				const rect = container.current.getBoundingClientRect();
				const mouseX = event.clientX - rect.left;
				const mouseY = event.clientY - rect.top;

				const currentTime = Date.now();
				const timeDiff = currentTime - lastTime.current;

				const deltaX = mouseX - lastPosition.current.x;
				const deltaY = mouseY - lastPosition.current.y;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				const velocity = distance / timeDiff;

				lastPosition.current = { x: mouseX, y: mouseY };
				lastTime.current = currentTime;

				const minScale = 1;
				const maxScale = 5;
				const scaleFactor = 0.1;
				const scale = Math.min(
					maxScale,
					minScale + velocity * scaleFactor
				);

				const blurFactor = Math.min(10, velocity * 0.1);

				gsap.to(cursor.current, {
					x: mouseX,
					y: mouseY,
					duration: 0.01,
					ease: "none",
				});

				gsap.to(cursor.current, {
					scale: scale,
					filter: `blur(${blurFactor}px)`,
					ease: "power4.out",
					duration: 1,
				});

				gsap.to(cursor.current, {
					width: "20px",
					opacity: 0.65,
					duration: 0.1,
					ease: "none",
				});
			}
		}

		function handleMouseLeave() {
			setIsHovered(false);
			if (cursor.current && container.current) {
				const rect = container.current.getBoundingClientRect();
				gsap.to(cursor.current, {
					x: rect.width / 2,
					y: rect.height / 2,
					width: "120%",
					opacity: 1,
					duration: 2,
					ease: "expo.out",
				});

				gsap.to(cursor.current, {
					filter: `blur(0px)`,
					delay: 0.2,
					duration: 2,
					ease: "expo.out",
				});
			}
		}

		function handleMouseEnter() {
			setIsHovered(true);
			gsap.killTweensOf(cursor.current);
		}

		const currentContainer = container.current;
		currentContainer?.addEventListener("mousemove", handleMouseMove);
		currentContainer?.addEventListener("mouseleave", handleMouseLeave);
		currentContainer?.addEventListener("mouseenter", handleMouseEnter);

		return () => {
			currentContainer?.removeEventListener("mousemove", handleMouseMove);
			currentContainer?.removeEventListener(
				"mouseleave",
				handleMouseLeave
			);
			currentContainer?.removeEventListener(
				"mouseenter",
				handleMouseEnter
			);
		};
	}, [isHovered]);

	return (
		<div className="z-40 group/preview w-full h-screen from-neutral-100 to-neutral-300 bg-gradient-to-b p-5 lg:p-20">
			<div
				ref={container}
				className="group/preview-card hover:cursor-none w-full h-full from-neutral-200 to-neutral-100 bg-gradient-to-b rounded-xl relative border-black/20 border overflow-hidden">
				<span
					ref={cursor}
					className={`${clsx({
						"blur backdrop-blur-sm opacity-65": mode === "xray",
						"opacity-100 group-hover/preview-card:blur group-hover/preview-card:backdrop-blur-sm":
							mode === "normal",
					})} group-hover/preview-card:opacity-65 pointer-events-none absolute group-hover/preview-card:w-5 aspect-square rounded-full origin-center -translate-x-1/2 -translate-y-1/2 backdrop-invert`}></span>

				{/* Content */}
				<div className="w-full h-full p-16 leading-none">
					<h3>Content</h3>
					<p className="px-6 py-2">
						Discover a platform for your creativity. Create
						structured spaces filled with notes, images, and videos.
						Collaborate with others, customize your workspace, and
						link content to tell stories or build projects. This is
						more than just a place to organize your thoughts; it's
						your professional creative tool. Unleash your potential
						and bring your ideas to life.
					</p>
				</div>
			</div>
		</div>
	);
}
