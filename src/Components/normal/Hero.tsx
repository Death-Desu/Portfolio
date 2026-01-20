import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { useScramble } from '../../hooks/useScramble';

export default function Hero() {
  const nameDisplay = useScramble("KRISH PATEL");
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth 3D tilt effect
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  return (
    <section className="min-h-screen relative flex flex-col bg-[#050505] overflow-hidden" onMouseMove={handleMouse}>
      
      {/* BACKGROUND EYE-CATCHERS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* 1. TOP BAR */}
      <nav className="h-20 flex items-center justify-between px-10 border-b border-white/5 backdrop-blur-xl sticky top-0 z-50">
        <span className="font-mono text-[10px] tracking-[0.5em] text-blue-500 font-black">ZORD_OS // V.8.4</span>
        <div className="flex gap-8 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
           <span className="hover:text-white transition-colors cursor-pointer">[ 01 : RESEARCH ]</span>
           <span className="hover:text-white transition-colors cursor-pointer">[ 02 : PROJECTS ]</span>
        </div>
      </nav>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 px-10 relative z-10 items-center">
        
        {/* 2. TEXT MODULE */}
        <div className="lg:col-span-7 py-20">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[11vw] font-black tracking-tighter leading-[0.8] uppercase italic italic border-text mb-6">
              {nameDisplay}
            </h1>
            <p className="max-w-2xl text-gray-400 text-xl font-light leading-relaxed border-l-2 border-blue-500 pl-8">
              Specialized in <span className="text-white font-bold">Distributed Systems</span>  and 
              <span className="text-white font-bold">Adversarial AI</span>[cite: 28, 31]. 
              Engineering secure, high-concurrency backend services[cite: 21].
            </p>
            
            <div className="flex gap-12 mt-12">
               <div className="group">
                  <p className="text-[10px] text-blue-500 font-mono tracking-widest uppercase mb-2">Performance Index</p>
                  <p className="text-4xl font-black italic">8.4 CGPA </p>
               </div>
               <div className="group">
                  <p className="text-[10px] text-purple-500 font-mono tracking-widest uppercase mb-2">System Status</p>
                  <p className="text-4xl font-black italic">OPERATIONAL</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* 3. THE 3D IDENTITY SHARD (Photo) */}
        <div className="lg:col-span-5 perspective-container">
          <motion.div 
            style={{ rotateX, rotateY }}
            className="glass-card relative w-full aspect-[4/5] max-w-[400px] mx-auto rounded-xl p-4 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="/your-photo.jpg" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-lg opacity-60 group-hover:opacity-100" 
              alt="Krish Patel"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/800x1000/0a0a0a/ffffff?text=IDENTITY_LOCKED" }}
            />
            {/* Tech Scanlines Overlay */}
            <div className="absolute top-10 left-10 mix-blend-difference font-mono text-[10px] text-white/50">
               <p>ID: ZORD_01</p>
               <p>LOC: 16.50N 80.50E</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}