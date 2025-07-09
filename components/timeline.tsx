"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Product Designer / AI Developer",
    company: "OLA Consulting",
    period: "May 2025 – Present",
    description:
      "Building out the grant/funding database UI for OLA to help Canadian nonprofit and First Nations organizations find relevant grants and streamline applications. Using v0 and other AI tools to design and build at the same time.",
    type: "work" as const,
  },
  {
    title: "Senior User Experience Designer",
    company: "Access Development",
    period: "July 2023 – Oct 2024",
    description:
      "Led UX design and research for a B2B discount platform, managing the design system and all product iterations. Increased monthly hotel product revenue by 30% through redesigned booking flows and enhanced theme park ticket purchases by 17%.",
    type: "work" as const,
  },
  {
    title: "User Experience Designer",
    company: "Ancestry",
    period: "June 2021 – Feb 2023",
    description:
      "Redesigned the messaging center and social sharing flow, improving user engagement. Created clickable prototypes for user interviews and usability testing. Contributed to growth team's efforts on optimizing onboarding experiences.",
    type: "work" as const,
  },
  // Combined entry for Master's + Pluralsight internship
  {
    type: "combined" as const,
    entries: [
      {
        title: "Product Designer",
        company: "Pluralsight",
        period: "May 2020 – Aug 2020",
        description:
          "Led the redesign of the most visited page on the platform, resulting in improved usability and user experience. Conducted stakeholder interviews and applied data-driven approach to design decisions.",
        type: "work" as const,
      },
      {
        title: "Master of Science in Human-Computer Interaction / Design",
        company: "Indiana University",
        period: "2019 – 2021",
        description:
          "Focused on user experience design, research methodologies, and applied psychology in digital interfaces. Specialized in design thinking, prototyping, and human-centered design principles.",
        type: "education" as const,
      },
    ],
  },
  {
    title: "Bachelor of Science in Neuroscience",
    company: "Purdue University",
    period: "2012 – 2016",
    description:
      "Studied applied psychology, cognitive science, and neuroscience fundamentals. Developed analytical thinking and research skills that inform my user-centered design approach.",
    type: "education" as const,
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-gray-300 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => {
        // Handle combined entry (Master's + Pluralsight)
        if (experience.type === "combined") {
          return (
            <div key={index} className="relative z-10">
              {isMobile ? (
                // Mobile: Stack vertically with Pluralsight on top
                <div className="space-y-6">
                  {experience.entries.map((entry, entryIndex) => (
                    <motion.div
                      key={entryIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: entryIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 transition-all duration-300 shadow-lg">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-orange-500/10 rounded-xl blur opacity-25 transition duration-1000"></div>

                        <div className="relative">
                          <div className="flex items-start gap-3 mb-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                                entry.type === "work"
                                  ? "bg-gradient-to-r from-orange-500 to-red-orange-500"
                                  : "bg-gradient-to-r from-green-500 to-emerald-500"
                              }`}
                            >
                              {entry.type === "work" ? (
                                <Briefcase className="h-4 w-4 text-white" />
                              ) : (
                                <GraduationCap className="h-4 w-4 text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-dark-text">{entry.title}</h3>
                              <div className="text-dark-text-light mb-4">
                                {entry.company} | {entry.period}
                              </div>
                            </div>
                          </div>
                          <p className="text-dark-text-light">{entry.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Desktop: Side by side
                <div className="flex items-start gap-8">
                  {experience.entries.map((entry, entryIndex) => (
                    <motion.div
                      key={entryIndex}
                      className="flex-1"
                      initial={{ opacity: 0, x: entryIndex === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: entryIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 transition-all duration-300 shadow-lg">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-orange-500/10 rounded-xl blur opacity-25 transition duration-1000"></div>

                        <div className="relative">
                          <div className="flex items-start gap-3 mb-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                                entry.type === "work"
                                  ? "bg-gradient-to-r from-orange-500 to-red-orange-500"
                                  : "bg-gradient-to-r from-green-500 to-emerald-500"
                              }`}
                            >
                              {entry.type === "work" ? (
                                <Briefcase className="h-4 w-4 text-white" />
                              ) : (
                                <GraduationCap className="h-4 w-4 text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-dark-text">{entry.title}</h3>
                              <div className="text-dark-text-light mb-4">
                                {entry.company} | {entry.period}
                              </div>
                            </div>
                          </div>
                          <p className="text-dark-text-light">{entry.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Timeline dot for combined entry */}
              {!isMobile && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-green-500 z-10 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </motion.div>
                </div>
              )}
            </div>
          )
        }

        // Handle regular single entries
        return (
          <div
            key={index}
            className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <motion.div
              className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 transition-all duration-300 shadow-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-red-orange-500/10 rounded-xl blur opacity-25 transition duration-1000"></div>

                <div className="relative">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                        experience.type === "work"
                          ? "bg-gradient-to-r from-orange-500 to-red-orange-500"
                          : "bg-gradient-to-r from-green-500 to-emerald-500"
                      }`}
                    >
                      {experience.type === "work" ? (
                        <Briefcase className="h-4 w-4 text-white" />
                      ) : (
                        <GraduationCap className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark-text">{experience.title}</h3>
                      <div className="text-dark-text-light mb-4">
                        {experience.company} | {experience.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-dark-text-light">{experience.description}</p>
                </div>
              </div>
            </motion.div>

            {!isMobile && (
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                  className={`w-6 h-6 rounded-full z-10 flex items-center justify-center ${
                    experience.type === "work"
                      ? "bg-gradient-to-r from-orange-500 to-red-orange-500"
                      : "bg-gradient-to-r from-green-500 to-emerald-500"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </motion.div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
