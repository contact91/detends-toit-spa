import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-normal rounded-[32px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-[2px_2px_4px_#0000003f] cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-button-1 text-button-1 hover:bg-[#c55a1a] disabled:bg-gray-400",
        primary:
          "bg-button-1 text-button-1 hover:bg-[#c55a1a] disabled:bg-gray-400",
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100",
        outline:
          "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400",
        highlight:
          "bg-highlight text-highlight-foreground shadow-xs hover:bg-highlight/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-2 text-base sm:px-8 sm:py-2.5 sm:text-lg",
        sm: "px-4 py-1.5 text-sm sm:px-6 sm:py-2 sm:text-base",
        lg: "px-8 py-3 text-lg sm:px-10 sm:py-3.5 sm:text-xl",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
