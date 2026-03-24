import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Certifications', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(3,0,20,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 72, gap: 32 }}>
        {/* Logo */}
        <a href="#home" style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.35rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', flexShrink: 0 }}>
          Arman<span style={{ color: 'var(--purple)' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }} className="nav-desktop">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                style={{
                  padding: '6px 14px', borderRadius: 8,
                  fontSize: '0.9rem', fontWeight: 500, color: 'var(--txt2)',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseOver={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                onMouseOut={e => { e.currentTarget.style.color = 'var(--txt2)'; e.currentTarget.style.background = 'transparent' }}
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-purple" style={{ marginLeft: 8 }}>
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="ham"
          style={{ marginLeft: 'auto', display: 'none', flexDirection: 'column', gap: 5, padding: 6, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}
          aria-label="menu"
        >
          <span style={{ width: 20, height: 1.5, background: open ? 'transparent' : 'white', display: 'block', transition: 'all 0.25s' }} />
          <span style={{ width: 20, height: 1.5, background: 'white', display: 'block', transform: open ? 'rotate(45deg) translateY(0)' : 'none', marginTop: open ? '-6.5px' : 0, transition: 'all 0.25s' }} />
          <span style={{ width: 20, height: 1.5, background: 'white', display: 'block', transform: open ? 'rotate(-45deg) translateY(0)' : 'none', marginTop: open ? '-6.5px' : 0, transition: 'all 0.25s' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              background: 'rgba(3,0,20,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '12px 18px 20px',
            }}
          >
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '11px 0', color: 'var(--txt2)', fontSize: '1rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              >
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-purple" style={{ display: 'inline-flex', marginTop: 16 }}>Let's Talk</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .ham { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
