import Logo from "./logo";
import Button from "./buttons";
import Delimiter from "./delimiter";
import Link from "next/link";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa6";

const pages = ["Features", "Privacy", "About", "Feedback"];

const simpified: boolean = true;
const fixed: boolean = false;

export default function Navigation() {
	return (
		<div className={`${clsx({
			"absolute": fixed === false,
			"border-b backdrop-blur": simpified === true,
			"bg-neutral-700 bg-opacity-20": simpified === false,
		})} z-50 px-5 backdrop-blur-sm flex justify-between items-center w-full h-16 top-0 border-opacity-15 border-white dark:border-black dark:border-opacity-15`}>
			<div className="flex items-center justify-between">
				<Logo />
				<div className="w-96 flex justify-evenly">
					<Delimiter variant="line" height="medium" />
					{pages.map((page) => {
						return (
							<Link
								href={`/${page.toLowerCase()}`}
								key={page}
								className="transition-all flex overflow-x-hidden underline-offset-4 decoration-gray-500 hover:text-gray-500 hover:underline focus:underline focus:decoration-violet-600 outline-none">
								{page}
							</Link>
						);
					})}
				</div>
			</div>
			<div className="flex gap-2">
				
				<Button
					variant="primary"
					text="Login"
					endIcon={<FaArrowRight />}
				/>
			</div>
		</div>
	);
}
