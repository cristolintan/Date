import { motion } from 'framer-motion'
import SelectableGrid from './SelectableGrid.jsx'

const card = {
  initial: { opacity: 0, scale: 0.95, y: 22 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: -16, transition: { duration: 0.28 } },
}

export default function Availability({ config, selected, setSelected, onBack, onNext }) {
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
      <h1 className="step-title">{config.availabilityTitle}</h1>
      <p className="step-hint">{config.availabilityHint}</p>

      <SelectableGrid
        items={config.availabilityOptions}
        selected={selected}
        onToggle={toggle}
      />

      <div className="step-actions">
        <motion.button
          className="btn ghost step-back"
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {config.availabilityBackLabel}
        </motion.button>

        <motion.button
          className="btn yes step-next"
          onClick={onNext}
          disabled={selected.length === 0}
          whileHover={selected.length ? { scale: 1.05 } : {}}
          whileTap={selected.length ? { scale: 0.95 } : {}}
        >
          {config.availabilityConfirmLabel}
        </motion.button>
      </div>
    </motion.section>
  )
}
