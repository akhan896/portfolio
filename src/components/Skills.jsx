import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend & Animation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    skills: [
      { name: "React.js", logo: "react/61DAFB", color: "rgba(97, 218, 251, 0.6)" },
      { name: "JavaScript", logo: "javascript/F7DF1E", color: "rgba(247, 223, 30, 0.6)" },
      { name: "Tailwind CSS", logo: "tailwindcss/06B6D4", color: "rgba(6, 182, 212, 0.6)" },
      { name: "HTML5/CSS3", logo: "html5", color: "rgba(227, 79, 38, 0.6)" },
      { name: "GSAP", logo: "greensock/88CE02", color: "rgba(136, 206, 2, 0.6)" }
    ],
    color: "#a855f7" // purple
  },
  {
    title: "Backend Services",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
    skills: [
      { name: "Node.js", logo: "nodedotjs/339933", color: "rgba(51, 153, 51, 0.6)" },
      { name: "Express.js", logo: "express/white", color: "rgba(255, 255, 255, 0.6)" },
      { name: "PHP", logo: "php/777BB4", color: "rgba(119, 123, 180, 0.6)" },
      { name: "REST APIs", isSvg: true, svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, color: "rgba(255, 255, 255, 0.6)" },
      { name: "JWT Auth", isSvg: true, svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, color: "rgba(255, 255, 255, 0.6)" }
    ],
    color: "#3b82f6" // blue
  },
  {
    title: "Databases & Tools",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    skills: [
      { name: "MongoDB", logo: "mongodb/47A248", color: "rgba(71, 162, 72, 0.6)" },
      { name: "MySQL", logo: "mysql/4479A1", color: "rgba(68, 121, 161, 0.6)" },
      { name: "PostgreSQL", logo: "postgresql/4169E1", color: "rgba(65, 105, 225, 0.6)" },
      { name: "Git/GitHub", logo: "github/white", color: "rgba(255, 255, 255, 0.6)" },
      { name: "Vite", logo: "vite/646CFF", color: "rgba(100, 108, 255, 0.6)" }
    ],
    color: "#22c55e" // green
  },
  {
    title: "Languages & Core",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    skills: [
      { name: "C/C++", logo: "cplusplus/00599C", color: "rgba(0, 89, 156, 0.6)" },
      { name: "Java", isSvg: true, svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>, color: "rgba(220, 220, 220, 0.6)" },
      { name: "Python", logo: "python/3776AB", color: "rgba(55, 118, 171, 0.6)" },
      { name: "Data Structures", isSvg: true, svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="8" y="2" width="8" height="8" rx="1"/><path d="M12 10v3"/><path d="M12 13H5v3"/><path d="M12 13h7v3"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/></svg>, color: "rgba(255, 255, 255, 0.6)" },
      { name: "System Design", isSvg: true, svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, color: "rgba(255, 255, 255, 0.6)" }
    ],
    color: "#f97316" // orange
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
                  <div 
                    key={skill.name} 
                    className="tech-chip"
                    style={{ '--hover-glow': skill.color }}
                  >
                    <span className="tech-chip__icon">
                      {skill.isSvg ? (
                        skill.svg
                      ) : (
                        <img src={`https://cdn.simpleicons.org/${skill.logo}`} alt={skill.name} width="18" height="18" style={{ display: 'block' }} />
                      )}
                    </span>
                    <span className="tech-chip__text">{skill.name}</span>
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
          margin-right: 6px;
          transition: filter 0.3s ease;
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
        .tech-chip:hover .tech-chip__icon {
          filter: drop-shadow(0 0 8px var(--hover-glow));
        }
        .tech-chip:hover .tech-chip__text {
          color: #ffffff;
        }
      `}</style>
    </section>
  )
}
