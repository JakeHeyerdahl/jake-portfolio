"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 transition-all duration-300 shadow-lg">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-orange-500/10 rounded-xl blur opacity-25 transition duration-1000"></div>

        <div className="relative text-dark-text">{children}</div>
      </div>
    </motion.div>
  )
}
