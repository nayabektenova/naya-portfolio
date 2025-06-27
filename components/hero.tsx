"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const phrases = ["Software Development Engineer"]

  useEffect(() => {
    const currentPhrase = phrases[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, phrases])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-300/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/2 rounded-full blur-2xl animate-ping delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-300/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-pink-300 w-8 h-8 mr-4 animate-spin" />
            <span className="text-pink-300 text-lg font-medium">Hello, I'm</span>
            <Sparkles className="text-pink-300 w-8 h-8 ml-4 animate-spin" style={{ animationDirection: "reverse" }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-pink-100 to-pink-200 bg-clip-text text-transparent animate-gradient">
            Naya Bektenova
          </h1>

          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-4xl text-pink-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            <Link
              href="#projects"
              className="group bg-gradient-to-r from-pink-300 to-pink-200 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-300/25 transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Explore My Work
                <Sparkles className="ml-2 w-5 h-5 group-hover:animate-spin" />
              </span>
            </Link>
            <Link
              href="#contact"
              className="group border-2 border-pink-300 text-pink-300 px-8 py-4 rounded-full font-semibold hover:bg-pink-300 hover:text-gray-900 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300/20"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ChevronDown className="text-pink-300 w-6 h-6 animate-pulse" />
          <ChevronDown className="text-pink-300/60 w-4 h-4 animate-pulse delay-200" />
        </div>
      </div>
    </section>
  )
}
