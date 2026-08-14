import Tag from "./ui/tag";

type CardProps = {
    title: string;
    tags: { id: string, label: string }[]
}

export default function Card({ title, tags }: CardProps) {
    return (
        <div className="space-y-2 p-5 rounded-xl border shadow-primary hover:shadow hover:-translate-y-2 transition duration-300   border-primary">
            <h3 className="text-xl font-semibold text-gray truncate">{title}</h3>
            <ul className="flex flex-wrap gap-2">
                {
                    tags.map(({ id, label }) =>
                        (<li key={id}><Tag label={label} /></li>))
                }
            </ul>
        </div>
    )
}
