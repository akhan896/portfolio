import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 120 }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr)',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center'
      }}>
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="pill" style={{ marginBottom: 28 }}>
            <span className="pill-dot" />
            Status: Building robust software
          </div>

          <h1 className="section-title" style={{ marginBottom: 12 }}>
            Arman Khan<span style={{ color: 'var(--purple)' }}>.</span>
          </h1>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--txt)',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center'
          }}>
            Cybersecurity <span style={{ color: 'var(--txt3)', margin: '0 12px', fontWeight: 400 }}>|</span> Developer
          </h2>

          <p className="section-sub" style={{ fontSize: '1.05rem', marginBottom: 40, lineHeight: 1.75 }}>
            I build clean, scalable software and explore the complex world of cybersecurity. <br />
            Focused on robust full-stack architectures, modern UIs, and uncovering vulnerabilities. Based in India.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="https://github.com/akhan896/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
              GitHub
            </a>
            <a href="#about" className="btn-outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right cards/image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ position: 'relative' }}
        >
          {/* Framed image placeholder */}
          <div className="glass-card" style={{
            position: 'relative',
            width: '100%',
            maxWidth: 420,
            aspectRatio: '4/5',
            margin: '0 auto',
            overflow: 'hidden',
            borderRadius: 24,
            padding: 8
          }}>
            <div style={{
              width: '100%', height: '100%',
              borderRadius: 16,
              background: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800) center/cover',
              backgroundPosition: 'center',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)'
            }}>
              {/* Overlay gradient to blend bottom */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,0,20,0.9) 0%, transparent 40%)' }} />
            </div>

            {/* Floating tech stack badge */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: -20, right: -20,
              padding: '16px 24px',
              display: 'flex', flexDirection: 'column', gap: 12,
              animation: 'float 6s ease-in-out infinite'
            }}>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--txt3)', fontWeight: 700 }}>Core Stack</span>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ color: '#3776AB' }}><svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-3.74.05-1.26.13-1.08.21-.92.27-.77.34-.63.38-.5.43-.4.47-.28.5-.18.52-.08.53-.02h4.99zM13.03 1.6L12 1.58H9.3l-.7.04-.57.1-.47.16-.38.21-.3.26-.23.3-.17.33-.11.36-.07.38-.03.37v2.01h5.81l.3.01.27.04.24.08.21.12.18.17.15.22.12.28.09.35.06.41.04.49.02.58v4.02l-.01.3-.04.28-.06.25-.09.21-.12.18-.15.14-.17.1-.2.06-.23.03-.26.01h-2.1l-.51.01-.48.05-.44.1-.41.16-.38.22-.35.29-.32.36-.29.43-.25.52-.2.6-.16.7-.12.79-.08.89-.04 1-.02 1.1v3.05l.02.66.05.6.09.53.13.46.17.38.22.31.26.24.31.17.36.11.41.06.45.02h4.78l1.01-.06.87-.19.74-.35.61-.49.49-.66.38-.85.27-1.05.16-1.27.06-1.54V11.16L20.89 10l-.13-.53-.2-.45-.25-.38-.3-.31-.34-.23-.37-.16-.39-.1-.41-.05-.42-.02h-8.09v.84h4.37l.02 2.75.03 3.69-.05 1.25-.13 1.09-.22.92-.28.77-.35.63-.4.5-.44.38-.48.27-.51.15-.54.05-.56.02h-5z"/></svg></span>
                <span style={{ color: '#E34F26' }}><svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.743-8.157H8.531z"/></svg></span>
                <span style={{ color: '#007396' }}><svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m-2.16-5.83V9.851h-2.13v8.32H9.84m3.84 0v-8.32h-2.13v8.32h2.13m4.29-6.37l-2.06 6.37h-2.27l1.76-5.46h-2v-.91h4.57zm-6.07-2v-.93l2.8-.2v1.13h-2.8"/></svg></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
        @media (max-width: 900px) {
          #home > .container { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          #home .btn-primary, #home .btn-outline { margin: 0 auto; }
          #home > .container > div:first-child > div:last-child { justify-content: center; }
          #home .pill { margin: 0 auto 28px; }
        }
      `}</style>
    </section>
  )
}
