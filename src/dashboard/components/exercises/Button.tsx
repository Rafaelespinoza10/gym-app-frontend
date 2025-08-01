import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../libs";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
}

export const Button = ({ children, variant = "default", className = "", ...props }: ButtonProps) => {
  const base = "px-4 py-2 rounded-full font-medium text-sm transition-all";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
