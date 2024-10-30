import * as React from "react"
import { cn } from "../../lib/utils.ts"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300"
    
    const variants = {
      default: "bg-gradient-to-r from-[#8D0BD1] via-[#CF13B3] to-[#E6196B] text-white shadow-lg hover:shadow-xl hover:opacity-90 transform hover:scale-[1.02]",
      outline: "border border-[#616166] text-[#616166] hover:bg-gray-50 transform hover:scale-[1.02]"
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button } 