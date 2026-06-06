import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-[#1a1a2e]">Abdul Hannan</span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(item => (
            <a key={item} href={"#" + item.toLowerCase()}
              className="text-gray-600 hover:text-[#1a1a2e] font-medium transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[#1a1a2e] text-2xl" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {links.map(item => (
            <a key={item} href={"#" + item.toLowerCase()}
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-[#1a1a2e] font-medium text-lg">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar