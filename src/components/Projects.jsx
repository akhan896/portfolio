import { motion } from 'framer-motion'

const projects = [
  {
    title: "BOLT — AI Chatbot",
    subtitle: "Conversational Intelligence",
    problem: "Needed a fast, conversational AI interface capable of understanding context and retaining memory efficiently.",
    solution: "Built a full-stack chatbot powered by the Gemini API. Leveraged Flask for the backend to create clean REST endpoints and implemented a responsive React frontend that feels alive and interactive.",
    tags: ["React.js", "Flask", "Gemini API", "TailwindCSS"],
    github: "https://github.com/akhan896/"
  },
  {
    title: "Dynamic Memory Visualizer",
    subtitle: "OS Algorithm Simulator",
    problem: "Students struggle to visualize how paging algorithms (like FIFO and LRU) allocate memory frames and trigger page faults in operating systems.",
    solution: "Developed an interactive simulator in Python using a Tkinter GUI. It demonstrates live memory frame allocation, tracks hits/misses, and calculates page fault ratios in real-time.",
    tags: ["Python", "Tkinter", "Data Structures", "OS"],
    github: "https://github.com/akhan896/"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Selected <span style={{ color: 'var(--purple)' }}>Work</span>
          </h2>
          <p className="section-sub" style={{ marginBottom: 60 }}>
            Recent projects focusing on full-stack architecture, performance, and user experience.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(60px, 10vw, 120px)' }}>
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(30px, 5vw, 60px)',
                alignItems: 'center',
                direction: idx % 2 === 1 ? 'rtl' : 'ltr'
              }}
              className="proj-row"
            >
              <div style={{ direction: 'ltr' }}>
                <div style={{ padding: '6px 14px', borderRadius: 20, border: '1px solid rgba(168,85,247,0.3)', color: 'var(--purple)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', display: 'inline-flex', marginBottom: 20 }}>
                  PROJECT 0{idx + 1}
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, marginBottom: 8, color: 'var(--txt)' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--txt2)', marginBottom: 28 }}>{proj.subtitle}</p>

                <div className="glass-card" style={{ padding: 28, marginBottom: 28 }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: 'var(--txt)', marginBottom: 8 }}>
                      <span style={{ color: '#ef4444' }}>•</span> Challenge
                    </div>
                    <p style={{ color: 'var(--txt2)', fontSize: '0.95rem' }}>{proj.problem}</p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: 'var(--txt)', marginBottom: 8 }}>
                      <span style={{ color: 'var(--green)' }}>•</span> Implementation
                    </div>
                    <p style={{ color: 'var(--txt2)', fontSize: '0.95rem' }}>{proj.solution}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {proj.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '10px 20px' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
                  Code
                </a>
              </div>

              {/* Mockup Placeholder */}
              <div style={{ direction: 'ltr', width: '100%', aspectRatio: '16/10', background: 'var(--card)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
                <div style={{ height: 32, borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6, background: 'rgba(0,0,0,0.2)' }}>
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: '#ef4444' }} />
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: '#eab308' }} />
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: '#22c55e' }} />
                  <div style={{ margin: '0 auto', width: '40%', height: 16, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 32px)', color: 'var(--txt3)' }}>
                  Project visual
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .proj-row { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
      `}</style>
    </section>
  )
}
