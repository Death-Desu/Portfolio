import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useDimensionStore } from '../../store/useDimensionStore';

export default function Games() {
  const setMode = useDimensionStore((state) => state.setMode);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  return (
    <section className="min-h-screen py-24 px-10 flex flex-col items-center justify-center relative bg-[#030303] overflow-hidden">
      <div className="text-center mb-12 z-10">
        <h3 className="font-mono text-[9px] tracking-[0.6em] text-blue-500 uppercase mb-2">Protocol_Initialize</h3>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Beyond Reality</h2>
      </div>

      <div className="perspective-container w-full max-w-2xl">
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set((e.clientX - rect.left) / rect.width - 0.5);
            y.set((e.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          onClick={() => setMode('JOJO')}
          className="relative h-[480px] w-full rounded-xl cursor-pointer overflow-hidden border border-white/10 bg-[#080808] group shadow-[0_0_50px_-12px_rgba(0,71,255,0.2)]"
        >
          {/* INDUSTRIAL LAYER */}
          <div className="absolute inset-0 p-12 flex flex-col justify-between z-10 transition-all duration-500 group-hover:opacity-0 group-hover:scale-105 pointer-events-none">
            <div className="flex justify-between items-start font-mono text-[9px] text-gray-500 uppercase">
              <div className="space-y-1">
                <p className="text-blue-500 font-bold tracking-widest">GPA: 8.4</p>
                <p>Core: UE5_Simulation</p>
              </div>
              <div className="text-right space-y-1">
                <p>Entities: 500+</p>
                <p>Finalist: SIH_2024</p>
              </div>
            </div>
            <h4 className="text-6xl font-black tracking-tighter uppercase leading-none italic border-text opacity-40">
              Wanna Play <br/> Games?
            </h4>
          </div>

          {/* JOJO OVERLAY (YES! YES! YES!) */}
          <div className="absolute inset-0 bg-[#facc15] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20 pointer-events-none overflow-hidden">
            {/* Comic Texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:20px_20px]" />
            
            {/* STARS LAYER (Hardcoded to render) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
               <motion.span animate={{ rotate: 360, scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 left-10 text-orange-600 text-5xl">★</motion.span>
               <motion.span animate={{ rotate: -360, scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute bottom-10 right-10 text-orange-600 text-5xl">★</motion.span>
               <motion.span animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-20 right-20 text-orange-600 text-3xl">★</motion.span>
            </div>

            <div className="relative z-30 flex flex-col items-center text-black">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 0.3 }} className="flex gap-3 mb-4 font-black italic text-5xl">
                <span>YES!</span><span>YES!</span><span>YES!</span>
              </motion.div>
              <h4 className="text-9xl font-black italic uppercase text-white drop-shadow-[8px_8px_0px_#000] leading-none mb-6">YES!</h4>
              <div className="bg-black text-white px-8 py-3 font-black uppercase text-xs italic transform -skew-x-12">CLICK TO SWITCH</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}