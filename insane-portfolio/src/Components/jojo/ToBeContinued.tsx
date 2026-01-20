import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react'; 
import { useDimensionStore } from '../../store/useDimensionStore';

export default function ToBeContinued() {
  const setMode = useDimensionStore((state) => state.setMode);

  return (
    <div className="fixed bottom-8 right-8 z-50 cursor-pointer group">
      <motion.button 
        onClick={() => setMode('NORMAL')}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, x: -10 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="bg-black/90 text-[#cda434] border-4 border-[#cda434] px-8 py-4 flex items-center gap-6 transform -skew-x-12 shadow-[10px_10px_0px_rgba(0,0,0,0.4)] hover:shadow-[15px_15px_0px_#ea580c] transition-shadow"
      >
        <div className="flex flex-col items-end leading-none">
          <span className="text-[10px] font-bold tracking-widest text-white uppercase group-hover:text-red-500 transition-colors">System Action</span>
          <span className="text-xl font-black italic uppercase">Return to Base</span>
        </div>
        
        <div className="h-10 w-[2px] bg-[#cda434] group-hover:bg-white transition-colors" />
        
        <div className="flex flex-col items-start leading-none relative">
          <span className="text-4xl font-black italic tracking-tighter group-hover:text-white transition-colors">To Be Continued</span>
          {/* Arrow Graphic */}
          <div className="absolute -right-12 bottom-1 w-0 h-0 border-t-[12px] border-t-transparent border-r-[20px] border-r-[#cda434] border-b-[12px] border-b-transparent transform rotate-180 group-hover:border-r-red-500 transition-colors" />
        </div>
      </motion.button>
    </div>
  );
}