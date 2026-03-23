import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend & Animation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Framer Motion"],
    color: "#a855f7"
  },
  {
    title: "Backend Services",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
    skills: ["Node.js", "Express.js", "Python", "Flask"],
    color: "#22c55e"
  },
  {
    title: "Databases & Tools",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    skills: ["MongoDB", "SQL", "Git", "GitHub", "Linux"],
    color: "#3b82f6"
  },
  {
    title: "Core & Cybersec",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    skills: ["C/C++", "Java", "Nmap", "Wireshark", "Metasploit"],
    color: "#eab308"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span style={{ color: 'var(--purple)' }}>Arsenal</span>
          </h2>
          <p className="section-sub" style={{ margin: '16px auto 60px' }}>
            A comprehensive toolkit that allows me to build full-stack architectures, craft interactive UIs, and solve complex algorithms.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
          textAlign: 'left'
        }}>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card"
              style={{ padding: 28 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 10,
                  background: `rgba(${parseInt(cat.color.slice(1,3),16)}, ${parseInt(cat.color.slice(3,5),16)}, ${parseInt(cat.color.slice(5,7),16)}, 0.1)`,
                  color: cat.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 700 }}>{cat.title}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(skill => (
                  <span key={skill} className="tech-tag" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
