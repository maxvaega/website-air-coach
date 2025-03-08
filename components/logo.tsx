import type { HTMLAttributes } from "react"
import Image from "next/image"

import type { ImgHTMLAttributes } from "react"

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      className={className}
      {...props}
      width={24} // Adjust the width as needed
      height={24} // Adjust the height as needed
    />
  )
}

