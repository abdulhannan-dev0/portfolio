import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import SystemStatus from './components/SystemStatus'
import Contact from './components/Contact'
import Footer from './components/Footer'

function FadeIn({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'opacity 0.7s ease, transform 0.7s ease'
    }}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FadeIn><About /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><SystemStatus /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
    </div>
  )
}

export default App