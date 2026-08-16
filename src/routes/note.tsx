import { Link, useNavigate, useParams } from "react-router"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

import Button from "../components/ui/button"
import { useLocalStorage } from "../hooks/useStorage"
import type { Note, Tag as TagType } from "../types"
import Tag from "../components/ui/tag"


export default function Note() {

    const [tags, setTags] = useLocalStorage<TagType[]>("TAGS", [])
    const [notes, setNotes] = useLocalStorage<Omit<Note, "tags">[]>("NOTES", [])

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const note = notes.find(n => n.id === id)
    const noteTags = tags.filter(t => note?.tagsId.includes(t.value))

    const onDelete = (id: string) => {
        setNotes(prev => prev.filter(n => n.id !== id))
    }

    return (
        <div className="w-full sm:max-w-[80%] md:max-w-[70%] mx-auto px-5">
            <header className="flex gap-4 items-start py-10">

                <div className="flex-1">
                    <Button variant={"outline"} onClick={() => navigate("..")} >Back</Button>
                </div>
                <Link to={`/${id}/edit`} ><Button>Edit</Button></Link>
                <Button variant={"danger"} onClick={() => onDelete(id!)} >Delete</Button>
            </header>
            <main>
                <div className="border-b border-gray pb-4 ">
                    <h1 className="dark:text-text text-gray text-2xl md:text-3xl font-semibold uppercase mb-4">{note?.title}</h1>
                    <div className="flex gap-2 flex-wrap"> {noteTags.map(t => (<Tag key={t.value} label={t.label} />))}</div>

                </div>
                <div className="dark:text-text text-gray min-h-40 p-4 ">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            a: ({ node, ...props }) => (
                                <a
                                    className="text-primary"
                                    {...props}
                                />
                            ),
                            table: ({ node, ...props }) => (
                                <table
                                    className="border-collapse border border-gray-300 my-4 w-full"
                                    {...props}
                                />
                            ),
                            th: ({ node, ...props }) => (
                                <th
                                    className="border border-gray-300 px-4 py-2 text-gray dark:text-text bg-amber-100 dark:bg-slate-600 font-bold"
                                    {...props}
                                />
                            ),
                            td: ({ node, ...props }) => (
                                <td className="border border-gray-300 px-4 py-2" {...props} />
                            ),
                            blockquote: ({ node, ...props }) => (
                                <blockquote
                                    className="border-l-4 border-amber-300 bg-amber-200 dark:border-slate-600 dark:bg-slate-700 dark:text-text pl-4 italic my-4 text-gray-600"
                                    {...props}
                                />
                            ),
                            img: ({ node, ...props }) => (
                                <img
                                    src={node?.properties.href}
                                    alt={node?.properties.alt}
                                    {...props}
                                    width={"75%"}
                                    style={{ display: "inline-block", borderRadius: ".5rem", objectFit: "cover", aspectRatio: "2/1", }}
                                />
                            ),

                        }}
                    >
                        {note?.content}
                    </ReactMarkdown>
                </div>
            </main >
        </div >
    )
}
