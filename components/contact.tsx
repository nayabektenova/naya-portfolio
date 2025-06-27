"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Send, Mail, MapPin, Linkedin, Github, Twitter, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mnnvlqjk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        console.log("Message sent!")
        alert("Thank you! Your message has been sent")
        setFormData({ name: "", email: "", message: "" })
      } else {
        console.error("Error:", result)
        alert("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Network error:", err)
      alert("Failed to send message. Please try again.")
    }

    setIsSubmitting(false)
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/nayabektenova",
      label: "LinkedIn",
      gradient: "from-blue-400 to-blue-600",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/nayabektenova",
      label: "GitHub",
      gradient: "from-gray-400 to-gray-600",
      hoverColor: "hover:text-gray-300",
    },


  ]

  return (
    <section id="contact" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Contact Me!
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-300 to-pink-200 mx-auto rounded-full shadow-lg shadow-pink-300/50"></div>
        
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/30 hover:border-pink-300/30 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Sparkles className="mr-3 text-pink-300" />
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-gray-800/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Location</p>
                    <p className="text-gray-400">Calgary, AB, Canada</p>
                    <p className="text-gray-400">Willing to relocate for exciting opportunities.</p>
                  </div>
                </div>

                <div className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-gray-800/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">Email</p>
                    <p className="text-gray-400">nailia.bektenova@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/30">
              <h4 className="text-2xl font-semibold text-white mb-6">Follow My Journey</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`group flex items-center justify-center p-4 bg-gray-700/30 rounded-2xl ${link.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600/30 hover:border-pink-300/30`}
                    aria-label={link.label}
                  >
                    <div className="flex items-center space-x-3">
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/30 hover:border-pink-300/30 transition-all duration-500">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="relative group">
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-3 transition-colors duration-200 ${
                    focusedField === "name" ? "text-pink-300" : "text-gray-300"
                  }`}
                >
                  Your Name 
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full bg-gray-700/30 border-2 text-white placeholder-gray-400 rounded-2xl px-4 py-3 transition-all duration-300 ${
                    focusedField === "name"
                      ? "border-pink-300 shadow-lg shadow-pink-300/20 scale-105"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                  placeholder="Full Name"
                />
              </div>

              <div className="relative group">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-3 transition-colors duration-200 ${
                    focusedField === "email" ? "text-pink-300" : "text-gray-300"
                  }`}
                >
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full bg-gray-700/30 border-2 text-white placeholder-gray-400 rounded-2xl px-4 py-3 transition-all duration-300 ${
                    focusedField === "email"
                      ? "border-pink-300 shadow-lg shadow-pink-300/20 scale-105"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="relative group">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-3 transition-colors duration-200 ${
                    focusedField === "message" ? "text-pink-300" : "text-gray-300"
                  }`}
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`w-full bg-gray-700/30 border-2 text-white placeholder-gray-400 rounded-2xl px-4 py-3 resize-none transition-all duration-300 ${
                    focusedField === "message"
                      ? "border-pink-300 shadow-lg shadow-pink-300/20 scale-105"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                  placeholder="Share your thoughts!"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-pink-300 to-pink-200 text-gray-900 hover:from-pink-200 hover:to-pink-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-300/25 ${
                  isSubmitting ? "animate-pulse" : ""
                }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                      
                    </>
                  )}
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
