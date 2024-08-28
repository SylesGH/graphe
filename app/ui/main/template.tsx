interface BuddyProps {
    children?: React.ReactNode;
}

export default function Buddy({ children }: BuddyProps) {
    return (
        <div className="w-full h-screen">{children}</div>
    )
}