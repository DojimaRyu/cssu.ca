export default function ProfileContainer({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className="flex flex-wrap justify-center bg-white gap-4">{children}</div>
}
