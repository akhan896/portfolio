export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 0',
      background: 'var(--bg2)',
      position: 'relative', zIndex: 1
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20
      }}>
        <div style={{ color: 'var(--txt3)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Arman Khan. All rights reserved.
        </div>

        <div style={{ color: 'var(--txt3)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
          Crafted with <span style={{ color: '#ef4444' }}>♥</span> using React & Framer Motion
        </div>

        <button 
          onClick={() => window.scrollTo(0,0)}
          style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--txt2)', transition: 'all 0.3s'
          }}
          onMouseOver={e => { e.currentTarget.style.background='var(--txt)'; e.currentTarget.style.color='black' }}
          onMouseOut={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='var(--txt2)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
        </button>

      </div>
      <style>{`
        @media (max-width: 600px) {
          footer .container { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
