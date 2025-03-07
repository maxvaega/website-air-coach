import type { HTMLAttributes } from "react"

interface LogoProps extends HTMLAttributes<SVGElement> {
  className?: string
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17 8v8l-5 3-5-3V8l5-3.5z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M9 14h6l-3 3z" />
    </svg>
  )
}

