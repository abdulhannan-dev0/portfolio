const skills = [
  { category: 'Frontend', icon: '🎨', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { category: 'Backend', icon: '⚙️', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Prisma ORM'] },
  { category: 'Database', icon: '🗄️', items: ['PostgreSQL', 'MongoDB'] },
  { category: 'DevOps & Cloud', icon: '☁️', items: ['Docker', 'Docker Compose', 'Microsoft Azure', 'GitHub Actions', 'CI/CD', 'Nginx', 'Cloudflare'] },
  { category: 'Infrastructure', icon: '🖥️', items: ['Proxmox', 'Ubuntu Server', 'Linux', 'Virtualization', 'Networking'] },
  { category: 'Tools', icon: '🛠️', items: ['Git', 'GitHub', 'VS Code', 'Bash'] },
]

function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="text-4xl font-bold text-[#1a1a2e]">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(({ category, icon, items }) => (
            <div key={category} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#d4af37] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-[#1a1a2e] font-bold text-sm uppercase tracking-widest">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-[#d4af37] hover:text-[#0a0a1a] transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills