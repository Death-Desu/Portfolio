import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ToBeContinued from './ToBeContinued'; // Ensure this file exists in the same folder

type TabType = 'HUMAN' | 'STAND' | 'DUALITY';

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState<TabType>('DUALITY');

  // VISUAL MODES
  const getVisualMode = () => {
    switch (activeTab) {
      case 'HUMAN': return "CONCEPT_WIREFRAME";
      case 'STAND': return "PHYSICS_ENGINE";
      case 'DUALITY': return "FINAL_RENDER";
    }
  };

  // PROJECT DATA
  const games = [
    {
      id: "PROJ_01",
      name: "CIPHER_AI",
      role: "Researcher",
      desc: "Adversarial Reinforcement Learning environment designed to stress-test LSTM Intrusion Detection Systems.",
      tech: "Python // PyTorch // RL"
    },
    {
      id: "PROJ_02",
      name: "VOID_ENGINE",
      role: "Architect",
      desc: "Custom C++ Physics Simulation capable of handling 500+ concurrent entities with optimized memory allocation.",
      tech: "C++ // Unreal Engine 5"
    },
    {
      id: "PROJ_03",
      name: "TECH_SPRINT",
      role: "Full Stack",
      desc: "Distributed recruitment platform with secure JWT auth and high-concurrency Node.js backend services.",
      tech: "Node.js // MongoDB // React"
    },
    {
      id: "PROJ_04",
      name: "THERMAL_GAN",
      role: "ML Engineer",
      desc: "Thermal-Optical Fusion for Night Surveillance using Generative Adversarial Networks.",
      tech: "GANs // Computer Vision"
    },
  ];

  // --- ANIMATION VARIANTS (THE FIX) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each card for the "domino" slam effect
        delayChildren: 0.1
      }
    },
    exit: { opacity: 0 }
  };

  const cardSlamVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8, rotateX: -45 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8
      }
    },
    exit: { scale: 0.9, opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-[#facc15] text-black font-black p-4 md:p-12 overflow-x-hidden relative selection:bg-black selection:text-[#facc15]">

      {/* 1. BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#000 3px, transparent 3px)`, backgroundSize: '30px 30px' }} />

      {/* 2. MENACING SFX (FLOATING TEXT) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: Math.random() * 90 + "vw", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.4, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "linear", delay: i * 2 }}
            className="absolute text-7xl md:text-9xl font-black italic text-black opacity-10"
          >
            ゴゴゴ
          </motion.div>
        ))}
      </div>

      {/* =========================================
          ZONE 1: OPERATOR DATA (HERO SECTION)
         ========================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10 mb-24 items-start max-w-7xl mx-auto">

        {/* LEFT: PHOTO CARD */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="absolute -top-10 -left-4 z-20 bg-black text-white px-8 py-2 transform -skew-x-12 shadow-[8px_8px_0px_#ea580c]"
          >
            <h1 className="text-6xl md:text-8xl italic tracking-tighter uppercase">DUALITY</h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, rotate: -2 }}
            className="mt-8 bg-white border-[8px] border-black p-3 shadow-[20px_20px_0px_#000] aspect-[3/4] relative overflow-hidden group"
          >
            <img
              src="/your-photo.jpg"
              alt="Krish Patel"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/600x800/000/fff?text=USER_ZORD" }}
            />
            {/* SFX Overlay */}
            <div className="absolute top-2 right-2 text-6xl opacity-0 group-hover:opacity-100 transition-opacity font-serif text-purple-600">ゴゴゴ</div>
          </motion.div>
        </div>

        {/* RIGHT: STATS SHEET */}
        <div className="lg:col-span-7 pt-10 lg:pt-0">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white border-8 border-black p-8 shadow-[15px_15px_0px_#ea580c] relative h-full flex flex-col justify-between hover:shadow-[20px_20px_0px_#000] transition-all"
          >
            <div className="flex justify-between items-start border-b-4 border-black pb-6 mb-6">
              <div>
                <h2 className="text-5xl italic uppercase">Operator_Data</h2>
                <p className="text-sm font-bold opacity-60 tracking-widest mt-1">ID: KRISH_PATEL // ALIAS: ZORD</p>
              </div>
              <div className="bg-black text-white px-4 py-2 text-2xl rotate-3 border-2 border-white">LVL: 8.4</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg uppercase tracking-wide flex-grow">
              <div className="space-y-4">
                <div className="group cursor-default">
                  <p className="text-xs opacity-50 font-bold mb-1">Education</p>
                  <p className="text-2xl italic bg-black text-white inline-block px-2 group-hover:bg-[#facc15] group-hover:text-black transition-colors">
                    B.Tech CSE (AI/ML)
                  </p>
                </div>
                <div className="group cursor-default">
                  <p className="text-xs opacity-50 font-bold mb-1">Research Focus</p>
                  <p className="text-2xl italic">Adversarial AI & RL</p>
                </div>
                <div className="group cursor-default">
                  <p className="text-xs opacity-50 font-bold mb-1">Primary Engine</p>
                  <p className="text-2xl italic">Unreal Engine 5</p>
                </div>
              </div>
              <div className="space-y-4 md:border-l-4 border-gray-200 md:pl-8">
                <div className="group cursor-default">
                  <p className="text-xs opacity-50 font-bold mb-1">Career Goal</p>
                  <p className="text-xl leading-tight">"To pursue a PhD and achieve financial independence."</p>
                </div>
                <div className="group cursor-default mt-6">
                  <p className="text-xs opacity-50 font-bold mb-1">Status</p>
                  <p className="text-xl italic text-black font-black border-b-4 border-green-500 inline-block">ONLINE</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          ZONE 2: THE "GRIMOIRE" (BOOK UI)
         ========================================= */}
      <div className="relative z-10 max-w-7xl mx-auto -mt-20 pt-24">

        {/* BOOKMARKS (TABS) */}
        <div className="flex justify-end pr-8 md:pr-16 relative gap-4 z-0">
          {[
            { id: 'HUMAN', color: 'bg-white', label: 'CONCEPT' },
            { id: 'STAND', color: 'bg-black', label: 'ENGINE', text: 'text-white' },
            { id: 'DUALITY', color: 'bg-[#facc15]', label: 'FINAL' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              animate={{
                height: activeTab === tab.id ? 100 : 80,
                y: activeTab === tab.id ? 10 : 20,
              }}
              className={`w-20 md:w-28 rounded-t-lg border-x-4 border-t-4 border-black flex flex-col items-center justify-start pt-4 transition-colors duration-200 cursor-pointer ${tab.color
                } ${tab.text || 'text-black'} ${activeTab === tab.id ? 'z-20' : 'z-10 opacity-80 hover:opacity-100'}`}
            >
              <span className="text-3xl font-black italic">{tab.id === 'HUMAN' ? 'I' : tab.id === 'STAND' ? 'II' : 'III'}</span>
              <span className="text-[10px] md:text-xs font-bold rotate-90 mt-4 whitespace-nowrap">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* BOOK COVER (CONTAINER) */}
        <div className="bg-white border-8 border-black shadow-[30px_30px_0px_#000] relative z-20 min-h-[800px] flex">

          {/* SPINE */}
          <div className="hidden md:block w-20 bg-black h-full relative border-r-8 border-gray-800 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-black italic uppercase whitespace-nowrap rotate-90 origin-center tracking-widest opacity-40">
              ARCHIVES
            </div>
          </div>

          {/* PAGE CONTENT */}
          <div className="flex-1 p-6 md:p-12 relative overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-end border-b-8 border-black pb-4 mb-8">
              <div>
                <h2 className="text-6xl md:text-8xl italic uppercase leading-none drop-shadow-[5px_5px_0px_#ea580c]">
                  CHAPTER <motion.span
                    key={activeTab} // Triggers animation on change
                    initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    className="inline-block"
                  >{activeTab}</motion.span>
                </h2>
                <div className="flex gap-4 mt-2">
                  <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase">View: {getVisualMode()}</span>
                </div>
              </div>
              <motion.div
                key={activeTab + "icon"}
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                className="text-6xl"
              >
                {activeTab === 'HUMAN' ? '🧪' : activeTab === 'STAND' ? '⚡' : '👑'}
              </motion.div>
            </div>

            {/* --- ANIMATED GRID --- */}
            <motion.div
              key={activeTab} // CRITICAL: This forces the grid to unmount/remount for the Slam effect
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <AnimatePresence mode="popLayout">
                {games.map((game, i) => (
                  <motion.div
                    key={game.id}
                    variants={cardSlamVariants} // Individual card slam
                    layoutId={game.id}
                    whileHover="hover"
                    className="bg-white border-[6px] border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] flex flex-col group relative"
                  >

                    {/* --- STAND AURA (GHOST EFFECT) --- */}
                    <motion.div
                      className="absolute inset-0 border-[6px] border-cyan-400 z-0 pointer-events-none"
                      variants={{
                        hover: { x: -8, y: -8, opacity: 0.8 }
                      }}
                      initial={{ opacity: 0, x: 0, y: 0 }}
                    />
                    <motion.div
                      className="absolute inset-0 border-[6px] border-rose-500 z-0 pointer-events-none"
                      variants={{
                        hover: { x: 8, y: 8, opacity: 0.8 }
                      }}
                      initial={{ opacity: 0, x: 0, y: 0 }}
                    />

                    {/* IMAGE AREA */}
                    <div className="h-[300px] w-full bg-black relative overflow-hidden border-b-[6px] border-black z-10">
                      <motion.img
                        src={`https://placehold.co/800x600/1a1a1a/ffffff?text=${getVisualMode()}+${i + 1}`}
                        alt="Project Visual"
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                        variants={{
                          hover: { scale: 1.15, filter: "contrast(1.2)" }
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Scanlines */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none" />

                      {/* Phase Tag */}
                      <div className={`absolute bottom-2 left-2 px-3 py-1 text-xs font-black uppercase border-4 border-black z-30 ${activeTab === 'HUMAN' ? 'bg-white text-black' :
                          activeTab === 'STAND' ? 'bg-black text-white' : 'bg-[#facc15] text-black'
                        }`}>
                        {activeTab} PHASE
                      </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="p-6 flex-1 bg-white relative z-10">
                      {/* Speech Bubble Tail */}
                      <div className="absolute -top-3 left-10 w-6 h-6 bg-white border-l-[6px] border-t-[6px] border-black transform rotate-45 z-20" />

                      <h3 className="text-4xl italic uppercase mb-2 leading-none group-hover:text-purple-700 transition-colors duration-300">{game.name}</h3>
                      <p className="text-sm font-bold bg-black text-white inline-block px-2 py-1 mb-4 transform -skew-x-12">{game.role}</p>
                      <div className="text-lg font-bold border-l-8 border-black pl-4 opacity-90 leading-tight">
                        "{game.desc}"
                      </div>

                      <div className="mt-6 pt-4 border-t-4 border-gray-100 text-xs font-black text-gray-500 uppercase flex justify-between items-center">
                        <span>{game.tech}</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="text-xl"
                        >
                          👉
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* PAGE NUMBER */}
            <div className="absolute bottom-4 right-8 text-xl font-black opacity-20 rotate-[-5deg]">
              PAGE {activeTab === 'HUMAN' ? '04' : activeTab === 'STAND' ? '08' : '12'}
            </div>

          </div>
        </div>
      </div>

      {/* 3. EXIT BUTTON (TO BE CONTINUED) */}
      <ToBeContinued />
    </div>
  );
}