import { Link } from "react-router";
import Select from "react-select";
import { useRef, useState } from "react";

import Card from "../components/card";
import CardGrid from "../components/card-grid";
import Button from "../components/ui/button";
import Input from "../components/ui/form/input";
import Dialog from "../components/dialog";
import { useLocalStorage } from "../hooks/useStorage";
import type { Note, Tag } from "../types";

export default function Home() {

  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])
  const [notes, setNotes] = useLocalStorage<Omit<Note, "tags">[]>("NOTES", [])
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [title, setTitle] = useState("")

  const filteredNotes = notes.filter(note => {

    const matchTitle = !title.trim() || note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())

    const matchTags = selectedTags.length === 0 || selectedTags.every(tag => note.tagsId.some(t => tag.value === t))

    return matchTitle && matchTags
  })


  const dialogRef = useRef<HTMLDialogElement>(null)

  const onOpen = () => {
    if (!dialogRef.current)
      return
    dialogRef.current.showModal()
  }

  const onClose = () => {
    if (!dialogRef.current)
      return
    dialogRef.current.close()
  }

  const onDelete = (id: string) => {
    setTags(tags => tags.filter(tag => tag.value !== id))
  }

  const onUpdate = (id: string, newLabel: string) => {
    setTags(tags.map(tag => tag.value === id ? { ...tag, label: newLabel } : tag))
  }


  return (
    <div className="w-full sm:max-w-[80%] md:max-w-[70%] mx-auto px-5">
      <header className="flex items-center justify-between py-10">
        <h1 className="dark:text-text text-gray text-3xl md:text-4xl font-semibold uppercase">NOTES</h1>
        <div className="flex gap-4">
          <Link to={"/new"}><Button>Create</Button></Link>
          <Button variant={"outline"} onClick={onOpen}>Edit Tags</Button>
        </div>
      </header>

      <main>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="md:flex-1">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-medium text-text">Title</label>
              <Input id="title" className="dark:text-text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="md:flex-1">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-medium text-text">Tags</label>
              <Select
                isMulti
                options={tags}
                value={selectedTags}
                onChange={(tags) => setSelectedTags([...tags])}
                styles={
                  {
                    control: (base) => ({
                      ...base,
                      backgroundColor: "transparent",

                      border: "1px solid oklch(44.6% 0.03 256.802)",
                      outline: "0px",

                    }),
                    input: (base) => ({
                      ...base,
                      color: "oklch(71.5% 0.143 215.221)",
                    }),
                  }
                }
                classNames={{
                  menuList: () => "bg-amber-100 text-gray border-2 rounded ",
                  menuPortal: () => "hover:bg-red-600"
                }}
              />
            </div>
          </div>
        </div>

        <CardGrid gap="1.5rem" cardMinWidth="230px">
          {
            filteredNotes.map(({ id, title, tagsId }) => {
              const noteTags = tags.filter(tag => tagsId.includes(tag.value))
              return (
                <Link to={`/${id}`} key={id}>
                  <Card key={id} title={title} tags={noteTags} />
                </Link>
              )
            })
          }
        </CardGrid>

        <Dialog ref={dialogRef} onClose={onClose} tags={tags} onDelete={onDelete} onUpdate={onUpdate} />
      </main>
    </div>
  )
}
