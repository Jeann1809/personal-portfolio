"use client"

import { useLightbox } from "@/components/ui/Lightbox"

export function GalleryImage({ images, index, className, style }) {
  const { open } = useLightbox()
  const image = images[index]

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      onClick={() => open(images, index)}
      className={`block cursor-zoom-in border border-black/10 bg-tint-2 object-cover object-top transition-colors hover:border-black/30 ${className || ""}`}
      style={style}
    />
  )
}
