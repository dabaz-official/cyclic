import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@cyclic/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        orange: "bg-orange-600 text-orange-100 hover:bg-orange-600/90",
        header: "focus:ring-offset-3 relative inline-flex h-fit w-fit border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-orange-300 transition-colors after:absolute after: inset-0 after:animate-pulse after:bg-orange-100 after:bg-opacity-100 after:blur-md after:transition-all after:duration-500 hover:border-orange-200/40 hover: text-orange-300 after:hover:bg-opacity-15 focus:ring-2"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-7 rounded-md px-2 py-1",
        md: "h-9 rounded-md px-3 py-1.5",
        lg: "h-11 rounded-md px-4 py-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
