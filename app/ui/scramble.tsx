interface ScrambleProps {
	words: string[];
}

export default function Scramble({ words }: ScrambleProps) {
	const randomWord = words[Math.floor(Math.random() * words.length)];
	return <span suppressHydrationWarning>{randomWord}</span>;
}
