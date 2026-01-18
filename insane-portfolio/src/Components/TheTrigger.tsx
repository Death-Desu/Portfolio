import { motion } from 'framer-motion';
import { useDimensionStore } from '../store/useDimensionStore';
import { ArrowRight, Zap } from 'lucide-react';

export default function TheTrigger() {
  const { mode, toggleMode } = useDimensionStore();

  return (
    <button
      onClick={toggleMode}
      className="fixed bottom-8 right-8 z-50 group cursor-pointer"
    >
      <div className={`
        relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all duration-500
        ${mode === 'NORMAL' ? 'bg-white hover:bg-gray-100' : 'bg-purple-900 hover:bg-purple-800 border-2 border-yellow-400'}
      `}>
        {/* Icon Swap Logic */}
        <motion.div
          animate={{ rotate: mode === 'JOJO' ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {mode === 'NORMAL' ? (
            <ArrowRight className="w-6 h-6 text-black" />
          ) : (
            <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          )}
        </motion.div>
        
        {/* Tooltip hint */}
        <span className="absolute -top-10 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {mode === 'NORMAL' ? 'Activate Stand' : 'Deactivate'}
        </span>
      </div>
    </button>
  );
}