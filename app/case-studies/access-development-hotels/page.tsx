"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Users, Search, TrendingUp, MapPin, Star, CreditCard, Mail, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function AccessDevelopmentHotelsCaseStudy() {
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
            <Link href="/" className="flex items-center gap-2 text-dark-text hover:text-[#046BD9] transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setContactOverlayOpen(true)}
                className="text-dark-text-light hover:text-[#046BD9] transition-colors"
              >
                Get In Touch
              </button>
              <Link
                href="https://drive.google.com/file/d/1PWsfoHbpUWCn_Ig5qpyqnaorK-eFnXBf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-dark-text-light hover:text-[#046BD9] transition-colors"
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#046BD9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#046BD9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <img src="/images/access-logo.png" alt="Access Development Logo" className="h-16 mx-auto mb-6" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#046BD9] to-[#046BD9]">
                Hotel Booking Redesign
              </span>
            </h1>

            <p className="text-xl text-dark-text-light max-w-3xl mx-auto mb-8">
              Redesigning the hotel booking experience to increase conversion rates and improve user satisfaction,
              resulting in a 30% increase in monthly revenue.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-dark-text-light">
              <span className="px-3 py-1 bg-[#046BD9]/10 text-[#046BD9] rounded-full">UX Design</span>
              <span className="px-3 py-1 bg-[#046BD9]/10 text-[#046BD9] rounded-full">User Research</span>
              <span className="px-3 py-1 bg-[#046BD9]/10 text-[#046BD9] rounded-full">A/B Testing</span>
              <span className="px-3 py-1 bg-[#046BD9]/10 text-[#046BD9] rounded-full">Conversion Optimization</span>
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
              <h3 className="font-bold text-[#046BD9] mb-2">My Role</h3>
              <p className="text-dark-text-light text-sm">
                Senior UX Designer responsible for the complete redesign of the hotel booking flow and user experience
                optimization
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-[#046BD9] mb-2">Team</h3>
              <p className="text-dark-text-light text-sm">4 developers, 1 PM, 1 Data Analyst, UX Research support</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-[#046BD9] mb-2">Timeline</h3>
              <p className="text-dark-text-light text-sm">4 months</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-[#046BD9] mb-2">Tools</h3>
              <p className="text-dark-text-light text-sm">Figma, Hotjar, Google Analytics, Optimizely, Maze</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-gradient-to-br from-[#046BD9]/5 to-blue-50 relative">
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
              A data-driven approach to redesigning the hotel booking experience for better conversion and user
              satisfaction.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#046BD9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-[#046BD9] mb-2">Research & Analysis</h3>
                <p className="text-dark-text-light text-sm">
                  Analyzed user behavior data, conducted usability testing, and identified key pain points in the
                  existing booking flow
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#046BD9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-[#046BD9] mb-2">Ideation & Wireframing</h3>
                <p className="text-dark-text-light text-sm">
                  Created multiple design concepts focusing on simplified booking flows and improved information
                  architecture
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#046BD9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-[#046BD9] mb-2">Prototyping & Testing</h3>
                <p className="text-dark-text-light text-sm">
                  Built interactive prototypes and conducted user testing to validate design decisions and gather
                  feedback
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#046BD9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-[#046BD9] mb-2">Implementation & Optimization</h3>
                <p className="text-dark-text-light text-sm">
                  Launched the redesigned experience with A/B testing and continuous optimization based on performance
                  metrics
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text text-left mb-12">The Challenge</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: What We Started With */}
              <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-8 shadow-none">
                <h3 className="text-xl font-bold text-orange-600 mb-6">What We Started With</h3>
                <ul className="space-y-3 text-dark-text-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Low conversion rates on hotel bookings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Complex and confusing booking flow
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Poor mobile experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Lack of trust indicators and social proof
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Inconsistent design patterns across the platform
                  </li>
                </ul>
              </div>

              {/* Right Column: Original Interface Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg">
                  <img
                    src="/images/access-old-desktop.png"
                    alt="Original hotel booking interface"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="text-sm text-dark-text-light mt-4">
                  Original booking interface with complex navigation and poor visual hierarchy
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text text-left mb-12">User Research & Insights</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#046BD9] mb-6">Research Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[#046BD9] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-text">User Interviews</h4>
                      <p className="text-dark-text-light text-sm">
                        Conducted 20+ interviews with existing customers to understand booking behavior and pain points
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-[#046BD9] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-text">Analytics Analysis</h4>
                      <p className="text-dark-text-light text-sm">
                        Deep dive into user behavior data, heat maps, and conversion funnels to identify drop-off points
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-[#046BD9] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-dark-text">Competitive Analysis</h4>
                      <p className="text-dark-text-light text-sm">
                        Analyzed leading hotel booking platforms to identify best practices and opportunities for
                        differentiation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#046BD9] mb-6">Key Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#046BD9]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="h-6 w-6 text-[#046BD9]" />
                    </div>
                    <h4 className="font-semibold text-dark-text mb-2">Search & Filter Issues</h4>
                    <p className="text-dark-text-light text-sm">
                      Users struggled with complex search filters and couldn't easily find relevant hotels
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#046BD9]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="h-6 w-6 text-[#046BD9]" />
                    </div>
                    <h4 className="font-semibold text-dark-text mb-2">Pricing Transparency</h4>
                    <p className="text-dark-text-light text-sm">
                      Lack of clear pricing information led to cart abandonment and user frustration
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#046BD9]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="h-6 w-6 text-[#046BD9]" />
                    </div>
                    <h4 className="font-semibold text-dark-text mb-2">Trust & Social Proof</h4>
                    <p className="text-dark-text-light text-sm">
                      Users needed more reviews, ratings, and trust indicators to feel confident booking
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text text-left mb-12">Solutions & Features</h2>

            <div className="space-y-20">
              {/* Improved Search Bar */}
              <div>
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#046BD9]/10 rounded-full flex items-center justify-center">
                      <Search className="h-5 w-5 text-[#046BD9]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Improved Search Bar</h3>
                  </div>
                  <p className="text-dark-text-light max-w-2xl mx-auto">
                    Enhanced search functionality with better autocomplete, location suggestions, and improved visual
                    design for easier hotel discovery.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-orange-600 mb-4">Before</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-old-search.png", "Old search interface")}
                    >
                      <img
                        src="/images/access-old-search.png"
                        alt="Old search interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#046BD9] mb-4">After</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-[#046BD9]/30 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-new-search.png", "New search interface")}
                    >
                      <img
                        src="/images/access-new-search.png"
                        alt="New search interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 max-w-md">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Smart location autocomplete
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Improved visual hierarchy
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Better date picker design
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessible Map */}
              <div>
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#046BD9]/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#046BD9]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Accessible Map</h3>
                  </div>
                  <p className="text-dark-text-light max-w-2xl mx-auto">
                    Interactive map view with better accessibility features, clearer location context, and improved
                    navigation for users with different abilities.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-orange-600 mb-4">Before</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-old-map.png", "Old map interface")}
                    >
                      <img
                        src="/images/access-old-map.png"
                        alt="Old map interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#046BD9] mb-4">After</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-[#046BD9]/30 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-new-map.png", "New map interface")}
                    >
                      <img
                        src="/images/access-new-map.png"
                        alt="New map interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 max-w-md">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Enhanced accessibility features
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Better location context
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Improved navigation controls
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Price Filtering */}
              <div>
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#046BD9]/10 rounded-full flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-[#046BD9]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Enhanced Price Filtering</h3>
                  </div>
                  <p className="text-dark-text-light max-w-2xl mx-auto">
                    Clearer price ranges and filtering options with better visual indicators to help users find hotels
                    within their budget more easily.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-orange-600 mb-4">Before</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-old-price.png", "Old price filtering interface")}
                    >
                      <img
                        src="/images/access-old-price.png"
                        alt="Old price filtering interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#046BD9] mb-4">After</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-[#046BD9]/30 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-new-price.png", "New price filtering interface")}
                    >
                      <img
                        src="/images/access-new-price.png"
                        alt="New price filtering interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 max-w-md">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Clearer price range sliders
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Better visual indicators
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Improved filter organization
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Currency Conversion */}
              <div>
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#046BD9]/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-[#046BD9]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Local Currency Conversion</h3>
                  </div>
                  <p className="text-dark-text-light max-w-2xl mx-auto">
                    Automatic currency conversion for international users with clear currency selection and real-time
                    conversion rates for better price transparency.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-orange-600 mb-4">Before</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-old-currency.png", "Old currency interface")}
                    >
                      <img
                        src="/images/access-old-currency.png"
                        alt="Old currency interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#046BD9] mb-4">After</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-[#046BD9]/30 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-new-currency.png", "New currency interface")}
                    >
                      <img
                        src="/images/access-new-currency.png"
                        alt="New currency interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 max-w-md">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Automatic currency detection
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Real-time conversion rates
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Clear currency selection
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simplified Rate View */}
              <div>
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#046BD9]/10 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-[#046BD9]" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text">Simplified Rate View</h3>
                  </div>
                  <p className="text-dark-text-light max-w-2xl mx-auto">
                    Streamlined rate display with clearer pricing information, better availability indicators, and
                    simplified booking options for faster decision-making.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-orange-600 mb-4">Before</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-old-rate.png", "Old rate view interface")}
                    >
                      <img
                        src="/images/access-old-rate.png"
                        alt="Old rate view interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-[#046BD9] mb-4">After</h4>
                    <div
                      className="bg-white/80 backdrop-blur-sm border border-[#046BD9]/30 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox("/images/access-new-rate.png", "New rate view interface")}
                    >
                      <img
                        src="/images/access-new-rate.png"
                        alt="New rate view interface"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 max-w-md">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Clearer pricing display
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Better availability indicators
                      </div>
                      <div className="flex items-center gap-2 text-sm text-dark-text-light">
                        <div className="w-2 h-2 bg-[#046BD9] rounded-full"></div>
                        Simplified booking flow
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-[#046BD9]/5 via-blue-50/50 to-cream-50"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark-text text-left">Results & Impact</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#046BD9] mb-6">Key Metrics After Redesign</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-dark-text-light">Monthly Revenue Increase</span>
                    <span className="font-bold text-green-600">+30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-dark-text-light">Invoice Amount Increase</span>
                    <span className="font-bold text-green-600">+15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-dark-text-light">Conversion Rate</span>
                    <span className="font-bold text-green-600">5.5% → 8%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() =>
                    openLightbox("/images/access-invoice-change.png", "Invoice amount and count changes over time")
                  }
                >
                  <img
                    src="/images/access-invoice-change.png"
                    alt="Invoice amount and count changes over time"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() =>
                    openLightbox("/images/access-conversion-rate.png", "Conversion rate improvement over time")
                  }
                >
                  <img
                    src="/images/access-conversion-rate.png"
                    alt="Conversion rate improvement over time"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Delivered */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark-text">Value Delivered</h2>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#046BD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-[#046BD9]" />
                  </div>
                  <h3 className="font-bold text-[#046BD9] mb-2">Increased Revenue</h3>
                  <p className="text-dark-text-light text-sm text-center">
                    30% increase in monthly hotel booking revenue through improved conversion rates
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#046BD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#046BD9]" />
                  </div>
                  <h3 className="font-bold text-[#046BD9] mb-2">Better User Experience</h3>
                  <p className="text-dark-text-light text-sm text-center">
                    Significantly improved user satisfaction scores and reduced support tickets
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#046BD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-[#046BD9]" />
                  </div>
                  <h3 className="font-bold text-[#046BD9] mb-2">Mobile Success</h3>
                  <p className="text-dark-text-light text-sm">
                    Mobile conversion rates improved by 78%, making mobile a key revenue driver
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
                <button className="border border-[#046BD9] text-[#046BD9] hover:bg-[#046BD9]/5 bg-transparent px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Get In Touch
                </button>
              </Link>
            </div>

            <div className="flex justify-center gap-6 text-dark-text-light">
              <Link
                href="https://www.linkedin.com/in/jake-heyerdahl-24626ab6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#046BD9] transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://drive.google.com/file/d/1PWsfoHbpUWCn_Ig5qpyqnaorK-eFnXBf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#046BD9] transition-colors"
              >
                Resume
              </Link>
              <Link
                href="https://www.instagram.com/jakehey/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#046BD9] transition-colors"
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
