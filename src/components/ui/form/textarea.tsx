import { useId } from "react"

type InputProps = {
    label: string,
}


export default function TextArea({ label }: InputProps) {

    const inputId = `input-${useId()}`

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={inputId} className="font-semibold text-text">{label}</label>
            <textarea id={inputId}
                className="px-3 py-1.5 rounded outline-0 focus:ring-0 border border-gray focus:border-primary focus-visible:border-primary resize-none field-sizing-content min-h-80" />
        </div>
    )
}
