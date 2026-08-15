import { useId, type InputHTMLAttributes } from "react"
import { cn } from "../../../utils/cn"

type InputProps = InputHTMLAttributes<HTMLInputElement>


export default function Input({className, ...props }: InputProps) {

    const inputId = `input-${useId()}`
    return (
        // <div className="flex flex-col gap-2">
        //     <label htmlFor={inputId} className="font-semibold text-text">{label}</label>
        <input type="text"
            id={inputId}
            className={cn("w-full px-3 py-1.5 rounded outline-0 focus:ring-0 border border-gray focus:border-primary focus-visible:border-primary", className)}
            {...props}
        />
        // </div>
    )
}
