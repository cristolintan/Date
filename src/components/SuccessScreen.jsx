import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const COLORS = ['#ff8fb1', '#ffd1e0', '#c8a2ff', '#fff0a3', '#ffffff']

export default function SuccessScreen({ config, onNext }) {
  // A short, celebratory confetti sequence on mount.
  useEffect(() => {
    const fire = (opts) => confetti({ colors: COLORS, disableForReducedMotion: true, ...opts })

    fire({ particleCount: 130, spread: 75, origin: { y: 0.6 } })
    const t1 = setTimeout(() => fire({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 } }), 250)
    const t2 = setTimeout(() => fire({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 } }), 400)

    const heart = confetti.shapeFromText
      ? confetti.shapeFromText({ text: '❤️', scalar: 2 })
      : null
    const t3 = setTimeout(
      () =>
        fire({
          particleCount: 28,
          spread: 110,
          scalar: 2,
          shapes: heart ? [heart] : undefined,
          origin: { y: 0.35 },
        }),
      650,
    )

    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [])

  return (
    <motion.section
      className="card success-card"
      initial={{ opacity: 0, scale: 0.9, y: 22 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 90, damping: 15 }}
    >
      <motion.div
        className="big-heart"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.25, 1] }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'backOut' }}
      >
        <motion.span
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
        >
          {config.successEmoji}
        </motion.span>
      </motion.div>

      {config.celebrationGif && (
        <motion.img
          className="dancing-cat"
          src={config.celebrationGif}
          alt="dancing cat celebrating"
          draggable="false"
          initial={{ scale: 0, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 12 }}
        />
      )}

      <motion.h1
        className="success-title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {config.successTitle} {config.successEmoji}
      </motion.h1>

      {config.showFutureButton && (
        <motion.button
          className="btn yes future-btn"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
        >
          {config.futureButtonLabel}
        </motion.button>
      )}
    </motion.section>
  )
}
