"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Search,
  Archive,
  Eye,
  UserCheck,
  Mail,
  Linkedin,
  Instagram,
} from "lucide-react"
import { motion } from "framer-motion"

export default function AncestryMessageCenterCaseStudy() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState("")
  const [lightboxAlt, setLightboxAlt] = useState("")
  const [contactOverlayOpen, setContactOverlayOpen] = useState(false)

  const openLightbox = (imageSrc: string, imageAlt: string) => {
    setLightboxImage(imageSrc)
    setLightboxAlt(imageAlt)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-cream-50 text-dark-text">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-dark-text hover:text-[#3C9600] transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setContactOverlayOpen(true)}
                className="text-dark-text-light hover:text-[#3C9600] transition-colors"
              >
                Get In Touch
              </button>
              <Link
                href="/resume/jake-heyerdahl-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-dark-text-light hover:text-[#3C9600] transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#3C9600] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#3C9600] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HDc8iTeu3myXdyvj6w684Y6rDGVPaa.png"
                alt="Ancestry Logo"
                className="h-16 mx-auto mb-6"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3C9600] to-[#3C9600]">
                Message Center
              </span>
            </h1>

            <p className="text-xl text-dark-text-light max-w-3xl mx-auto mb-8">
              Transforming Ancestry's messaging experience to improve user engagement, collaboration, and family
              connection through enhanced communication features.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-dark-text-light">
              <span className="px-3 py-1 bg-[#3C9600]/10 text-[#3C9600] rounded-full">UX Design</span>
              <span className="px-3 py-1 bg-[#3C9600]/10 text-[#3C9600] rounded-full">User Research</span>
              <span className="px-3 py-1 bg-[#3C9600]/10 text-[#3C9600] rounded-full">Design Systems</span>
              <span className="px-3 py-1 bg-[#3C9600]/10 text-[#3C9600] rounded-full">Prototyping</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-[#3C9600] mb-2">My Role</h3>
              <p className="text-dark-text-light text-sm">
                Sole designer on a team responsible for the message center and all social/collaborative experiences on
                Ancestry
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-[#3C9600] mb-2">Team</h3>
              <p className="text-dark-text-light text-sm">6 developers, 1 PM, UX Research resources</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-[#3C9600] mb-2">Timeline</h3>
              <p className="text-dark-text-light text-sm">7 months</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-[#3C9600] mb-2">Tools</h3>
              <p className="text-dark-text-light text-sm">Figma, Illustrator, UserZoom, Zoom, Rally</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-gradient-to-br from-[#3C9600]/5 to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-transparent to-cream-50 opacity-60"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cream-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream-50 to-transparent"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-text">Design Process</h2>
            <p className="text-xl text-dark-text-light">
              This was a long journey involving several teams and a whole lot of compromise.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MehGY8x8OxW79QInPnyfbUlOFCTBGb.png"
                alt="Design Process Flow"
                className="max-w-full h-auto"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#3C9600] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-[#3C9600] mb-2">Ideate</h3>
                <p className="text-dark-text-light text-sm">
                  Analyzed popular messaging services like Slack, Messenger, and WhatsApp to envision a greenfield
                  message center for Ancestry
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#3C9600] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-[#3C9600] mb-2">Interview</h3>
                <p className="text-dark-text-light text-sm">
                  Research team and myself conducted user interviews to understand current pain points and desired
                  features
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#3C9600] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-[#3C9600] mb-2">Build Features</h3>
                <p className="text-dark-text-light text-sm">
                  Expanded on initial designs based on user feedback and research insights
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#3C9600] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-[#3C9600] mb-2">Design System Integration</h3>
                <p className="text-dark-text-light text-sm">
                  Final refinements came from working with the design systems team and creating universal components
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Space */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text text-left">Opportunity Space</h2>
              <div className="hidden md:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ideate-sHNt7e38g0d8xGydsa2tjJJYsSvfpR.png"
                  alt="Ideate process step"
                  className="h-16 w-auto"
                />
              </div>
            </div>

            {/* Desktop and Mobile Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Desktop Before + What We Started With */}
              <div className="space-y-8 order-1 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldDT-NCTIFZG0lOCVHkK7Ctd9paOBffxQ6n.png",
                        "Old desktop messaging interface",
                      )
                    }
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldDT-NCTIFZG0lOCVHkK7Ctd9paOBffxQ6n.png"
                      alt="Old desktop messaging interface"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </motion.div>

                {/* What We Started With - same width as desktop image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="order-3 lg:order-2"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-8 shadow-none">
                    <h3 className="text-xl font-bold text-orange-600 mb-6">What We Started With</h3>
                    <ul className="space-y-3 text-dark-text-light">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        Bad chat experience
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        Confusing indicators
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        No file attachment capability
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        No archive or delete options
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        Forced users to third-party messaging
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Mobile Before - spans full height */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center order-2 lg:order-2"
              >
                <div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg flex justify-center items-center cursor-pointer hover:shadow-xl transition-shadow"
                  style={{ height: "fit-content", maxHeight: "100%" }}
                  onClick={() =>
                    openLightbox(
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20mock%20old-tLrqXlixl6lsJTCG57xtiFfgtbt0GN.png",
                      "Old mobile messaging interface",
                    )
                  }
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20mock%20old-tLrqXlixl6lsJTCG57xtiFfgtbt0GN.png"
                    alt="Old mobile messaging interface"
                    className="w-auto rounded-lg object-contain"
                    style={{ maxHeight: "600px" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Research */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text text-left">User Research</h2>
              <div className="hidden md:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interview-zUTXTRdVteZXMB5ExlyRbPhRY1cLaj.png"
                  alt="Interview process step"
                  className="h-16 w-auto"
                />
              </div>
            </div>

            {/* User Pain Points */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 mb-12 shadow-none">
              <h3 className="text-xl font-bold text-[#3C9600] mb-6">User Pain Points</h3>
              <div className="space-y-6">
                {/* First quote - Male avatar on left, yellow theme */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img src="/images/avatar-male.png" alt="User avatar" className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="inline-block p-4 rounded-lg border-l-4 bg-amber-50 border-amber-200">
                    <p className="text-dark-text-light italic whitespace-nowrap">
                      "I write all of my messages in Word and then copy and paste them into Ancestry"
                    </p>
                  </div>
                </div>

                {/* Second quote - Female avatar on right, yellow theme */}
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="flex-shrink-0">
                    <img src="/images/avatar-female.png" alt="User avatar" className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="inline-block p-4 bg-yellow-50 rounded-lg border-r-4 text-right border-amber-200">
                    <p className="text-dark-text-light italic whitespace-nowrap">
                      "Usually I take screenshots of the doc and then email the screenshot with a link to my source"
                    </p>
                  </div>
                </div>

                {/* Third quote - Female avatar on left, yellow theme */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img src="/images/avatar-female.png" alt="User avatar" className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="inline-block p-4 bg-yellow-50 rounded-lg border-l-4 border-amber-200">
                    <p className="text-dark-text-light italic whitespace-nowrap">
                      "I wish there was a way to clean up the inbox so I can get rid of the conversations I no longer
                      need"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#3C9600] mb-6">Research Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[#3C9600] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-text">User Interviews</h4>
                      <p className="text-dark-text-light text-sm">
                        Conducted in-depth interviews with 15+ active Ancestry users to understand current messaging
                        pain points and desired features.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-[#3C9600] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-text">Competitive Analysis</h4>
                      <p className="text-dark-text-light text-sm">
                        Analyzed messaging patterns in Slack, Messenger, WhatsApp, and other popular platforms to
                        identify best practices and user expectations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-[#3C9600] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-text">Usage Analytics</h4>
                      <p className="text-dark-text-light text-sm">
                        Reviewed existing message center metrics including engagement rates, drop-off points, and user
                        behavior patterns to identify key problem areas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="h-5 w-5 text-[#3C9600] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-text">Co-design Sessions</h4>
                      <p className="text-dark-text-light text-sm">
                        Facilitated collaborative design sessions with 8 power users to validate concepts and gather
                        feedback on early prototypes and wireframes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#3C9600] mb-6">Key Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[#3C9600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Archive className="h-6 w-6 text-[#3C9600]" />
                    </div>
                    <h4 className="font-semibold text-dark-text mb-2">File Sharing</h4>
                    <p className="text-dark-text-light text-sm">
                      People want to attach and send things they find on Ancestry
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[#3C9600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Archive className="h-6 w-6 text-[#3C9600]" />
                    </div>
                    <h4 className="font-semibold text-dark-text mb-2">Inbox Management</h4>
                    <p className="text-dark-text-light text-sm">People want to be able to oraganize their inbox</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[#3C9600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-6 w-6 text-[#3C9600]" />
                    </div>
                    <h4 className="font-semibold text-dark-text mb-2">Search Capability</h4>
                    <p className="text-dark-text-light text-sm">People want more robust search functionality</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[#3C9600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-6 w-6 text-[#3C9600]" />
                    </div>
                    <h4 className="font-semibold text-dark-text mb-2">System Feedback</h4>
                    <p className="text-dark-text-light text-sm">
                      People need more feedback and clearer indicators from the system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text text-left">Solutions & Features</h2>
              <div className="hidden md:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Build%20features-3KjY39iPvz2L0shQ2QmbBWYf7rGYij.png"
                  alt="Build features process step"
                  className="h-16 w-auto"
                />
              </div>
            </div>

            <div className="space-y-16">
              {/* Search & Navigation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-efk0n2LKoVx4VKZz38KnYoKsAV4yy6.png",
                        "Message center with search and navigation features",
                      )
                    }
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-efk0n2LKoVx4VKZz38KnYoKsAV4yy6.png"
                      alt="Message center with search and navigation features"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <Search className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Faceted Search </h3>
                  </div>
                  <p className="text-dark-text-light mb-4">
                    We added faceted search so people could more easily search through full inboxes with lengthy
                    correspondences. Specfically with the ability to search for files and photos since those were
                    identified as vital.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Search by contact name
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Search message content
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Search for linked photos or files
                    </div>
                  </div>
                </div>
              </div>

              {/* User Profiles & DNA */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Enhanced User Profiles</h3>
                  </div>
                  <p className="text-dark-text-light mb-4">
                    Peple complained about the low response rate from cold messages. Thus, we surfaced profile facts
                    like last sign-in date and DNA relationship to help folks gauge likliness of reply.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Last sign-in date visibility
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      DNA relationship preview
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Family tree connections
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() =>
                    openLightbox(
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3kAMZTFvCRIhDhu7YPFoNcBXIg6HRo.png",
                      "User profile panels showing DNA relationships and family connections",
                    )
                  }
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3kAMZTFvCRIhDhu7YPFoNcBXIg6HRo.png"
                    alt="User profile panels showing DNA relationships and family connections"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Archive & Management */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Nl0mSysbqOexjPF4Cfc9FlEiduZawp.png",
                        "Archive and conversation management options",
                      )
                    }
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Nl0mSysbqOexjPF4Cfc9FlEiduZawp.png"
                      alt="Archive and conversation management options"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <Archive className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Archiving </h3>
                  </div>
                  <p className="text-dark-text-light mb-4">
                    Archiving is an expected function of a messaging service and can also help folks who have an inbox
                    full of unresponded to messages.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Archive entire conversations
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Seperate inbox to view archived messages
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Print conversation option
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Composition */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Improved Message Composition</h3>
                  </div>
                  <p className="text-dark-text-light mb-4">
                    People often cited needing to send files that were unsupported by Ancestry Messenger as a reason
                    they used text or email. We added file attachment capabilities and emoji support to make
                    conversations more engaging and functional. We also shrunk the mobile footprint of the input bar so
                    that folks with smaller screen could write longer messages.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      File attachment support
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Emoji reactions and inline emojis
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Smaller stack height to improve mobile experience
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() =>
                    openLightbox(
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zdKf7xFXWIelYYpQD1UbPJEFa34LjT.png",
                      "Message composition interface with attachment and emoji capabilities",
                    )
                  }
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zdKf7xFXWIelYYpQD1UbPJEFa34LjT.png"
                    alt="Message composition interface with attachment and emoji capabilities"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Hidden Messages */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZFAMkJALjjClA2OiPQ8gzkwwqzWbqH.png",
                        "Hidden message functionality with restore option",
                      )
                    }
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZFAMkJALjjClA2OiPQ8gzkwwqzWbqH.png"
                      alt="Hidden message functionality with restore option"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <Eye className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Sensetive Message Hiding &amp; Restoration</h3>
                  </div>
                  <p className="text-dark-text-light mb-4">
                    Sometimes folks get a message that is triggering, and they don't want to see it at the moment, but
                    they think the overall conversation is still valuable. For those situations, we gave people the
                    ability to hide individual messages with the option to restore them later.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design System Integrations */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text text-left">Design System Integrations</h2>
              <div className="hidden md:block">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20system%20intergration-pXGgSe0OOyU9fUCWTGFfQ3l6U4agq4.png"
                  alt="Design system integration process step"
                  className="h-16 w-auto"
                />
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 mb-16">
              <p className="text-lg text-dark-text-light text-center">
                The goal of the newly founded design system team was to reduce the number of novel components across the
                platform. Since the message center was the first large sclae redesign after the design system was
                finalized, we helped create standards.
              </p>
            </div>

            <div className="space-y-16">
              {/* Secondary Header & Nested Pages */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Secondary Header</h3>
                  </div>
                  <p className="text-dark-text-light mb-6">
                    Created a universal context-specific action space that users could find consistently across
                    Ancestry.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Universal navigation pattern
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Context-specific actions
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() =>
                    openLightbox(
                      "/images/secondary-header.png",
                      "Secondary header showing universal navigation pattern",
                    )
                  }
                >
                  <img
                    src="/images/secondary-header.png"
                    alt="Secondary header showing universal navigation pattern"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Nested Pages */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => openLightbox("/images/nested-pages.png", "Nested pages navigation structure")}
                  >
                    <img
                      src="/images/nested-pages.png"
                      alt="Nested pages navigation structure"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <Archive className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Nested Pages</h3>
                  </div>
                  <p className="text-dark-text-light mb-6">
                    Created for the Archives and personal inboxes, opening opportunities to nest pages along a
                    breadcrumb path or dissect complex pages.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Hierarchical navigation
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Specialized page types
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Improved organization
                    </div>
                  </div>
                </div>
              </div>

              {/* Threaded Conversations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Threaded Conversations</h3>
                  </div>
                  <p className="text-dark-text-light mb-6">
                    Designed to work for forums and comments across platform. Allows for better rich text editing and
                    group messaging.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Rich text editing
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Group messaging support
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => openLightbox("/images/threaded-pages.jpg", "Threaded conversation interface")}
                >
                  <img
                    src="/images/threaded-pages.jpg"
                    alt="Threaded conversation interface"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Content Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox("/images/content-cards.png", "Content cards for sharing sources and information")
                    }
                  >
                    <img
                      src="/images/content-cards.png"
                      alt="Content cards for sharing sources and information"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#3C9600]/10 rounded-full flex items-center justify-center">
                      <Search className="h-5 w-5 text-[#3C9600]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Content Cards</h3>
                  </div>
                  <p className="text-dark-text-light mb-6">
                    Used site wide where ever content is shared, specifically in the new social share flow.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Source citation
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Share to message center continuity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Delivered */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-[#3C9600]/5 via-green-50/50 to-cream-50"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark-text text-left">Final designs</h2>

            {/* Desktop Comparison */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <h4 className="text-lg font-semibold text-orange-600 mb-4">Before</h4>
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldDT-NCTIFZG0lOCVHkK7Ctd9paOBffxQ6n.png",
                        "Old desktop messaging interface",
                      )
                    }
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldDT-NCTIFZG0lOCVHkK7Ctd9paOBffxQ6n.png"
                      alt="Old desktop messaging interface"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-dark-text-light mt-4 text-left">
                    Basic messaging with limited functionality and poor user experience
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <h4 className="text-lg font-semibold text-[#3C9600] mb-4">After</h4>
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-[#3C9600]/30 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%2BDT-yeSECRRRtdBg6RmNtAHakEauUY1te6.png",
                        "New desktop messaging interface",
                      )
                    }
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%2BDT-yeSECRRRtdBg6RmNtAHakEauUY1te6.png"
                      alt="New desktop messaging interface"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-dark-text-light mt-4 text-left">
                    Enhanced messaging with rich features, better navigation, and improved user profiles
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Mobile Comparison */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <h4 className="text-lg font-semibold text-orange-600 mb-4">Before</h4>
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-4 shadow-lg flex justify-center cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20mock%20old-tLrqXlixl6lsJTCG57xtiFfgtbt0GN.png",
                        "Old mobile messaging interface",
                      )
                    }
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20mock%20old-tLrqXlixl6lsJTCG57xtiFfgtbt0GN.png"
                      alt="Old mobile messaging interface"
                      className="h-80 w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-dark-text-light mt-4 text-left">
                    Basic conversation list with minimal visual hierarchy
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <h4 className="text-lg font-semibold text-[#3C9600] mb-4">After</h4>
                  <div
                    className="bg-white/80 backdrop-blur-sm border border-[#3C9600]/30 rounded-xl p-4 shadow-lg flex justify-center cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() =>
                      openLightbox(
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20mock%20new-VQY5l1kt16HMKgBbLUyqxAw2Lk3vPw.png",
                        "New mobile messaging interface",
                      )
                    }
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20mock%20new-VQY5l1kt16HMKgBbLUyqxAw2Lk3vPw.png"
                      alt="New mobile messaging interface"
                      className="h-80 w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-dark-text-light mt-4 text-left">
                    Improved conversation previews with better visual design and enhanced functionality
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Features Delivered - Smaller container, two columns */}
            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <div className="bg-white/80 backdrop-blur-sm border border-[#3C9600]/30 rounded-xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Clear, intuitive indicators
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Group messaging
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Faceted search
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Direct file attachment
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Dedicated settings
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Rich conversation features
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Archive/delete/hide options
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark-text-light">
                      <div className="w-2 h-2 bg-[#3C9600] rounded-full"></div>
                      Emotional conveyors (emojis & reactions)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark-text">Value delivered </h2>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3C9600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-[#3C9600]" />
                  </div>
                  <h3 className="font-bold text-[#3C9600] mb-2">Increased Engagment </h3>
                  <p className="text-dark-text-light text-sm text-center">
                    More users engaging in conversations within the platform instead of using third party messaging apps
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3C9600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#3C9600]" />
                  </div>
                  <h3 className="font-bold text-[#3C9600] mb-2">Reduced Churn</h3>
                  <p className="text-dark-text-light text-sm text-center">
                    Fewer users canceling monthly subscriptions
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3C9600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="h-8 w-8 text-[#3C9600]" />
                  </div>
                  <h3 className="font-bold text-[#3C9600] mb-2">Power User Satisfaction </h3>
                  <p className="text-dark-text-light text-sm">
                    Direct feedback from professional genealogists that the features added will make their jobs easier{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="py-16 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8 text-dark-text">Interested in learning more?</h3>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/#projects">
                <button className="bg-gradient-to-r from-orange-500 to-red-orange-500 hover:from-red-orange-500 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  View More Projects
                </button>
              </Link>
              <Link href="/#contact" className="inline-flex">
                <button className="border border-[#3C9600] text-[#3C9600] hover:bg-[#3C9600]/5 bg-transparent px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Get In Touch
                </button>
              </Link>
            </div>

            <div className="flex justify-center gap-6 text-dark-text-light">
              <Link
                href="https://www.linkedin.com/in/jake-heyerdahl-24626ab6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3C9600] transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="/resume/jake-heyerdahl-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3C9600] transition-colors"
              >
                Resume
              </Link>
              <Link
                href="https://www.instagram.com/jakehey/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3C9600] transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${lightboxOpen ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setLightboxOpen(false)} />
        <div className="relative max-w-7xl max-h-[90vh] w-full">
          <button
            className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10 p-2 rounded-full"
            onClick={() => setLightboxOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-8 shadow-lg">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-orange-500/10 rounded-xl blur opacity-25"></div>
            <div className="relative">
              <img
                src={lightboxImage || "/placeholder.svg"}
                alt={lightboxAlt}
                className="max-w-full max-h-[75vh] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Overlay */}
      {contactOverlayOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setContactOverlayOpen(false)} />
          <div className="relative max-w-2xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10 p-2 rounded-full"
              onClick={() => setContactOverlayOpen(false)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-8 shadow-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-orange-500/10 rounded-xl blur opacity-25"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 text-dark-text">Contact Information</h3>
                <div className="space-y-6">
                  <Link
                    href="mailto:jakeheyerdahl@gmail.com"
                    className="flex items-center gap-4 hover:text-orange-500 transition-all duration-300 p-3 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm text-dark-text-lighter">Email</div>
                      <div className="font-medium text-dark-text">jakeheyerdahl@gmail.com</div>
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/jake-heyerdahl-24626ab6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-orange-500 transition-all duration-300 p-3 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm text-dark-text-lighter">LinkedIn</div>
                      <div className="font-medium text-dark-text">linkedin.com/in/jake-heyerdahl-24626ab6</div>
                    </div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/jakehey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:text-orange-500 transition-all duration-300 p-3 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm text-dark-text-lighter">Instagram</div>
                      <div className="font-medium text-dark-text">instagram.com/in/jakehey</div>
                    </div>
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-medium mb-4 text-dark-text">Current Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-dark-text-light">
                      Available for freelance work and full-time opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
