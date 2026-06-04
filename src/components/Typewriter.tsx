import { useState, useEffect, useCallback } from "react"

interface Line {
  text: string
  className?: string
}

interface TypewriterProps {
  lines: Line[]
  speed?: number
  pause?: number
  cursor?: string
}

export function Typewriter({ lines, speed = 50, pause = 600, cursor = "▊" }: TypewriterProps) {
  const [displayed, setDisplayed] = useState<Line[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  const tick = useCallback(() => {
    if (currentLine >= lines.length) {
      setDone(true)
      return
    }

    const line = lines[currentLine]

    if (currentChar < line.text.length) {
      const lineObj: Line = { text: line.text.slice(0, currentChar + 1), className: line.className }
      const newDisplayed = [...displayed]
      if (currentChar === 0) {
        newDisplayed.push(lineObj)
      } else {
        newDisplayed[newDisplayed.length - 1] = lineObj
      }
      setDisplayed(newDisplayed)
      setCurrentChar((c) => c + 1)
    } else {
      setCurrentLine((l) => l + 1)
      setCurrentChar(0)
    }
  }, [lines, currentLine, currentChar, displayed])

  useEffect(() => {
    if (currentLine >= lines.length) return
    const delay = currentChar === 0 && currentLine > 0 ? pause : speed
    const id = setTimeout(tick, delay)
    return () => clearTimeout(id)
  }, [tick, currentLine, currentChar, lines.length, pause, speed])

  return (
    <>
      {displayed.map((line, i) => (
        <span key={i}>
          {i > 0 ? <br /> : null}
          <span className={line.className || ""}>{line.text}</span>
          {i === displayed.length - 1 && !done && (
            <span className="animate-pulse-dot text-accent">{cursor}</span>
          )}
        </span>
      ))}
      {done && (
        <span>
          <br />
          <span className="animate-pulse-dot text-accent">{cursor}</span>
        </span>
      )}
    </>
  )
}
