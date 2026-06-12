const projects = [
  {
    title: 'NUTECH Farewell Qawwali Night 2026',
    badge: 'LIVE IN PRODUCTION',
    desc: 'Real event ticketing system currently used by NUTECH students. Features registration, payment verification, QR tickets via email, admin panel, and gate scanner.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Azure', 'Cloudflare'],
    live: 'https://hispanic-introduces-eye-jvc.trycloudflare.com',
    github: null,
  },
  {
    title: 'Battery Shop Management System',
    badge: null,
    desc: 'Full-stack shop management with inventory, customer management, invoicing & dashboard. Auto-deployed via GitHub Actions CI/CD pipeline on every git push.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'GitHub Actions'],
    live: null,
    github: 'https://github.com/abdulhannan-dev0/battery-shop-system',
  },
  {
    title: 'Home Lab Server Infrastructure',
    badge: null,
    desc: 'Converted old laptop into production-grade server using Proxmox. Created Ubuntu Server VM, configured Docker, and set up self-hosted CI/CD runner with remote Cloudflare access.',
    stack: ['Proxmox', 'Ubuntu Server', 'Docker', 'GitHub Actions', 'Cloudflare', 'Linux'],
    live: null,
    github: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-3">My Work</p>
          <h2 className="text-4xl font-bold text-[#1a1a2e]">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(({ title, badge, desc, stack, live, github }) => (
            <div key={title} className="bg-[#0a0a1a] rounded-2xl p-6 flex flex-col border border-gray-800 hover:border-[#d4af37] transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/10 hover:-translate-y-2">
              {badge && (
                <span className="text-xs bg-green-900 text-green-300 px-3 py-1 rounded-full w-fit mb-4 font-bold">{badge}</span>
              )}
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {stack.map(s => (
                  <span key={s} className="text-xs bg-gray-800 text-[#d4af37] px-2 py-1 rounded">{s}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {live && (
                  <a href={live} target="_blank" className="text-sm bg-[#d4af37] text-[#0a0a1a] px-4 py-2 rounded-full font-bold hover:bg-[#f0d060] transition-colors">
                    Live Demo
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank" className="text-sm border border-gray-600 text-gray-300 px-4 py-2 rounded-full hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects