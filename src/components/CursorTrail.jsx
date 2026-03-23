import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    // Adjust canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    const colors = ['#00f0ff', '#7a5cff', '#ff4ecd']
    let particles = []
    
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let lastMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const onMouseMove = (e) => {
      lastMouse.x = mouse.x
      lastMouse.y = mouse.y
      mouse.x = e.clientX
      mouse.y = e.clientY
      
      // Calculate speed for glow intensity and particle count
      const dx = mouse.x - lastMouse.x
      const dy = mouse.y - lastMouse.y
      const speed = Math.sqrt(dx * dx + dy * dy)
      
      // Spawn particles based on speed to fill gaps
      const count = Math.min(Math.floor(speed / 4) + 1, 10)
      for (let i = 0; i < count; i++) {
        // Interpolate position to avoid gaps when mouse moves fast
        const x = lastMouse.x + (dx * (i / count))
        const y = lastMouse.y + (dy * (i / count))
        
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }

      // Limit max particles
      if (particles.length > 150) {
        particles.splice(0, particles.length - 150)
      }
    }

    window.addEventListener('mousemove', onMouseMove)

    let animationFrameId
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 15 * p.life
        ctx.shadowColor = p.color
        ctx.globalAlpha = p.life
        ctx.fill()

        // Update particle
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.02 // Fade out speed
      }

      // Remove dead particles
      particles = particles.filter(p => p.life > 0)

      animationFrameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  )
}
