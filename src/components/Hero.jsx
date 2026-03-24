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
          <div className="status-badge">
            <span className="dot-green"></span>
            Status: Building robust software
          </div>

          <h1 className="hero-title">
            Arman Khan<span className="dot">.</span>
          </h1>
          <h2 className="hero-subtitle">
            Cybersecurity | Developer
          </h2>

          <p className="hero-desc">
            I build clean, scalable software and explore the complex world of cybersecurity. <br />
            Focused on robust full-stack architectures, modern UIs, and uncovering vulnerabilities. Based in India.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="https://github.com/akhan896/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
              GitHub
            </a>
            <a href="https://drive.google.com/file/d/1EbWJYy-1q_CJjG984Jk_3vTOaBHVI38e/view" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <img src="/images/dp.jpg" alt="Arman Khan" className="hero-image" />
        </motion.div>
      </div>
      <style>{`
        @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          font-family: 'Outfit', sans-serif;
          line-height: 1.1;
        }

        .hero-title .dot {
          color: #a855f7;
        }

        .hero-subtitle {
          font-size: 2rem;
          font-weight: 600;
          color: #d1d5db;
          margin-top: 10px;
          font-family: 'Outfit', sans-serif;
        }

        .hero-desc {
          color: #9ca3af;
          max-width: 500px;
          line-height: 1.6;
          margin-top: 20px;
          margin-bottom: 40px;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #9ca3af;
          margin-bottom: 20px;
        }

        .dot-green {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
        }

        .hero-image {
          width: 100%;
          max-width: 350px;
          height: 350px;
          object-fit: cover;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.2);
        }

        @media (max-width: 900px) {
          #home > .container { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          #home .btn-primary, #home .btn-outline { margin: 0 auto; }
          #home > .container > div:first-child > div:last-child { justify-content: center; }
          .hero-desc { margin: 20px auto 40px auto; }
          .hero-image { height: 250px; }
        }
      `}</style>
    </section>
  )
}
