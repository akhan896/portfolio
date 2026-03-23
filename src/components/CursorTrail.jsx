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
    
    // Trail configuration
    const trailLength = 40
    const points = Array(trailLength).fill(null).map(() => ({ x: mouse.x, y: mouse.y }))

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMouseMove)

    // Helper to interpolate between colors (Blue -> Purple -> Pink)
    const colorStops = [
      { r: 0, g: 240, b: 255 },    // Neon Blue (head)
      { r: 122, g: 92, b: 255 },   // Purple (middle)
      { r: 255, g: 78, b: 205 }    // Pink (tail)
    ]

    const getColor = (t) => {
      let r, g, b
      if (t < 0.5) {
        const nt = t * 2
        r = colorStops[0].r + (colorStops[1].r - colorStops[0].r) * nt
        g = colorStops[0].g + (colorStops[1].g - colorStops[0].g) * nt
        b = colorStops[0].b + (colorStops[1].b - colorStops[0].b) * nt
      } else {
        const nt = (t - 0.5) * 2
        r = colorStops[1].r + (colorStops[2].r - colorStops[1].r) * nt
        g = colorStops[1].g + (colorStops[2].g - colorStops[1].g) * nt
        b = colorStops[1].b + (colorStops[2].b - colorStops[1].b) * nt
      }
      return { r: Math.floor(r), g: Math.floor(g), b: Math.floor(b) }
    }

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end

    let animationFrameId
    const render = () => {
      // Fade out effect for ghosting trails (creates silky motion blur)
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = 'rgba(3, 0, 20, 0.4)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.globalCompositeOperation = 'lighter'
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // Physics: Update points following the leader (mouse)
      points[0].x = lerp(points[0].x, mouse.x, 0.35)
      points[0].y = lerp(points[0].y, mouse.y, 0.35)

      for (let i = 1; i < points.length; i++) {
        points[i].x = lerp(points[i].x, points[i - 1].x, 0.45)
        points[i].y = lerp(points[i].y, points[i - 1].y, 0.45)
      }

      // Draw smooth curve segments
      for (let i = 1; i < points.length - 1; i++) {
        const p0 = points[i - 1]
        const p1 = points[i]
        const p2 = points[i + 1]

        const xc1 = (p0.x + p1.x) / 2
        const yc1 = (p0.y + p1.y) / 2
        const xc2 = (p1.x + p2.x) / 2
        const yc2 = (p1.y + p2.y) / 2

        ctx.beginPath()
        ctx.moveTo(xc1, yc1)
        ctx.quadraticCurveTo(p1.x, p1.y, xc2, yc2)

        const t = i / points.length
        const color = getColor(t)
        const alpha = 1 - t // Fades out completely by the tail
        const lineWidth = Math.max(1, 16 * (1 - t)) // Tapers off natively

        const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
        
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = rgbaColor
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`
        ctx.stroke()
        
        // Add a brighter inner core
        ctx.lineWidth = lineWidth * 0.4
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`
        ctx.shadowBlur = 0
        ctx.stroke()
      }

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
