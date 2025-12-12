"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "Empowering Careers. Building Digital Solutions.",
    description: "Join 5000+ students who have transformed their careers with our industry-leading training programs.",
    cta: "Enroll Now",
    link: "/training",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    title: "Expert IT Consulting & Development",
    description:
      "We deliver cutting-edge software solutions to help your business grow and succeed in the digital age.",
    cta: "Our Services",
    link: "/services",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    title: "100% Placement Assistance",
    description: "Our dedicated placement cell ensures you land your dream job at top tech companies.",
    cta: "Placement Stories",
    link: "/placement",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 text-center text-white">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">{slide.title}</h1>
              <p className="mb-8 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200">{slide.description}</p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
              >
                <Link href={slide.link}>{slide.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === current ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
