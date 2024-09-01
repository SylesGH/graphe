"use client";

import Magic from "../magic";
import Scramble from "../scramble";
import { Button, ScrollDown } from "../buttons";
import { FaArrowRight } from "react-icons/fa6";
import { useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "./background";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
	const section = useRef<HTMLDivElement>(null);
	const fade = useRef<HTMLDivElement>(null);
	return (
		<div className="z-0 w-full h-screen relative top-0 p-5 lg:p-20 flex justify-start items-center overflow-hidden">
			<ScrollDown />
			<div className="border-black/15 border relative lg:top-8 w-full lg:w-[32em] h-3/4 lg:h-full backdrop-blur bg-gradient-to-b from-neutral-200/65 to-neutral-100/65 p-10 rounded-xl z-10">
				<h1 className="text-gray-800">
					<Scramble words={["Imagine!", "Spark!", "Unleash!"]} />
				</h1>
				<p className="text-gray-800">
					Unlock a new level of{" "}
					<Magic disabled effect="rainbow">
						creativity
					</Magic>{" "}
					with Graphé! Arrange your ideas, images, and videos exactly
					how you like.
					<Magic disabled effect="sparkle">
						Perfect
					</Magic>{" "}
					for solo brainstorming or teaming up with friends, it makes
					organizing and sharing your thoughts both easy and
					<Magic disabled effect="glint">
						{" "}
						enjoyable
					</Magic>
					.
				</p>
				<br />
				<Button
					tabIndex={6}
					text="Get Started"
					variant="secondary"
					look="pill"
					endIcon={<FaArrowRight />}
					className="hover:scale-105 origin-left"
				/>
			</div>
			<Background />
			<div
				ref={fade}
				className="absolute top-0 left-0 w-full h-full from-neutral-100 from-10% to-transparent to-50% bg-gradient-to-t z-0"></div>
		</div>
	);
}
