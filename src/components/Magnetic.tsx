import { useRef, useState, type ReactNode } from "react"

interface MagneticProps {
  children: ReactNode
  strength?: number
  className?: string
  as?: "button" | "a"
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export function Magnetic({
  children,
  strength = 0.3,
  className = "",
  as = "button",
  href,
  target,
  rel,
  onClick,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  function handleMouse(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setOffset({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    })
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 })
  }

  const Tag = as

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <Tag
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={className}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {children}
      </Tag>
    </div>
  )
}
