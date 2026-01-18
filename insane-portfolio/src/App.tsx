import { useDimensionStore } from './store/useDimensionStore';
import TheTrigger from './components/TheTrigger';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { mode } = useDimensionStore();

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out relative ${
      mode === 'NORMAL' ? 'bg-human-bg text-human-text' : 'bg-jojo-bg text-white'
    }`}>
      
      {/* 1. The Content Layer */}
      <main className="container mx-auto px-4 py-20 relative z-10">
        <header className="text-center mb-20">
          <motion.h1 
            key={mode} // Re-animates when mode changes
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`text-6xl font-bold mb-4 ${mode === 'JOJO' ? 'font-serif tracking-widest text-purple-400' : 'tracking-tight'}`}
          >
            {mode === 'NORMAL' ? 'Krish "Zord"' : 'STAND MASTER: ZORD'}
          </motion.h1>
          <p className="text-xl opacity-75">
            {mode === 'NORMAL' ? 'AI Researcher & Full Stack Engineer' : 'Power: A | Speed: A | Precision: Infinite'}
          </p>
        </header>

        {/* Placeholder for Marketplace/Portfolio */}
        <div className="h-96 border-2 border-dashed border-gray-500/30 rounded-lg flex items-center justify-center">
          <p className="text-2xl font-mono">
            {mode === 'NORMAL' ? '[ Portfolio Content ]' : '[ BOINGO MARKETPLACE LOADING... ]'}
          </p>
        </div>
      </main>

      {/* 2. The Trigger Button */}
      <TheTrigger />

      {/* 3. The "Time Crucified" Flash Effect Overlay */}
      <AnimatePresence>
        {mode === 'JOJO' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }} // Flash effect
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // Fast flash
            className="fixed inset-0 bg-white z-[999] pointer-events-none mix-blend-difference"
          />
        )}
      </AnimatePresence>

      {/* 4. The "Menacing" Background Pattern (JoJo Only) */}
      {mode === 'JOJO' && (
        <div className="fixed inset-0 pointer-events-none opacity-10 z-0" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 50% 50%, #7e22ce 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }} 
        />
      )}
    </div>
  );
}

export default App;