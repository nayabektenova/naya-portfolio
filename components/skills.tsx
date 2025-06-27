"use client"

import { useState, useEffect } from "react"
import {
  Power,
  Terminal,
  Code,
  FileCode,
  Database,
  Server,
  Wrench,
  Globe,
  Layers,
  Paintbrush,
  HardDrive,
  Cloud,
  Eye,
  Palette,
} from "lucide-react"

export default function Skills() {
  const [powerOn, setPowerOn] = useState(false)
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set())

  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "C", icon: <FileCode className="w-6 h-6" /> },
        { name: "Python", icon: <Terminal className="w-6 h-6" /> },
        { name: "Java", icon: <Code className="w-6 h-6" /> },
        { name: "C++", icon: <FileCode className="w-6 h-6" /> },
        { name: "C#", icon: <FileCode className="w-6 h-6" /> },
        { name: "TypeScript", icon: <FileCode className="w-6 h-6" /> },
        { name: "JavaScript", icon: <FileCode className="w-6 h-6" /> },
        { name: "SQL", icon: <Database className="w-6 h-6" /> },
        { name: "HTML", icon: <Code className="w-6 h-6" /> },
        { name: "CSS", icon: <Palette className="w-6 h-6" /> },
      ],
    },
    {
      title: "Technologies", // <-- changed here
      icon: <Globe className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "React", icon: <Globe className="w-6 h-6" /> },
        { name: "Next.js", icon: <Layers className="w-6 h-6" /> },
        { name: "Tailwind", icon: <Paintbrush className="w-6 h-6" /> },
        { name: "Node.js", icon: <Server className="w-6 h-6" /> },
        { name: "Firebase", icon: <Cloud className="w-6 h-6" /> },
        { name: "Spring Boot", icon: <Server className="w-6 h-6" /> },
        { name: "Prisma", icon: <Wrench className="w-6 h-6" /> },
        { name: "REST APIs", icon: <Code className="w-6 h-6" /> },
        { name: "WebSockets", icon: <Code className="w-6 h-6" /> },
        { name: "NextAuth", icon: <Eye className="w-6 h-6" /> },
      ],
    },
    {
      title: "Databases & Tools",
      icon: <HardDrive className="w-6 h-6" />,
      color: "green",
      skills: [
        { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
        { name: "MySQL", icon: <Database className="w-6 h-6" /> },
        { name: "MariaDB", icon: <Database className="w-6 h-6" /> },
        { name: "Oracle", icon: <Database className="w-6 h-6" /> },
        { name: "Earth Engine", icon: <Globe className="w-6 h-6" /> },
        { name: "NumPy", icon: <Code className="w-6 h-6" /> },
        { name: "Pandas", icon: <Code className="w-6 h-6" /> },
        { name: "Matplotlib", icon: <Code className="w-6 h-6" /> },
        { name: "Prisma ORM", icon: <Wrench className="w-6 h-6" /> },
        { name: "Figma", icon: <Paintbrush className="w-6 h-6" /> },
      ],
    },
  ]

  useEffect(() => {
    if (powerOn) {
      const allSkills = skillCategories.flatMap((category) =>
        category.skills.map((skill) => `${category.title}-${skill.name}`)
      )
      allSkills.forEach((skillId, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => new Set([...prev, skillId]))
        }, index * 100)
      })
    } else {
      setVisibleSkills(new Set())
    }
  }, [powerOn])

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "from-blue-400 to-blue-600 border-blue-400",
      green: "from-green-400 to-green-600 border-green-400",
      purple: "from-purple-400 to-purple-600 border-purple-400",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Grid - updated to rose */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #f43f5e 1px, transparent 1px),
              linear-gradient(180deg, #f43f5e 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated Dots - updated to rose */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
              powerOn ? "bg-rose-400 animate-pulse" : "bg-gray-600"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-rose-200 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-300 to-rose-200 mx-auto rounded-full shadow-lg shadow-rose-300/50" />

          {/* Power Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setPowerOn(!powerOn)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 ${
                powerOn
                  ? "bg-rose-500 border-rose-300 text-white shadow-rose-500/50 shadow-2xl"
                  : "bg-gray-700 border-gray-500 text-gray-300 hover:bg-gray-600 hover:border-gray-400"
              }`}
            >
              <Power className={`w-6 h-6 transition-transform duration-300 ${powerOn ? "rotate-180" : ""}`} />
              <span className="font-bold text-lg">{powerOn ? "SYSTEM ONLINE" : "ACTIVATE SKILLS"}</span>
              {powerOn && <div className="w-3 h-3 bg-rose-300 rounded-full animate-pulse" />}
            </button>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`relative bg-gray-900/50 rounded-3xl p-8 border-2 transition-all duration-500 backdrop-blur-sm ${
                powerOn
                  ? `border-${category.color}-400 shadow-2xl shadow-${category.color}-400/20`
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 transition-all duration-500 ${
                    powerOn
                      ? `bg-gradient-to-r ${getCategoryColor(category.color)} text-white shadow-lg`
                      : "bg-gray-800 border-gray-600 text-gray-300"
                  }`}
                >
                  <div className="text-white">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      powerOn ? `bg-${category.color}-300 animate-pulse` : "bg-gray-600"
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillId = `${category.title}-${skill.name}`
                  const isVisible = visibleSkills.has(skillId)

                  return (
                    <div
                      key={skillIndex}
                      className={`group relative transition-all duration-500 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                      style={{ transitionDelay: `${skillIndex * 150}ms` }}
                    >
                      <div
                        className={`p-6 rounded-2xl border-2 flex flex-col items-center space-y-3 cursor-pointer transition-all duration-300 ${
                          powerOn && isVisible
                            ? `bg-gray-800/50 border-gray-600 hover:border-${category.color}-400 hover:scale-105 hover:bg-gray-800/70`
                            : "bg-gray-800/30 border-gray-700"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-xl ${
                            powerOn && isVisible
                              ? `bg-${category.color}-500/20 text-${category.color}-400`
                              : "bg-gray-700/50 text-gray-500"
                          }`}
                        >
                          {skill.icon}
                        </div>
                        <h4 className="font-bold text-center text-white">{skill.name}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
