import { useId, type TextareaHTMLAttributes } from "react"
import { cn } from "../../../utils/cn"

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>


export default function TextArea({ className, ...props }: InputProps) {

    const inputId = `input-${useId()}`

    return (

        <textarea
            id={inputId}
            className={cn("px-3 py-1.5 rounded dark:text-text outline-0 focus:ring-0 border border-gray focus:border-primary focus-visible:border-primary resize-none field-sizing-content min-h-80", className)}
            {...props}
        />
    )
}
