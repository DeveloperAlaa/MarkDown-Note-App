import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn";
import type { ButtonHTMLAttributes } from "react";



const buttonVariants = cva("inline-flex justify-center items-center px-3 py-1 rounded font-medium cursor-pointer outline-0", {
  variants: {
    variant: {
      primary: "bg-primary text-text hover:bg-[hsl(from_var(--color-primary)_h_s_20%)] focus-visible:bg-[hsl(from_var(--color-primary)_h_s_20%)]",
      outline: "border border-gray dark:text-gray-300 text-gray hover:bg-gray hover:text-text focus-visible:bg-gray focus-visible:text-text",
      danger: "border border-danger text-danger hover:bg-danger hover:text-text focus-visible:bg-danger focus-visible:text-text" ,
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button
    className={cn(buttonVariants({ variant }), className)}
    {...props} />
}
