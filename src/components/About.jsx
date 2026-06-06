function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a1a2e] text-center mb-16">About Me</h2>
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a Computer Science student at NUTECH, Islamabad, passionate about DevOps and Full Stack Development.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              While most students are still learning theory, I've built real-world production systems — converting an old laptop into a server, deploying apps on Azure, and automating everything with CI/CD pipelines.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Self-taught, hands-on learner. Open to DevOps internships and junior developer roles.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '3', label: 'Projects Built' },
              { number: '1', label: 'Live Production App' },
              { number: '2+', label: 'Years Self Learning' },
              { number: '4th', label: 'Semester NUTECH' },
            ].map(({ number, label }) => (
              <div key={label} className="bg-[#0a0a1a] rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-2">{number}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About