import NoteForm from "../components/note-form";

export default function New() {

    return (
        <div className="w-full sm:max-w-[80%] md:max-w-[70%] mx-auto px-5">
            <header className="flex items-center justify-between py-10">
                <h1 className="dark:text-text text-gray text-3xl md:text-4xl font-semibold uppercase">NEW NOTE</h1>
            </header>
            <main>
                <NoteForm />
            </main>
        </div>
    )
}
