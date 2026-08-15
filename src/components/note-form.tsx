import { useState } from "react";
import { Link, useNavigate } from "react-router";
import CreatableSelect from "react-select/creatable";

import Button from "./ui/button";
import Input from "./ui/form/input";
import TextArea from "./ui/form/textarea";
import { useLocalStorage } from "../hooks/useStorage";
import type { Note, Tag } from "../types";



export default function NoteForm() {

  const navigate = useNavigate()

  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])
  const [notes, setNotes] = useLocalStorage<Omit<Note, "tags">[]>("NOTES", [])

  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  const onCreateOption = (newOption: string) => {
    const newTag = { value: crypto.randomUUID(), label: newOption.toLocaleLowerCase() }
    setTags(prev => [...prev, newTag])
    setSelectedTags(prev => [...prev, newTag])
  }

  return (
    <form onSubmit={(e) => {
      if (!title.trim() || !content.trim())
         return
        
      e.preventDefault()
      const newNote: Omit<Note, "tags"> = { id: crypto.randomUUID(), title, content, tagsId: selectedTags.map(tag => tag.value) }
      console.log(newNote);
      setNotes(prev => [...prev, newNote])
      navigate("/")


    }} className="space-y-5 pb-5">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="md:flex-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium text-text">Title</label>
            <Input required id="title" className="dark:text-text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="md:flex-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium text-text">Tags</label>
            <CreatableSelect
              isMulti
              options={tags}
              value={selectedTags}
              onChange={(tags) => setSelectedTags([...tags])}
              onCreateOption={onCreateOption}
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
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="font-semibold text-text">Content</label>
          <TextArea required value={content} onChange={e => setContent(e.target.value)} />
        </div>

      </div>
      <div className="flex justify-end items-center gap-4">
        <Button type="submit">Save</Button>
        <Link to="/">
          <Button type="button" variant={"outline"}>Cancel</Button>
        </Link>
      </div>
    </form>
  )
}
