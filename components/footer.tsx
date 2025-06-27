import Link from "next/link"
import { Heart, Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <Link
              href="#home"
              className="text-3xl font-bold text-pink-300 hover:text-pink-200 transition-all duration-300 hover:scale-110"
            >
              Naya Bektenova
            </Link>
            
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Naya Bektenova. Crafted with passion and pixels.
            </p>
            
          </div>

        </div>
      </div>
    </footer>
  )
}
