"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, FileText, Eye } from "lucide-react"
import { ImageLightbox } from "./image-lightbox"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link?: string
  linkType?: "pdf" | "figma" | "external" | "lightbox" | "internal"
  lightboxImage?: string
  comingSoon?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  linkType = "external",
  lightboxImage,
  comingSoon = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const handleClick = () => {
    if (comingSoon) return

    if (linkType === "lightbox" && lightboxImage) {
      setLightboxOpen(true)
    } else if (linkType === "internal" && link) {
      // Internal navigation will be handled by Link component
      return
    } else if (link) {
      if (linkType === "pdf") {
        const pdfPath = link.startsWith("/") ? link : `/${link}`
        window.open(pdfPath, "_blank", "noopener,noreferrer")
      } else {
        window.open(link, "_blank", "noopener,noreferrer")
      }
    }
  }

  const getIcon = () => {
    switch (linkType) {
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "figma":
        return <ExternalLink className="h-4 w-4" />
      case "lightbox":
        return <Eye className="h-4 w-4" />
      case "internal":
        return <Eye className="h-4 w-4" />
      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }

  const getLinkText = () => {
    switch (linkType) {
      case "pdf":
        return "View Case Study"
      case "figma":
        return "View Prototype"
      case "lightbox":
        return "View Overview"
      case "internal":
        return "View Case Study"
      default:
        return "View Case Study"
    }
  }

  const CardContent = () => (
    <div
      className={`relative h-full overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 transition-all duration-300 shadow-lg ${
        comingSoon
          ? "opacity-75 cursor-not-allowed"
          : (link || lightboxImage)
            ? "cursor-pointer group-hover:border-orange-500/50"
            : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-orange-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative h-full flex flex-col">
        <div className="relative overflow-hidden h-64 bg-white">
          <div
            className={`absolute inset-0 bg-gradient-to-b from-orange-500/20 to-red-orange-500/20 opacity-0 transition-opacity duration-300 z-10 ${!comingSoon ? "group-hover:opacity-100" : ""}`}
          ></div>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-contain transition-transform duration-700 ${isHovered && !comingSoon ? "scale-110" : "scale-100"}`}
          />

          {/* Overlay with link indicator */}
          {(link || lightboxImage) && !comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">{getIcon()}</div>
            </div>
          )}
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-dark-text">{title}</h3>
          <p className="text-dark-text-light flex-grow">{description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`group relative ${(link || lightboxImage) && !comingSoon ? "cursor-pointer" : ""}`}
        onClick={handleClick}
      >
        {/* Coming Soon Badge */}
        {comingSoon && (
          <div className="absolute top-4 right-4 z-20 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Coming Soon
          </div>
        )}

        {linkType === "internal" && link ? (
          <Link href={link}>
            <CardContent />
          </Link>
        ) : (
          <CardContent />
        )}
      </motion.div>

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageSrc={lightboxImage}
          imageAlt={`${title} - Design System Overview`}
        />
      )}
    </>
  )
}
