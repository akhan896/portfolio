import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 0.7fr)',
          gap: 40,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 24,
          padding: 'clamp(32px, 5vw, 48px)'
        }}>
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: 24,
              color: 'var(--txt)'
            }}>Background</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--txt2)' }}>
              <p>I'm a Computer Science Engineering student with an intense passion for full-stack development and offensive cybersecurity. I thrive at the intersection of building secure software and figuring out how to break it.</p>
              <p>Throughout my academic journey, I've developed AI-powered chat systems, dynamic OS-level memory simulators, and robust web applications. My curiosity pushes me to constantly explore deeper layers of the stack.</p>
              <p>Whether it's finding logic flaws in CTFs, architecting responsive UIs in React, or building scalable Python backends, I enjoy solving hard problems.</p>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex', flexDirection: 'column', gap: 32, justifyContent: 'center',
              borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: 'clamp(20px, 4vw, 40px)'
            }}
            className="about-right-border"
          >
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.1 }}>20+</div>
              <div style={{ color: 'var(--txt3)', fontSize: '0.9rem', marginTop: 8 }}>Repositories pushed</div>
            </div>
            
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.1 }}>Top 10</div>
              <div style={{ color: 'var(--txt3)', fontSize: '0.9rem', marginTop: 8 }}>HackWithVertos</div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <a href="https://github.com/akhan896/" target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.background='var(--txt)'; e.currentTarget.style.color='black'}} onMouseOut={e => {e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='var(--txt)'}}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/arman-khan3/" target="_blank" rel="noopener noreferrer" style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.background='#0a66c2'; e.currentTarget.style.color='white'}} onMouseOut={e => {e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='var(--txt)'}}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr; }
          .about-right-border { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.08); padding-left: 0 !important; padding-top: 32px; flex-direction: row !important; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  )
}
