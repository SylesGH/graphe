interface BuddyProps {
    children?: React.ReactNode;
}

export default function Buddy({ children }: BuddyProps) {
    return (
        <div className="w-full h-screen border-t-2 border-neutral-500">{children}</div>
    )
}