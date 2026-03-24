import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    e.target.reset()
  }

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 8vw, 100px)',
          alignItems: 'center'
        }} className="contact-grid">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: 'var(--txt)', marginBottom: 20 }}>
              Let's build something.
            </h2>
            <p style={{ color: 'var(--txt2)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
              I'm currently looking for new opportunities. If you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <a href="mailto:armankhan02423@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--txt2)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--purple)'} onMouseOut={e => e.currentTarget.style.color = 'var(--txt2)'}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                armankhan02423@gmail.com
              </a>
              <a href="tel:+91XXXXXXXXXX" style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--txt2)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--purple)'} onMouseOut={e => e.currentTarget.style.color = 'var(--txt2)'}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +91 8960547033
              </a>
            </div>

            <div style={{ display: 'flex', gap: 20, marginTop: 40 }}>
              <a href="https://www.linkedin.com/in/arman-khan3/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--txt2)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--txt)'} onMouseOut={e => e.currentTarget.style.color = 'var(--txt2)'}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://github.com/akhan896/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--txt2)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--txt)'} onMouseOut={e => e.currentTarget.style.color = 'var(--txt2)'}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" /></svg>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
            style={{ padding: 'clamp(24px, 5vw, 40px)', position: 'relative', overflow: 'hidden' }}
          >
            {/* Form Glow */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: 250, height: 250, background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', transform: 'translate(30%, -30%)', pointerEvents: 'none' }} />

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28, position: 'relative', zIndex: 1 }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input id="name" type="text" className="form-input" placeholder="Arman Khan" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input id="email" type="email" className="form-input" placeholder="hello@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="msg">Message</label>
                <textarea id="msg" className="form-input" placeholder="How can I help you?" rows="3" style={{ resize: 'vertical' }} required />
              </div>

              <button type="submit" className="btn-primary" style={{ width: 'fit-content', marginTop: 12 }}>
                {sent ? "Sent!" : "Send Message"}
                {!sent && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ marginLeft: 4 }}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
