import { Link } from "react-router";
import Card from "../components/card";
import CardGrid from "../components/card-grid";
import Button from "../components/ui/button";
import Input from "../components/ui/form/input";
import Dialog from "../components/dialog";
import { useRef } from "react";
import CreatableSelect from "react-select/creatable";

export default function Home() {

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
              <Input id="title" className="dark:text-text" />
            </div>
          </div>
          <div className="md:flex-1">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-medium text-text">Tags</label>
              <CreatableSelect isMulti />
            </div>
          </div>
        </div>

        <CardGrid gap="1.5rem" cardMinWidth="230px">
          <Card title="Learn how to write MarkDown" tags={[{ label: "MarkDown", id: crypto.randomUUID() }, { label: "HTML", id: crypto.randomUUID() }]} />
          <Card title="Learn how to write MarkDown" tags={[{ label: "MarkDown", id: crypto.randomUUID() }, { label: "HTML", id: crypto.randomUUID() }]} />
          <Card title="Learn how to write MarkDown" tags={[{ label: "MarkDown", id: crypto.randomUUID() }, { label: "HTML", id: crypto.randomUUID() }]} />
          <Card title="Learn how to write MarkDown" tags={[{ label: "MarkDown", id: crypto.randomUUID() }, { label: "HTML", id: crypto.randomUUID() }]} />
        </CardGrid>

        <Dialog ref={dialogRef} onClose={onClose} />
      </main>
    </div>
  )
}
