import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-slate-200 cursor-pointer px-2.5 py-0.5 lg:py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-brand-700 focus:ring-offset-1",
  {
    variants: {
      variant: {
        default:
          "border-brand-400 bg-brand-900 text-slate-50 hover:bg-brand-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
        secondary:
          "border-secodary-900 bg-secondary-200 text-dark-500 hover:bg-secondary-300/70 ",
        outline: "border-brand-900 bg-white-1 hover:bg-brand-900 hover:border-brand-400 hover:text-white-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
