import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full  bg-background p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}>
      <div className="flex items-center gap-2">
        <div
          className="h-5 w-5 rounded-full bg-gradient-to-r from-amber-400 to-amber-700  transition-all duration-300 group-hover:scale-[100.8]">
          <img src="/whatsapp.svg" alt="" />
        </div>
        <span
          className="inline-block transition-all text-neutral-950 duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-neutral-900 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
