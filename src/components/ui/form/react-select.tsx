import { useId } from "react"
import CreatableSelect from "react-select/creatable"
import makeAnimated from 'react-select/animated';


type ReactSelectProps = {
    label: string
}


export default function ReactSelect({ label }: ReactSelectProps) {
    const inputId = `input-${useId()}`
    const PRIMARY_COLOR = "#0092b8"


    const options: {
        label: string;
        value: string
    }[] = [
            {
                label: "One",
                value: "1"
            },
            {
                label: "Two",
                value: "2"
            },
            {
                label: "Three",
                value: "3"
            },
            {
                label: "Four",
                value: "4"
            },
        ]


    const animatedComponents = makeAnimated();

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={inputId} className="font-semibold text-text">{label}</label>
            <CreatableSelect isMulti
                components={animatedComponents}
                options={options}
                defaultValue={[options[3], options[0]]}
                theme={({ colors, spacing, ...theme }) => ({ ...theme, colors: { ...colors, primary: PRIMARY_COLOR }, spacing: { ...spacing, controlHeight: 50 } } as const)}

            />
        </div>
    )
}
