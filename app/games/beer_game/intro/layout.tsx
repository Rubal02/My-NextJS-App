export default function BeerGameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#eff2f4]">
            {children}
        </div>
    );
}
