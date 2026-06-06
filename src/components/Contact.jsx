function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a1a]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-3">Get In Touch</p>
        <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-gray-400 text-lg mb-12">
          Open to DevOps internships, junior developer roles, and freelance projects!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Email', value: 'abdul.hannan.dev0@gmail.com', href: 'mailto:abdul.hannan.dev0@gmail.com' },
            { label: 'LinkedIn', value: 'abdulhannan-dev0', href: 'https://linkedin.com/in/abdulhannan-dev0' },
            { label: 'GitHub', value: 'abdulhannan-dev0', href: 'https://github.com/abdulhannan-dev0' },
          ].map(({ label, value, href }) => (
            <a key={label} href={href} target="_blank"
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-[#d4af37] transition-colors group">
              <div className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-2">{label}</div>
              <div className="text-gray-300 text-sm group-hover:text-white transition-colors break-all">{value}</div>
            </a>
          ))}
        </div>
        <a href="https://abdulhannan-dev0.vercel.app"
          className="bg-[#d4af37] text-[#0a0a1a] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#f0d060] transition-colors inline-block">
          Download CV
        </a>
      </div>
    </section>
  )
}

export default Contact