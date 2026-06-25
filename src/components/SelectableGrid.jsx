import { motion } from 'framer-motion'

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = {
  hidden: { opacity: 0, y: 18, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 14 } },
}

// A grid of tappable cards. `selected` is an array of titles; tapping toggles.
export default function SelectableGrid({ items, selected, onToggle }) {
  return (
    <motion.div className="select-grid" variants={grid} initial="hidden" animate="show">
      {items.map((it) => {
        const isOn = selected.includes(it.title)
        return (
          <motion.button
            key={it.title}
            type="button"
            className={`select-card${isOn ? ' selected' : ''}`}
            variants={item}
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onToggle(it.title)}
            aria-pressed={isOn}
          >
            <span className="select-check" aria-hidden="true">
              {isOn ? '💖' : ''}
            </span>
            <span className="select-emoji">{it.emoji}</span>
            <span className="select-title">{it.title}</span>
          </motion.button>
        )
      })}
    </motion.div>
  )
}
