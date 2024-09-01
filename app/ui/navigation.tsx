import Logo from "./logo";
import { Button } from "./buttons";
import Delimiter from "./delimiter";
import Link from "next/link";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa6";

const pages = ["Features", "Privacy", "About", "Feedback"];

const simpified: boolean = true;
const fixed: boolean = false;
const modern: boolean = false;

export default function Navigation() {
	return (
		<div
			className={`${clsx({
				absolute: fixed === false,
				"bg-neutral-100/20 border-b backdrop-blur": simpified === true,
				"bg-neutral-700/20": simpified === false,
			})} z-50 px-5 backdrop-blur-sm flex justify-between items-center w-full h-16 top-0 border-white/15 dark:border-black/15`}>
			<div className="flex items-center justify-between">
				<Logo />
				<div className="w-96 flex justify-evenly">
					<Delimiter
						className="hidden lg:block"
						variant="line"
						height="medium"
					/>
					{pages.map((page, index) => {
						return (
							<Link
								tabIndex={index + 1}
								href={`/${page.toLowerCase()}`}
								key={page}
								className={clsx(
									"transition-all hidden lg:flex overflow-x-hidden hover:text-gray-500 focus:underline focus:decoration-violet-600 outline-none",
									{
										"underline-offset-4 decoration-gray-500 hover:underline":
											modern === true,
										"hover:-translate-y-1 hover:scale-105":
											modern === false,
									}
								)}>
								{page}
							</Link>
						);
					})}
				</div>
			</div>
			<div className="flex gap-2">
				<Button
					tabIndex={pages.length + 1}
					variant="secondary"
					text="Sign Up"
					endIcon={<FaArrowRight />}
					className="hidden lg:flex"
				/>
				<Button
					tabIndex={pages.length + 2}
					variant="primary"
					text="Login"
					endIcon={<FaArrowRight />}
					className="hidden lg:flex"
				/>
			</div>
		</div>
	);
}
