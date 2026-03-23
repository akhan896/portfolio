import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    
    // Create multiple strands (tubes)
    const numStrands = 3
    const strands = []
    for (let s = 0; s < numStrands; s++) {
      strands.push({
        phase: Math.random() * Math.PI * 2,
        points: Array(30).fill(null).map(() => ({ x: mouse.x, y: mouse.y }))
      })
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    // Colors combining neon blue, pink, purple
    const colors = [
      { r: 0, g: 240, b: 255 },    // Neon Blue
      { r: 255, g: 78, b: 205 },   // Hot Pink
      { r: 122, g: 92, b: 255 }    // Neon Purple
    ]

    let time = 0
    let animationFrameId
    
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'
      
      time += 0.05

      // Process each strand
      strands.forEach((strand, index) => {
        const color = colors[index % colors.length]
        
        // Target for the head of the strand (orbits the mouse slightly)
        const radius = 15 // orbit radius
        const targetX = mouse.x + Math.cos(time + strand.phase) * radius
        const targetY = mouse.y + Math.sin(time + strand.phase) * radius

        // Update head
        strand.points[0].x = lerp(strand.points[0].x, targetX, 0.2)
        strand.points[0].y = lerp(strand.points[0].y, targetY, 0.2)

        // Physics: Each point follows the one before it
        for (let i = 1; i < strand.points.length; i++) {
          strand.points[i].x = lerp(strand.points[i].x, strand.points[i - 1].x, 0.45)
          strand.points[i].y = lerp(strand.points[i].y, strand.points[i - 1].y, 0.45)
        }

        // Draw the strand
        for (let i = strand.points.length - 1; i >= 0; i--) {
          const p = strand.points[i]
          // Size decreases towards the tail
          const size = Math.max(0.1, (1 - (i / strand.points.length)) * 12)
          
          // The base layer (glow)
          ctx.beginPath()
          ctx.arc(p.x, p.y, size * 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`
          ctx.shadowBlur = 20
          ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`
          ctx.fill()

          // The core layer (solid)
          ctx.beginPath()
          ctx.arc(p.x, p.y, size * 0.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${1 - i / strand.points.length})` // White hot core fading out
          ctx.shadowBlur = 0
          ctx.fill()
        }
      })

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
