import Magic from "../magic";
import Scramble from "../scramble";

export default function Intro() {
	return (
		<div className="z-0 w-full h-[calc(100vh-4rem)] p-20 flex justify-start items-center">
			<div className="w-[32em] h-full from-neutral-200 to-neutral-100 bg-gradient-to-b p-10 rounded-xl">
				<h1 className="text-gray-800"><Scramble words={["Imagine!", "Spark!", "Unleash!"]} /></h1>
				<p className="text-gray-800">
					Unlock a new level of <Magic effect="rainbow">creativity</Magic> with our flexible board!
					Arrange your ideas, images, and videos exactly how you like.
					Perfect for solo brainstorming or teaming up with friends,
					it makes organizing and sharing your thoughts both easy and
					enjoyable. <Magic effect="glint">Lorem</Magic>dsads dsadsadsadsa<Magic effect="sparkle">Scramble</Magic>dsadsa
				</p>
			</div>
		</div>
	);
}
