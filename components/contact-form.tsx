"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 transition-all duration-300 shadow-lg">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-orange-500/10 rounded-xl blur opacity-25 transition duration-1000"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-dark-text">Send Me a Message</h3>

          <form
            action="mailto:jakeheyerdahl@gmail.com"
            method="post"
            encType="text/plain"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 text-dark-text placeholder:text-dark-text-lighter"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 text-dark-text placeholder:text-dark-text-lighter"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="subject"
                placeholder="Subject"
                required
                className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 text-dark-text placeholder:text-dark-text-lighter"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500/20 text-dark-text placeholder:text-dark-text-lighter"
              />
            </div>
            <Button
              type="submit"
              className="w-full liquid-glass-contact text-orange-500 font-medium rounded-xl flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4 text-orange-500" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
