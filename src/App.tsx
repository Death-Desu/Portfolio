import { motion, AnimatePresence } from 'framer-motion';
import { useDimensionStore } from './store/useDimensionStore';

// Global UI Elements
import TheTrigger from './Components/TheTrigger';
import CustomCursor from './Components/common/CustomCursor';

// Normal Mode (Industrial / Premium UX)
import Hero from './Components/normal/Hero';
import ProjectGrid from './Components/normal/ProjectGrid';
import Details from './Components/normal/Details';
import Games from './Components/normal/Games';
import Contact from './Components/normal/Contact';

// JoJo Mode (Comic / High UI)
import Marketplace from './Components/jojo/Marketplace';
import StandUser from './Components/jojo/StandUser';

/**
 * ZORD_OS Kernel v2.5
 * Identity: Krish Patel (Zord)
 * Specialization: AI Research & Game Architecture
 */
function App() {
  const { mode } = useDimensionStore();

  return (
    <div className={`min-h-screen relative overflow-x-hidden selection:bg-white selection:text-black transition-colors duration-700 ${
      mode === 'NORMAL' ? 'bg-[#050505] text-white' : 'bg-[#facc15] text-black'
    }`}>
      
      {/* 1. HIGH-PRECISION INPUT (Custom Cursor) */}
      <CustomCursor />

      {/* 2. THE OS TEXTURE (Scanlines) 
          Active only in Normal mode for that "Systems Architect" feel
      */}
      {mode === 'NORMAL' && <div className="scanline fixed inset-0 pointer-events-none z-[999]" />}

      {/* 3. CORE CONTENT LAYER */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          
          {mode === 'NORMAL' ? (
            /* [STATE A: INDUSTRIAL ARCHITECT INTERFACE] 
               Focus: High UX, Smooth Scrolling, Professional Data.
            */
            <motion.div 
              key="normal-mode"
              initial={{ opacity: 0, filter: 'blur(15px)' }} 
              animate={{ opacity: 1, filter: 'blur(0px)' }} 
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Identity & Status */}
              <Hero />
              
              {/* Selected Experience (Projects) */}
              <ProjectGrid />

              {/* Technical Arsenal & Timeline (Skills/Experience) */}
              <Details />

              {/* The "Bridge" Section (Games) */}
              <Games />

              {/* Final Outreach (Contact) */}
              <Contact />
            </motion.div>
          ) : (
            /* [STATE B: STAND_USER COMIC INTERFACE] 
               Focus: High UI, Comic Aesthetics, Bold Colors.
            */
            <motion.div
              key="jojo-mode"
              initial={{ opacity: 0, x: 200, skewX: -10 }}
              animate={{ opacity: 1, x: 0, skewX: 0 }}
              exit={{ opacity: 0, x: -200, skewX: 10 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            >
              {/* The JoJo Marketplace UI */}
              <Marketplace />
              
              {/* Signature Comic Exit */}
              <footer className="py-24 bg-black text-white text-center font-black italic tracking-[0.2em] text-4xl uppercase border-t-8 border-white">
                To Be Continued...
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. GLOBAL SYSTEM TRIGGERS & OVERLAYS */}
      
      {/* The Dimension Switcher (Stand Arrow) */}
      <TheTrigger />

      {/* Holographic Stand Avatar */}
      <AnimatePresence>
        {mode === 'JOJO' && (
          <motion.div
            initial={{ opacity: 0, x: 150, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 150 }}
            className="fixed bottom-0 right-0 z-40 pointer-events-none"
          >
            <StandUser />
          </motion.div>
        )}
      </AnimatePresence>

      {/* "The World" Time-Stop Flash Effect */}
      <AnimatePresence>
        {mode === 'JOJO' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, times: [0, 0.1, 1] }}
            className="fixed inset-0 bg-white z-[10000] pointer-events-none mix-blend-difference"
          />
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;