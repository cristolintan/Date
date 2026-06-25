import { motion } from 'framer-motion'
import SelectableGrid from './SelectableGrid.jsx'

const card = {
  initial: { opacity: 0, scale: 0.95, y: 22 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: -16, transition: { duration: 0.28 } },
}

export default function Adventures({ config, selected, setSelected, onNext }) {
  const toggle = (title) =>
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    )

  return (
    <motion.section
      className="card step-card"
      variants={card}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'spring', stiffness: 90, damping: 16 }}
    >
      <h1 className="step-title">{config.adventuresTitle}</h1>
      <p className="step-hint">{config.adventuresHint}</p>

      <SelectableGrid
        items={config.adventures}
        selected={selected}
        onToggle={toggle}
      />

      <motion.button
        className="btn yes step-next"
        onClick={onNext}
        disabled={selected.length === 0}
        whileHover={selected.length ? { scale: 1.05 } : {}}
        whileTap={selected.length ? { scale: 0.95 } : {}}
      >
        {config.adventuresNextLabel}
      </motion.button>
    </motion.section>
  )
}
