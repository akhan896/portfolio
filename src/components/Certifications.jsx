import { motion } from 'framer-motion'

const certs = [
  {
    title: "Bits & Bytes of Computer Networking",
    issuer: "Google",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M11.99 13.9v-3.72h9.36c.14.73.25 1.51.25 2.44 0 2.9-1.35 5.25-3.56 6.9-2.02 1.5-4.7 2.38-8.06 2.38-6.19 0-11.23-5.04-11.23-11.23S3.79 2.66 9.98 2.66c3.15 0 6 1.15 8.24 3.02l-2.6 2.61c-1.32-1.2-3.18-1.99-5.64-1.99-4.34 0-7.85 3.51-7.85 7.85s3.51 7.85 7.85 7.85c3.21 0 5.6-1.52 6.78-3.6H11.99v-.5z"/></svg>,
    link: "https://www.coursera.org/account/accomplishments/verify/9SOHHS8O4NV0",
    color: "#4285F4"
  },
  {
    title: "Intro to Hardware & Operating Systems",
    issuer: "IBM",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M4 4h4v16H4V4zm6 0h4v16h-4V4zm6 0h4v16h-4V4z"/></svg>,
    link: "https://www.coursera.org/account/accomplishments/verify/8XHV0PKXJHDW",
    color: "#0530ad"
  },
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs79/Course/NPTEL25CS79S24750091704479887.pdf",
    color: "#8b5cf6"
  },
  {
    title: "Build Generative AI Apps with No-Code",
    issuer: "Infosys",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    link: "https://drive.google.com/file/d/1M6GHwWq3sNE9-vKORgkulMzwH-HHFFht/view",
    color: "#007cc3"
  },
  {
    title: "Master Generative AI & AI Tools",
    issuer: "Udemy",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2L1 8.35v7.3L12 22l11-6.35v-7.3L12 2zm8.6 7.05l-8.6 4.96L3.4 9.05 12 4.1l8.6 4.95zm-8.6 10.9L5.22 16.1v-4L12 15.96l6.78-3.86v4l-6.78 3.85z"/></svg>,
    link: "https://drive.google.com/file/d/1yg9-3ZkLWyFQDIMLdFituLz9oOaemqP-/view",
    color: "#a435f0"
  }
]

// Grid container animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Verified <span style={{ color: 'var(--purple)' }}>Certifications</span>
          </h2>
          <p className="section-sub" style={{ margin: '16px auto 60px' }}>
            Professional credentials validating my expertise in networking, cybersecurity, hardware, and Generative AI.
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
          {certs.map(cert => (
            <motion.div key={cert.title} variants={cardVariants}>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card cert-card"
                style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 20, 
                  padding: '24px 28px',
                  height: '100%',
                  textDecoration: 'none'
                }}
              >
                {/* Visual Icon */}
                <div style={{
                  width: 52, flexShrink: 0, height: 52,
                  borderRadius: 14,
                  background: `rgba(${parseInt(cert.color.slice(1,3),16) || 168}, ${parseInt(cert.color.slice(3,5),16) || 85}, ${parseInt(cert.color.slice(5,7),16) || 247}, 0.12)`,
                  color: cert.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {cert.icon}
                </div>
                
                {/* Text Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--txt)', lineHeight: 1.3, marginBottom: 6 }}>
                    {cert.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--txt3)', fontSize: '0.85rem' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                    {cert.issuer}
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="cert-arrow" style={{ color: 'var(--txt3)', transition: 'all 0.3s', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .cert-card:hover .cert-arrow {
          color: var(--purple) !important;
          transform: translate(4px, -4px);
        }
        @media (max-width: 600px) {
          #certifications > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
