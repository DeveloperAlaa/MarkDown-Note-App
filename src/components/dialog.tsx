import { createPortal } from "react-dom";
import type { Tag } from "../types";

type DialogProps = {
    tags: Tag[]
    onClose: () => void
    onDelete: (id: string) => void
    onUpdate: (id: string, newValue: string) => void
    ref: React.RefObject<HTMLDialogElement | null>
}


export default function Dialog({tags, onDelete, onUpdate, onClose, ref }: DialogProps) {



    return createPortal(
        <dialog ref={ref} className="bg-amber-50 dark:bg-slate-800 dark:text-text border-0 rounded-xl shadow p-5 w-[90%] md:w-1/2 lg:w-1/3 h-fit fixed top-10 mx-auto">
            <header className="flex justify-between items-center">
                <h3>Edit Tags</h3>

                <button aria-label="Close Dialog" className="cursor-pointer text-gray dark:text-text" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x-icon lucide-x">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                </button>

            </header>
            <hr className="my-5 text-gray" />

            <div className="space-y-4">
                {tags.map(({ value, label }) => {

                    return <div className="flex justify-between items-center gap-4">
                        <input
                            key={value}
                            defaultValue={label}
                            onChange={e => onUpdate(value, e.target.value)}
                            type="text"
                            className={"flex-1 px-3 py-1.5 rounded outline-0 focus:ring-0 border border-gray focus:border-primary focus-visible:border-primary "}
                        />
                        <button aria-label="Delete Tag" className="cursor-pointer group" onClick={() => onDelete(value)}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--color-danger)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-x-icon lucide-x">
                                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                })}
            </div>
        </dialog>
        , document.getElementById("root")!)
}
