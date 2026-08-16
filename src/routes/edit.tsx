import { useNavigate, useParams } from "react-router";
import NoteForm from "../components/note-form";
import type { Note, Tag } from "../types";
import { useLocalStorage } from "../hooks/useStorage";
import { useState } from "react";

export default function Edit() {

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const [notes, setNotes] = useLocalStorage<Omit<Note, "tags">[]>("NOTES", [])
    const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

    const note = notes.find(n => n.id === id)


    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags.filter(t => note?.tagsId.includes(t.value)))
    const [title, setTitle] = useState(note?.title!)
    const [content, setContent] = useState(note?.content!)


    const onCreateOption = (newOption: string) => {
        const newTag = { value: crypto.randomUUID(), label: newOption.toLocaleLowerCase() }
        setTags(prev => [...prev, newTag])
        setSelectedTags(prev => [...prev, newTag])
    }

    const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title.trim() || !content.trim())
            return
        const tagsId = selectedTags.map(t => t.value)
        const updatedNote: Omit<Note, "tags"> = { ...note, title, tagsId, content }

        setNotes(prevNotes => {
            return prevNotes.map(n => {
                if (n.id === id) {
                    return updatedNote
                } else {
                    return n
                }
            })
        })
        navigate(`/${id}`)
    }


    return (
        <div className="w-full sm:max-w-[80%] md:max-w-[70%] mx-auto px-5">
            <header className="flex items-center justify-between py-10">
                <h1 className="dark:text-text text-gray text-3xl md:text-4xl font-semibold uppercase">EDIT NOTE</h1>
            </header>
            <div>
                <NoteForm
                    tags={tags}
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    selectedTags={selectedTags}
                    setSelectedTags={setSelectedTags}
                    onCreateOption={onCreateOption}
                    onSubmit={onSubmit}

                />
            </div>
        </div>
    )
}
