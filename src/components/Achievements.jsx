import { motion } from 'framer-motion'

const achievements = [
  {
    title: "Participated in 9+ Coding Contests",
    subtitle: "LeetCode, CodeChef, Codeforces",
    desc: "Actively participated in competitive programming contests, improving problem-solving skills and algorithmic thinking.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    color: "#3b82f6"
  },
  {
    title: "Top 10 Rank in Hackathon",
    subtitle: "HackWithVertos",
    desc: "Secured a top 10 position in a competitive hackathon competing against multiple skilled participants.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10"/><path d="M5 4v7c0 2.2 2.7 4 7 4s7-1.8 7-4V4"/><path d="M3 4h2"/><path d="M19 4h2"/></svg>,
    color: "#eab308"
  },
  {
    title: "Completed Multiple Certifications",
    subtitle: "Google, IBM, NPTEL, Infosys",
    desc: "Earned certifications from leading organizations in domains like networking, cybersecurity, hardware, and AI.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 15l-8-4.5V14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3.5L12 15z"/><path d="M12 9l8-4.5L12 0 4 4.5 12 9z"/></svg>,
    color: "#a855f7"
  }
]

// Grid container animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Notable <span style={{ color: 'var(--purple)' }}>Achievements</span>
          </h2>
          <p className="section-sub" style={{ margin: '16px auto 60px' }}>
            Milestones and recognition in competitive programming, hackathons, and continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
            textAlign: 'left'
          }}
        >
          {achievements.map((ach) => (
            <motion.div key={ach.title} variants={cardVariants}>
              <div 
                className="glass-card ach-card"
                style={{
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: 16, 
                  padding: '32px 28px',
                  height: '100%'
                }}
              >
                {/* Header: Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    width: 48, flexShrink: 0, height: 48,
                    borderRadius: 12,
                    background: `rgba(${parseInt(ach.color.slice(1,3),16)}, ${parseInt(ach.color.slice(3,5),16)}, ${parseInt(ach.color.slice(5,7),16)}, 0.12)`,
                    color: ach.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {ach.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.3, marginBottom: 4 }}>
                      {ach.title}
                    </h3>
                    <div style={{ color: ach.color, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                      {ach.subtitle}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--txt2)', fontSize: '0.95rem', lineHeight: 1.6, marginTop: 8 }}>
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ach-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .ach-card:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(168, 85, 247, 0.4);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(168,85,247,0.15), 0 0 40px rgba(168,85,247,0.1);
        }
      `}</style>
    </section>
  )
}
