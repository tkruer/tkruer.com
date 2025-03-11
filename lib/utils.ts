import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// @typescript-eslint/no-unused-vars
const cx = (...classes: ClassValue[]) => classes.filter(Boolean).join(' ')
