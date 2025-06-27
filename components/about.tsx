import {
  Brain,
  TrendingUp,
  Lightbulb,
  Headphones,
} from "lucide-react"

export default function About() {
  const traits = [
    {
      icon: <Brain className="w-6 h-6" />,
      text: "Engineered full-stack applications with scalable architecture",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Adapted quickly to evolving technologies and tools",
      color: "from-yellow-400 to-orange-400",
    },

    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: "Motivated by curiosity and consistent problem-solving",
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      text: "Focused and energized by deep work and lo-fi beats",
      color: "from-green-400 to-teal-400",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-300 to-pink-200 mx-auto rounded-full shadow-lg shadow-pink-300/50"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Traits on the left */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-300 mb-6">How I Work</h3>
            <div className="grid gap-4">
              {traits.map((trait, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-700/30 hover:border-pink-300/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${trait.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{trait.icon}</div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {trait.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Description on the right */}
          <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a Software Development Engineer based in Calgary, AB, with a deep passion for creating intelligent, scalable systems that genuinely improve how people live, work and interact with technology. From real-time collaborative apps to multi-agent simulations and machine learning pipelines, I’m drawn to projects that transform complexity into clarity. I don’t just write code, I design solutions with purpose, precision, and user impact in mind.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I thrive in collaborative, fast-paced environments where curiosity, creativity, and critical thinking are valued. I’m always pushing myself to explore new technologies, tools, and patterns, not just to keep up, but to evolve as a problem-solver and architect. My long-term goal is to lead meaningful innovations in AI-powered systems and human-centered design, while building tools that are not only powerful, but maintainable, intuitive, and future-ready.
          </p>


          </div>
        </div>
      </div>
    </section>
  )
}
