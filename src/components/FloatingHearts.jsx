import { useMemo } from 'react'

const EMOJIS = ['💗', '💕', '🌸', '💖', '✨', '🤍']

// Soft hearts drifting up in the background. Pure CSS animation = cheap + smooth.
export default function FloatingHearts({ count = 14 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        emoji: EMOJIS[i % EMOJIS.length],
        left: Math.random() * 100,
        delay: Math.random() * 9,
        duration: 9 + Math.random() * 9,
        size: 14 + Math.random() * 22,
      })),
    [count],
  )

  return (
    <div className="floating" aria-hidden="true">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="float-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  )
}
