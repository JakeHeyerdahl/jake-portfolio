"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <motion.div
        className={`fixed top-8 left-8 z-50 max-w-[calc(100vw-4rem)] ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-4 py-3 rounded-full liquid-glass-nav safe-top">
          {isMobile ? (
            <div className="relative flex items-center justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="text-dark-text-light hover:text-orange-500 hover:bg-transparent transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <button
                onClick={scrollToTop}
                className="font-bold text-lg mr-4 transition-colors duration-300 hover:text-orange-500"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-orange-500">
                  Jake
                </span>
                <span className="text-dark-text">Heyerdahl</span>
              </button>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 text-sm font-medium text-dark-text-light hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-white/20"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                size="sm"
                className="ml-2 bg-gradient-to-r from-orange-500 to-red-orange-500 hover:from-red-orange-500 hover:to-orange-500 border-0 text-white transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link
                  href="https://drive.google.com/file/d/1PWsfoHbpUWCn_Ig5qpyqnaorK-eFnXBf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-cream-50/80 backdrop-blur-xl ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-dark-text hover:text-orange-500 transition-colors duration-300"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="mt-6 bg-gradient-to-r from-orange-500 to-red-orange-500 hover:from-red-orange-500 hover:to-orange-500 border-0 text-white transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link
                href="https://drive.google.com/file/d/1PWsfoHbpUWCn_Ig5qpyqnaorK-eFnXBf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
