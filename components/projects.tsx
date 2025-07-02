"use client"

import { useState } from "react"
import { Github, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const projects = [
    {
      title: "Sortora",
      short: "AI-powered filter assistant for Facebook Marketplace & eBay.",
      tech: ["TypeScript", "Chrome Extension", "Firebase", "Groq API", "DOM Scripting"],
      bullets: [
        "Parses natural language queries into structured filters using AI.",
        "Applies filters via DOM scripting directly on Facebook Marketplace.",
        "Supports eBay integration via Browse API for product listings.",
        "Features a floating popup with query input and filter parsing feedback.",
      ],
      githubUrl: "https://github.com/nayabektenova/sortora",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "MultiBotSim",
      short: "Autonomous warehouse robot simulation with A* pathfinding.",
      tech: ["Python", "Pygame", "A* Pathfinding"],
      bullets: [
        "Simulates real-time box retrieval tasks with autonomous agents.",
        "Implements task scheduling and dynamic obstacle avoidance.",
        "Includes restart input popup and configurable layouts (randomized or rack-based).",
      ],
      githubUrl: "https://github.com/yourusername/MultiBotSim",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      title: "Sortify",
      short: "Interactive visualization of sorting algorithms.",
      tech: ["Python", "Pygame", "Matplotlib", "NumPy"],
      bullets: [
        "Visualizes Bubble, Merge, and Quick Sort in real time.",
        "Uses modular OOP design to allow algorithm extensions.",
        "Maintains 60 FPS performance with up to 1000 elements.",
      ],
      githubUrl: "https://github.com/nayabektenova/ssorting-algorithm-visualizer",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "SkyCat",
      short: "2D C++ side-scroller with shooting and terrain scrolling.",
      tech: ["C++", "SDL2"],
      bullets: [
        "Implements parallax scrolling, obstacles, and shooting mechanics.",
        "Uses AABB collision and dynamic entity management.",
        "Structured game state handling (play, restart, game over).",
      ],
      githubUrl: "https://github.com/nayabektenova/SkyCatGame",
      gradient: "from-indigo-400 to-blue-500",
    },
    {
      title: "Village Rentals App",
      short: "Full-stack web platform for managing rentals.",
      tech: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
      bullets: [
        "Built full-stack rental system with Prisma and MySQL.",
        "Manages customers, equipment inventory, and transactions.",
        "Designed RESTful APIs and clean frontend/backend separation.",
      ],
      githubUrl: "https://github.com/nayabektenova/village-rentals-app",
      gradient: "from-emerald-400 to-cyan-400",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-300 to-pink-200 mx-auto rounded-full shadow-lg shadow-pink-300/50"></div>
          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
            A selection of technical projects that showcase my skills in simulation, full-stack development, and real-time visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-96 [perspective:1000px] overflow-hidden"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedCard === index ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-3xl h-full p-6 backdrop-blur-sm border border-gray-700/50 hover:border-pink-300/30 transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                        {project.title}
                      </h3>
                      <Sparkles className="text-pink-300 w-5 h-5 animate-pulse" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.short}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-pink-300/10 text-pink-300 rounded-full text-xs border border-pink-300/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className={`bg-gradient-to-br ${project.gradient} rounded-3xl h-full p-6 flex flex-col justify-between backdrop-blur-sm border border-pink-300/30`}>
                    <div>
                      <h3 className="text-xl font-bold text-pink-100 mb-4">{project.title}</h3>
                      <ul className="text-sm text-gray-100 list-disc pl-5 space-y-2 mb-6">
                        {project.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={project.githubUrl}
                      className="flex items-center justify-center space-x-2 border border-gray-200 text-white py-2 px-4 rounded-full text-sm hover:border-pink-100 hover:text-pink-100 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
