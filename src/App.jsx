import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BigQuestion from './components/BigQuestion.jsx'
import SuccessScreen from './components/SuccessScreen.jsx'
import FloatingHearts from './components/FloatingHearts.jsx'
import { config } from './config.js'

export default function App() {
  const [accepted, setAccepted] = useState(false)

  return (
    <main className="app">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {accepted ? (
          <SuccessScreen key="success" config={config} />
        ) : (
          <BigQuestion
            key="question"
            config={config}
            onYes={() => setAccepted(true)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
