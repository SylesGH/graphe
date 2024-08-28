import Navigation from "./ui/navigation";
import Intro from "./ui/main/intro";
import Buddy from "./ui/main/template";
import Watermark from "./ui/watermark";

export default function Home() {
	return (
		<div>
			<Watermark />
			<Navigation />
			<Intro />
			<Buddy />
			<Buddy />
		</div>
	);
}
