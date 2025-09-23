import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-button hover:shadow-lg transform hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-button hover:shadow-lg transform hover:-translate-y-0.5",
        accent: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-button hover:shadow-lg transform hover:-translate-y-0.5",
        hero: "bg-gradient-cta text-white font-semibold shadow-hero hover:shadow-xl transform hover:-translate-y-1 animate-pulse-glow",
        cta: "bg-secondary text-secondary-foreground hover:bg-secondary-hover font-semibold shadow-button hover:shadow-lg transform hover:-translate-y-0.5",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        ghost: "text-foreground hover:bg-muted",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg font-semibold",
        xl: "h-16 px-10 py-5 text-xl font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
