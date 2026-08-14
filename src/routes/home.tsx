import { useRef } from "react";
import Dialog from "../components/dialog";
import Button from "../components/ui/button";

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const onClose = () => {
    if (!dialogRef.current) return
    dialogRef.current.close()
  }
  const onOpen = () => {
    if (!dialogRef.current) return
    dialogRef.current.showModal()
  }




  return (
    <div className="p-10">

      <Button onClick={onOpen}>Edit Tags</Button>

      <Dialog ref={dialogRef}  onClose={onClose}  />

    </div>
  )
}
