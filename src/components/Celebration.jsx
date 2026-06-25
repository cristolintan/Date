import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const COLORS = ['#ff8fb1', '#ffd1e0', '#c8a2ff', '#fff0a3', '#ffffff']

// Resolve picked titles back to their {emoji, title} for display.
const resolve = (titles, pool) =>
  titles.map((t) => pool.find((p) => p.title === t)).filter(Boolean)

const listV = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const chipV = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 16 } },
}

export default function Celebration({ config, adventures, slots, onRestart }) {
  const pickedAdventures = resolve(adventures, config.adventures)
  const pickedSlots = resolve(slots, config.availabilityOptions)

  // Big finale confetti.
  useEffect(() => {
    const fire = (o) => confetti({ colors: COLORS, disableForReducedMotion: true, ...o })
    fire({ particleCount: 160, spread: 80, origin: { y: 0.55 } })
    const t1 = setTimeout(() => fire({ particleCount: 90, angle: 60, spread: 60, origin: { x: 0 } }), 220)
    const t2 = setTimeout(() => fire({ particleCount: 90, angle: 120, spread: 60, origin: { x: 1 } }), 380)
    const heart = confetti.shapeFromText ? confetti.shapeFromText({ text: '❤️', scalar: 2 }) : null
    const t3 = setTimeout(
      () => fire({ particleCount: 30, spread: 120, scalar: 2, shapes: heart ? [heart] : undefined, origin: { y: 0.4 } }),
      560,
    )
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [])

  return (
    <motion.section
      className="card celebration-card"
      initial={{ opacity: 0, scale: 0.9, y: 22 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 90, damping: 15 }}
    >
      <motion.div
        className="big-heart"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.25, 1] }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'backOut' }}
      >
        <motion.span animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
          🥳
        </motion.span>
      </motion.div>

      <motion.h1
        className="celebration-title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        {config.celebrationTitle}
      </motion.h1>

      <motion.p
        className="celebration-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {config.celebrationMessage}
      </motion.p>

      {pickedAdventures.length > 0 && (
        <div className="plan-block">
          <span className="plan-label">{config.celebrationAdventuresLabel}</span>
          <motion.div className="plan-chips" variants={listV} initial="hidden" animate="show">
            {pickedAdventures.map((a) => (
              <motion.span key={a.title} className="plan-chip" variants={chipV}>
                {a.emoji} {a.title}
              </motion.span>
            ))}
          </motion.div>
        </div>
      )}

      {pickedSlots.length > 0 && (
        <div className="plan-block">
          <span className="plan-label">{config.celebrationWhenLabel}</span>
          <motion.div className="plan-chips" variants={listV} initial="hidden" animate="show">
            {pickedSlots.map((s) => (
              <motion.span key={s.title} className="plan-chip" variants={chipV}>
                {s.emoji} {s.title}
              </motion.span>
            ))}
          </motion.div>
        </div>
      )}

      <motion.button
        className="btn ghost celebration-restart"
        onClick={onRestart}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {config.celebrationRestartLabel}
      </motion.button>
    </motion.section>
  )
}
