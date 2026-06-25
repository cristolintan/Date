import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Word-by-word reveal for the headline.
const sentence = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
}
const word = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    // Spring for y/opacity (nice bounce), but a tween for filter — a spring
    // overshoots blur(0) into invalid negative values and spams the console.
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 14,
      filter: { type: 'tween', duration: 0.45, ease: 'easeOut' },
    },
  },
}

export default function BigQuestion({ config, onYes }) {
  const noRef = useRef(null)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [yesScale, setYesScale] = useState(1)
  const [dodges, setDodges] = useState(0)

  // Move NO to a fresh random spot, fully inside the viewport, and let YES grow.
  const dodge = () => {
    const btn = noRef.current
    if (!btn) return
    const r = btn.getBoundingClientRect()
    const pad = 14
    const targetX = pad + Math.random() * (window.innerWidth - r.width - pad * 2)
    const targetY = pad + Math.random() * (window.innerHeight - r.height - pad * 2)
    // r.left/top already include the current transform, so shift by the delta.
    setNoPos((p) => ({ x: p.x + (targetX - r.left), y: p.y + (targetY - r.top) }))
    setYesScale((s) => Math.min(s + 0.16, 2.4))
    setDodges((d) => d + 1)
  }

  // The big headline: the question first, then the playful reactions as NO is dodged.
  const isQuestion = dodges === 0
  const headline = isQuestion
    ? config.question
    : config.noReactions[(dodges - 1) % config.noReactions.length]
  const words = headline.split(' ')

  return (
    <motion.section
      className="card question-card"
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      transition={{ type: 'spring', stiffness: 90, damping: 16 }}
    >
      {config.photo && (
        <motion.div
          className="photo-frame"
          initial={{ scale: 0, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 140, damping: 12 }}
        >
          <img src={config.photo} alt="" />
          <motion.span
            className="photo-sparkle"
            animate={{ scale: [1, 1.25, 1], rotate: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          >
            ✨
          </motion.span>
        </motion.div>
      )}

      <div className="question-wrap">
        <AnimatePresence mode="wait">
          <motion.h1
            key={headline}
            className="question"
            variants={sentence}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {words.map((w, i) => (
              <motion.span key={i} className="q-word" variants={word}>
                {w}&nbsp;
              </motion.span>
            ))}
            {isQuestion && (
              <motion.span
                className="q-heart"
                variants={word}
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut' }}
              >
                {config.questionEmoji}
              </motion.span>
            )}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="buttons">
        <motion.button
          className="btn yes"
          onClick={onYes}
          animate={{ scale: yesScale }}
          whileHover={{ scale: yesScale * 1.05 }}
          whileTap={{ scale: yesScale * 0.93 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          {config.yesLabel} {config.yesEmoji}
        </motion.button>

        <motion.button
          ref={noRef}
          className="btn no"
          onMouseEnter={dodge}
          onClick={dodge}
          animate={{
            x: noPos.x,
            y: noPos.y,
            scale: Math.max(1 - dodges * 0.045, 0.55),
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
        >
          {config.noLabel} {config.noEmoji}
        </motion.button>
      </div>

      {dodges > 2 && (
        <motion.p className="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          psst… the YES button is right there 👉
        </motion.p>
      )}
    </motion.section>
  )
}
