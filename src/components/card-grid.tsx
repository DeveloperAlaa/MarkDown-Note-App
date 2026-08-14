type CardGridProps = {
    gap?: string
    cardMinWidth?: string
    children: React.ReactNode
}
export default function CardGrid({ gap = "1rem", cardMinWidth = "300px", children }: CardGridProps) {

    const styles = { "--gap-size": gap, "--card-min-width": cardMinWidth } as React.CSSProperties
    return (
        <div
            style={styles}
            className="grid gap-(--gap-size) grid-cols-[repeat(auto-fit,minmax(var(--card-min-width),1fr))]">
            {children}
        </div>
    )
}   
