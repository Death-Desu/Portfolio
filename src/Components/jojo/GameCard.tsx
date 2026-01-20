import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useDimensionStore } from '../../store/useDimensionStore';

export default function Games() {
  const { setMode } = useDimensionStore();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 250, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 250, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <section className="min-h-screen py-20 px-10 flex flex-col items-center justify-center relative overflow-hidden bg-[#030303]">
      
      <div className="text-center mb-10 z-10">
        <h3 className="font-mono text-[9px] tracking-[0.6em] text-blue-500 uppercase mb-2">Gate_Terminal</h3>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Enter Simulation</h2>
      </div>

      {/* REDUCED SIZE CARD (max-w-2xl) */}
      <div className="perspective-container w-full max-w-2xl" onMouseMove={handleMouse}>
        <motion.div
          style={{ rotateX, rotateY }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setMode('JOJO')}
          className="relative h-[450px] w-full rounded-lg cursor-none overflow-hidden border border-white/10 bg-[#080808] transition-all duration-500 group eye-catcher-glow"
        >
          {/* 1. INDUSTRIAL STATE */}
          <div className="absolute inset-0 p-10 flex flex-col justify-between transition-all duration-700 group-hover:opacity-0 group-hover:scale-110">
            <div className="flex justify-between items-start font-mono text-[9px] text-gray-500">
              <div className="space-y-1">
                <p className="text-blue-500 font-bold tracking-widest">PERFORMANCE: 8.4_INDEX</p> 
                <p>STATUS: OPTIMIZED</p>
              </div>
              <div className="text-right">
                <p>U_ENGINE_5.4</p>
                <p>C++_ARCHITECT</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-5xl font-black tracking-tighter uppercase leading-none border-text italic">
                Wanna Play <br/> Games?
              </h4>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Click to Distortion_Link</p>
              </div>
            </div>
          </div>

          {/* 2. JOJO "YES! YES! YES!" STATE */}
          <div className="absolute inset-0 bg-[#facc15] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
            {/* Comic Halftone Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:15px_15px]" />
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ repeat: Infinity, duration: 0.3 }}
                className="flex gap-2 mb-2"
              >
                {["YES!", "YES!", "YES!"].map((text, i) => (
                  <span key={i} className="text-4xl font-black italic text-black drop-shadow-[3px_3px_0px_#fff]">{text}</span>
                ))}
              </motion.div>
              
              <h4 className="text-8xl font-black italic tracking-tighter uppercase text-white drop-shadow-[8px_8px_0px_#000] leading-none mb-4">
                YES!
              </h4>
              
              <div className="bg-black text-white px-6 py-2 font-black uppercase tracking-widest text-xs italic transform -skew-x-12 shadow-[5px_5px_0px_#ea580c]">
                Manifest Stand
              </div>
            </div>

            {/* Floating Stars */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -15, 0], rotate: 360 }}
                transition={{ duration: 3 + i, repeat: Infinity }}
                className="absolute text-orange-600 text-3xl"
                style={{ top: `${20 + i * 20}%`, left: `${15 + i * 20}%` }}
              >
                ★
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}