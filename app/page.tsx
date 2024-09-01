import Navigation from "./ui/navigation";
import Intro from "./ui/main/intro";
import Buddy from "./ui/main/template";
import Watermark from "./ui/watermark";
import Preview from "./ui/main/preview";

export default function Home() {
	return (
		<div>
			{/* <Watermark /> */}
			<Navigation />
			<Intro />
			<Preview />
			{/* <Buddy>
				<h2>Section	1</h2>
			</Buddy>
			<Buddy>
				<h2>Section	2</h2>
			</Buddy>
			<Buddy>
				<h2>Section	3</h2>
			</Buddy>
			<Buddy>
				<h2>Section	4</h2>
			</Buddy> */}
		</div>
	);
}
