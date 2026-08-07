import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function SystemStatus() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://discipline-session-collectors-items.trycloudflare.com/status')
      .then(res => res.json())
      .then(data => {
        setStatus(data)
        setLoading(false)
      })
      .catch(() => {
        setStatus(null)
        setLoading(false)
      })
  }, [])

  return (
    <section className="py-16 bg-[#0a0a1a]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111128] rounded-2xl p-6 border border-gray-800"
        >
          <p className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-4">
            Live System Status
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className={`w-3 h-3 rounded-full ${loading ? 'bg-yellow-500' : status ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></span>
            <span className="text-white font-semibold">
              {loading ? 'Checking...' : status ? 'Aira AI Assistant — Online' : 'Aira AI Assistant — Offline'}
            </span>
          </div>
          {status && (
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
              <div>Model: <span className="text-gray-200">{status.model}</span></div>
              <div>Infrastructure: <span className="text-gray-200">{status.infrastructure}</span></div>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-4">
            This status is pulled live from my self-hosted homelab server running 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SystemStatus