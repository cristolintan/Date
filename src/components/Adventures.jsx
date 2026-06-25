import { motion } from 'framer-motion'

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = {
  hidden: { opacity: 0, y: 18, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 14 } },
}

export default function Adventures({ items }) {
  return (
    <motion.div className="adventures" variants={grid} initial="hidden" animate="show">
      {items.map((a, i) => (
        <motion.div
          key={i}
          className="adventure"
          variants={item}
          whileHover={{ y: -6, scale: 1.05 }}
        >
          <span className="adventure-emoji">{a.emoji}</span>
          <span className="adventure-title">{a.title}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
