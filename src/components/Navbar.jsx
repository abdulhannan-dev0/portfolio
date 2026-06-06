function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-[#1a1a2e]">Abdul Hannan</span>
        <div className="flex gap-8">
          <a href="#about" className="text-gray-600 hover:text-[#1a1a2e] font-medium">About</a>
          <a href="#skills" className="text-gray-600 hover:text-[#1a1a2e] font-medium">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-[#1a1a2e] font-medium">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-[#1a1a2e] font-medium">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar