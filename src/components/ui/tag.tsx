

type TagProps = {
    label: string
}

export default function Tag({ label }: TagProps) {
    return (
        <span className="inline-flex justify-center items-center bg-primary px-2 py-0.5 rounded-4xl font-semibold">{label}</span>
    )
}
