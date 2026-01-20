import { motion } from 'framer-motion';
import { useDimensionStore } from '../../store/useDimensionStore';
import { MoveRight } from 'lucide-react';

export default function ArrowSlider() {
  const { difficulty, setDifficulty } = useDimensionStore();

  const steps = ['EASY', 'MEDIUM', 'HARD'] as const;
  const currentIndex = steps.indexOf(difficulty);

  return (
    <div className="w-full max-w-xl mx-auto mb-12 relative">
      {/* The Track */}
      <div className="h-4 bg-gray-800 border-2 border-black rounded-full relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-yellow-400"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentIndex / 2) * 100}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      {/* The Clickable Zones (Invisible but functional) */}
      <div className="absolute top-[-10px] left-0 w-full flex justify-between px-1">
        {steps.map((step) => (
          <button
            key={step}
            onClick={() => setDifficulty(step)}
            className="w-10 h-10 rounded-full flex items-center justify-center relative focus:outline-none"
          >
            {/* The Markers */}
            <div className={`w-4 h-4 rounded-full border-2 border-black transition-colors duration-300 ${
              difficulty === step ? 'bg-yellow-400 scale-125' : 'bg-gray-600'
            }`} />
            
            {/* The Labels */}
            <span className={`absolute top-10 text-xs font-bold tracking-widest transition-opacity ${
              difficulty === step ? 'opacity-100 text-yellow-400' : 'opacity-50 text-gray-500'
            }`}>
              {step}
            </span>
          </button>
        ))}
      </div>

      {/* The Moving Arrow Head */}
      <motion.div
        className="absolute top-[-20px] pointer-events-none"
        initial={{ left: '0%' }}
        animate={{ left: `${(currentIndex / 2) * 100}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ x: '-50%' }} // Center the arrow on the dot
      >
        <MoveRight className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] rotate-90" />
      </motion.div>
    </div>
  );
}