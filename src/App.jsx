import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import BigQuestion from './components/BigQuestion.jsx'
import SuccessScreen from './components/SuccessScreen.jsx'
import Adventures from './components/Adventures.jsx'
import Availability from './components/Availability.jsx'
import Celebration from './components/Celebration.jsx'
import FloatingHearts from './components/FloatingHearts.jsx'
import { config } from './config.js'

// Flow: question → success → adventures → availability → celebration
export default function App() {
  const [stage, setStage] = useState('question')
  const [pickedAdventures, setPickedAdventures] = useState([])
  const [pickedSlots, setPickedSlots] = useState([])

  return (
    <main className="app">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {stage === 'question' && (
          <BigQuestion
            key="question"
            config={config}
            onYes={() => setStage('success')}
          />
        )}

        {stage === 'success' && (
          <SuccessScreen
            key="success"
            config={config}
            onNext={() => setStage('adventures')}
          />
        )}

        {stage === 'adventures' && (
          <Adventures
            key="adventures"
            config={config}
            selected={pickedAdventures}
            setSelected={setPickedAdventures}
            onNext={() => setStage('availability')}
          />
        )}

        {stage === 'availability' && (
          <Availability
            key="availability"
            config={config}
            selected={pickedSlots}
            setSelected={setPickedSlots}
            onBack={() => setStage('adventures')}
            onNext={() => setStage('celebration')}
          />
        )}

        {stage === 'celebration' && (
          <Celebration
            key="celebration"
            config={config}
            adventures={pickedAdventures}
            slots={pickedSlots}
            onRestart={() => {
              setPickedAdventures([])
              setPickedSlots([])
              setStage('adventures')
            }}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
