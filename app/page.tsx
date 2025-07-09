"use client"

import Link from "next/link"
import { Linkedin, Mail, Instagram, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-cream-50 text-dark-text overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-red-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 pt-20 md:pt-16 lg:pt-20">
            <div className="space-y-2">
              <h2 className="text-5xl md:text-7xl font-bold text-dark-text">Designer</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-orange-500">
                Jake
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-orange-500">
                Heyerdahl
              </h1>
            </div>
            <p className="text-xl text-dark-text-light max-w-[600px]">
              I craft exceptional experiences for mission driven projects.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.instagram.com/jakehey/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full liquid-glass text-dark-text hover:text-dark-text"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jake-heyerdahl-24626ab6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full liquid-glass text-dark-text hover:text-dark-text"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:jakeheyerdahl@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full liquid-glass text-dark-text hover:text-dark-text"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8 relative">
            <div className="relative">
              <CreativeHero />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-30 pointer-events-none">
                <Button
                  variant="outline"
                  className="relative overflow-hidden group text-xl px-12 py-6 pointer-events-auto
           liquid-glass-hero text-dark-text font-medium rounded-2xl bg-transparent"
                  onClick={() => scrollToSection("projects")}
                >
                  <span className="relative z-10">View Projects</span>
                </Button>
                <Button
                  variant="outline"
                  className="relative overflow-hidden group text-xl px-12 py-6 pointer-events-auto
           liquid-glass-hero text-dark-text font-medium rounded-2xl bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  <span className="relative z-10">Contact Me</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="w-8 h-8 text-dark-text-lighter" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-red-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-orange-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/images/jake-bike.jpg"
                  alt="Jake Heyerdahl mountain biking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <GlassmorphicCard>
                <p className="text-lg text-dark-text-light">
                  I am a passionate experience/product designer and researcher, with experience building for both mobile
                  and desktop. I specialize in high level design thinking and prototyping.
                </p>
                <p className="text-lg text-dark-text-light mt-4">
                  I got into the design world through my Masters in Human Computer Interaction/design and I bring my
                  experience in applied psychology I gained in my neuroscience undergrad career.
                </p>
                <p className="text-lg text-dark-text-light mt-4">
                  When I am not designing you will find me in the mountains around salt lake city and the world, in the
                  garage working on splitboard prototypes or in the pottery playing with clay.
                </p>

                {/* Desktop layout - 2 columns */}
                <div className="hidden md:grid md:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-dark-text-lighter">Name</div>
                    <div className="font-medium text-dark-text">Jake Heyerdahl</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-dark-text-lighter">Email</div>
                    <div className="font-medium text-dark-text">jakeheyerdahl@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-dark-text-lighter">Location</div>
                    <div className="font-medium text-dark-text">Salt Lake City, Utah</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-dark-text-lighter">Availability</div>
                    <div className="font-medium text-green-600">Open to opportunities</div>
                  </div>
                </div>

                {/* Mobile layout - stacked, no email */}
                <div className="flex flex-col gap-4 mt-8 md:hidden">
                  <div className="space-y-1">
                    <div className="text-sm text-dark-text-lighter">Name</div>
                    <div className="font-medium text-dark-text">Jake Heyerdahl</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-dark-text-lighter">Location</div>
                    <div className="font-medium text-dark-text">Salt Lake City, Utah</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-dark-text-lighter">Availability</div>
                    <div className="font-medium text-green-600">Open to opportunities</div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Ancestry Message Center"
              description="Redesigned messaging center improving user engagement and communication flow. Added file attachments, reactions, faceted search, and conversation archiving."
              image="/images/ancestry-message-center.png"
              link="/case-studies/ancestry-message-center"
              linkType="internal"
            />
            <ProjectCard
              title="Access Development Hotels"
              description="Redesigned hotel booking flows resulting in 30% increase in monthly revenue."
              image="/images/access-development-hotels.png"
              link="/case-studies/access-development-hotels"
              linkType="internal"
            />
            <ProjectCard
              title="Ancestry Social Share Flow"
              description="Enhanced social sharing experience to improve user engagement and retention. Created commenting system, reactions, and universal sharing components."
              image="/images/ancestry-social-share-flow.png"
              link="https://drive.google.com/file/d/17QgLVMPWmyeNEG7ERwmoi6ayytQVtrEz/view?usp=drive_link"
              linkType="external"
            />
            <ProjectCard
              title="Access Development Design System"
              description="Led design system creation and management for B2B discount platform."
              image="/images/access-development-design-system.jpg"
              linkType="lightbox"
              lightboxImage="/images/access-design-system-overview.jpg"
            />
            <ProjectCard
              title="Pluralsight Learning Center"
              description="Redesigned the most visited page on the platform improving usability and UX."
              image="/images/pluralsight-learning-center.gif"
              link="https://drive.google.com/file/d/1B2osrcBVw6YZRs3Jloa7zz7LeBSqKGPl/view?usp=drive_link"
              linkType="external"
            />
            <ProjectCard
              title="Reset Wearable BioFeedback"
              description="Designed user experience for wearable biofeedback technology platform."
              image="/images/reset-wearable-biofeedback.jpg"
              link="https://drive.google.com/file/d/1SPa4llj_KNKveV76t_yDg5DTjuIYBnsq/view?usp=drive_link"
              linkType="external"
            />
            <ProjectCard
              title="OLA Canadian Non Profit Database"
              description="Building grant/funding database UI to help Canadian nonprofit and First Nations organizations."
              image="/images/ola-canadian-nonprofit-database.png"
              comingSoon={true}
            />
            <ProjectCard
              title="Pre-emt Wearable Addiction Intervention"
              description="Designed intervention system for wearable addiction prevention technology."
              image="/images/pre-emt-wearable-addiction-intervention.png"
              link="https://drive.google.com/file/d/1fENWr38v5QD_U5hN-Nh7Pxu44wUz261K/view?usp=drive_link"
              linkType="external"
            />
            <ProjectCard
              title="Eskenazi Museum AR Experience"
              description="Created augmented reality experience for museum visitors to enhance engagement."
              image="/images/eskenazi-museum-ar-experience.jpg"
              link="https://drive.google.com/file/d/1jOWkWt6C3s089V-RuEJ_3fZ6BjdeZASB/view?usp=sharing"
              linkType="external"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Experience" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Skills" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Figma" level={100} />
            <SkillBadge name="Design Systems" level={90} />
            <SkillBadge name="v0" level={85} />
            <SkillBadge name="Claude Code" level={80} />
            <SkillBadge name="Component Management" level={85} />
            <SkillBadge name="Clickable Prototypes" level={90} />
            <SkillBadge name="UserZoom" level={80} />
            <SkillBadge name="After Effects" level={85} />
            <SkillBadge name="Illustrator" level={90} />
            <SkillBadge name="Blender" level={75} />
            <SkillBadge name="Unity" level={70} />
            <SkillBadge name="Dovetail" level={75} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" />

          <div className="max-w-2xl mx-auto mt-16">
            <GlassmorphicCard>
              <div className="space-y-6">
                <Link
                  href="mailto:jakeheyerdahl@gmail.com"
                  className="flex items-center gap-4 hover:text-orange-500 transition-all duration-300 p-3 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-full liquid-glass items-center justify-center hidden md:flex">
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
                  <div className="w-12 h-12 rounded-full liquid-glass items-center justify-center hidden md:flex">
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
                  <div className="w-12 h-12 rounded-full liquid-glass items-center justify-center hidden md:flex">
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
                  <span className="text-dark-text-light">Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
    </div>
  )
}
