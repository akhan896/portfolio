import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend & Animation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "GSAP"],
    color: "#a855f7" // purple
  },
  {
    title: "Backend Services",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
    skills: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT Auth"],
    color: "#3b82f6" // blue
  },
  {
    title: "Databases & Tools",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Git/GitHub", "Vite"],
    color: "#22c55e" // green
  },
  {
    title: "Languages & Core",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    skills: ["C/C++", "Java", "Python", "Data Structures", "System Design"],
    color: "#f97316" // orange
  }
]

// Helper for a generic mini tech icon
const TechIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ opacity: 0.7 }}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

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

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="skill-card"
            >
              <div className="skill-card__header">
                <div 
                  className="skill-card__icon-box"
                  style={{
                    background: `rgba(${parseInt(cat.color.slice(1,3), 16)}, ${parseInt(cat.color.slice(3,5), 16)}, ${parseInt(cat.color.slice(5,7), 16)}, 0.15)`,
                    color: cat.color,
                    boxShadow: `0 0 15px rgba(${parseInt(cat.color.slice(1,3), 16)}, ${parseInt(cat.color.slice(3,5), 16)}, ${parseInt(cat.color.slice(5,7), 16)}, 0.2)`
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>

              <div className="skill-card__chips">
                {cat.skills.map(skill => (
                  <div key={skill} className="tech-chip">
                    <span className="tech-chip__icon" style={{ color: cat.color }}><TechIcon /></span>
                    <span className="tech-chip__text">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Grid Layout ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          text-align: left;
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Card Design ── */
        .skill-card {
          background: #0b0f1a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }
        .skill-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(168, 85, 247, 0.15), 0 0 0 1px rgba(255,255,255,0.12);
        }

        /* ── Header ── */
        .skill-card__header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .skill-card__icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .skill-card__title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }

        /* ── Tech Chips ── */
        .skill-card__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }
        .tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .tech-chip__icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tech-chip__text {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--txt2, #9ca3af);
          transition: color 0.3s ease;
        }
        
        .tech-chip:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
        }
        .tech-chip:hover .tech-chip__text {
          color: #ffffff;
        }
      `}</style>
    </section>
  )
}
