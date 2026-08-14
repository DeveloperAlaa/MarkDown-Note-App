import Input from "./ui/form/input";


type DialogProps = {
    ref: React.RefObject<HTMLDialogElement | null>
    onClose: () => void
}


export default function Dialog({ ref, onClose }: DialogProps) {
    return (
        <dialog className="border-0 rounded-xl shadow p-5 w-[90%] md:w-1/2 lg:w-1/3 h-fit fixed top-10 mx-auto " ref={ref}>
            <header className="flex justify-between items-center">
                <h3>Edit Tags</h3>

                <button aria-label="Close Dialog" className="cursor-pointer text-gray" onClick={onClose}>
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
            <hr className="my-5 bg-gray" />

            <div className="space-y-4">
                <div className="flex justify-between items-center gap-4">
                    <Input className="flex-1 " />
                    <button aria-label="Delete Tag" className="cursor-pointer group">
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
                        {/* <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-x-icon lucide-circle-x fill-danger">
                            <circle cx="12" cy="12" r="10" />
                            <path d="m15 9-6 6" /><path d="m9 9 6 6" />
                        </svg> */}
                    </button>

                </div>
            </div>
        </dialog>
    )
}
