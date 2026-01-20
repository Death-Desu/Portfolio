import { motion, AnimatePresence } from 'framer-motion';
import { useDimensionStore } from '../../store/useDimensionStore';

export default function StandUser() {
  const { difficulty } = useDimensionStore();

  // REPLACE THESE WITH YOUR REAL IMAGE PATHS LATER
  // For now, we use placeholders to prove the logic works.
  const assets = {
    human: "https://placehold.co/400x800/transparent/white?text=HUMAN+ZORD",
    stand: "https://placehold.co/500x900/transparent/purple?text=STAND+DUALITY", 
  };

  return (
    <div className="fixed bottom-0 left-0 z-0 h-[80vh] w-[40vw] pointer-events-none hidden lg:block">
      <AnimatePresence mode='sync'>
        
        {/* STATE: HUMAN (EASY) */}
        {(difficulty === 'EASY' || difficulty === 'HARD') && (
          <motion.img
            key="human"
            src={assets.human}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: difficulty === 'HARD' ? 0.8 : 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute bottom-0 left-10 h-full object-contain drop-shadow-2xl ${
              difficulty === 'HARD' ? 'grayscale mix-blend-hard-light z-20' : 'z-10'
            }`}
          />
        )}

        {/* STATE: STAND (MEDIUM / HARD) */}
        {(difficulty === 'MEDIUM' || difficulty === 'HARD') && (
          <motion.div
            key="stand"
            initial={{ x: -50, opacity: 0, scale: 0.9 }}
            animate={{ 
              x: difficulty === 'HARD' ? 50 : 0, // Moves slightly right in Hard mode to show both
              opacity: 1, 
              scale: 1 
            }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 h-full w-full z-10"
          >
            {/* The Idle "Breathing" Animation */}
            <motion.img
              src={assets.stand}
              animate={{ y: [0, -20, 0] }} // Floating effect
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="h-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}