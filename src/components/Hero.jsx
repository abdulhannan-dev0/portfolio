import { useEffect, useState } from 'react'
import profileImg from '../assets/profile.jpg'

const roles = [
  'Full Stack Developer',
  'DevOps Engineer',
  'Cloud Infrastructure',
  'React + Node.js Dev',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className="min-h-screen bg-[#0a0a1a] flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#d4af37] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[#d4af37] opacity-5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 py-16">
        
        {/* Mobile: photo first */}
        <div className="flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#d4af37] opacity-20 blur-2xl scale-110"></div>
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-[#d4af37] overflow-hidden shadow-2xl relative">
              <img src={profileImg} alt="Abdul Hannan" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#d4af37] text-[#0a0a1a] px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
              Open to Work ✓
            </div>
            <div className="absolute -top-4 -left-4 bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-xl text-xs">
              <div className="text-[#d4af37] font-bold">3</div>
              <div className="text-gray-400">Projects</div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left md:order-1">
          <div className="inline-block bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm px-4 py-2 rounded-full mb-6 font-medium">
            👋 Hello, I'm
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Abdul Hannan
          </h1>
          <div className="text-xl md:text-2xl text-[#d4af37] mb-6 h-8 font-medium">
            {displayed}<span className="animate-pulse">|</span>
          </div>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-10 text-base md:text-lg leading-relaxed">
            CS Student @ NUTECH building real production systems.
            Deployed live apps on Azure with Docker, CI/CD pipelines & Cloudflare.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mb-10 flex-wrap">
            <a href="#projects" className="bg-[#d4af37] text-[#0a0a1a] px-8 py-3 rounded-full font-bold hover:bg-[#f0d060] transition-all hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="border border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-full font-bold hover:bg-[#d4af37] hover:text-[#0a0a1a] transition-all hover:scale-105">
              Contact Me
            </a>
          </div>
          <div className="flex gap-6 justify-center md:justify-start">
            <a href="https://github.com/abdulhannan-dev0" target="_blank" className="text-gray-500 hover:text-[#d4af37] transition-colors text-sm flex items-center gap-2">
              <span className="text-xl">⌥</span> GitHub
            </a>
            <a href="https://linkedin.com/in/abdulhannan-dev0" target="_blank" className="text-gray-500 hover:text-[#d4af37] transition-colors text-sm flex items-center gap-2">
              <span className="text-xl">in</span> LinkedIn
            </a>
            <a href="mailto:abdul.hannan.dev0@gmail.com" className="text-gray-500 hover:text-[#d4af37] transition-colors text-sm flex items-center gap-2">
              <span className="text-xl">✉</span> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero