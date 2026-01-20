import { motion } from 'framer-motion';

export default function Details() {
  const skillGroups = [
    { 
      category: "Programming", 
      items: ["C++", "Python", "Java", "JavaScript", "SQL"],
      icon: "0x01" 
    },
    { 
      category: "Systems & Engines", 
      items: ["Unreal Engine 5", "Node.js", "MongoDB", "Linux", "Git"],
      icon: "0x02" 
    },
    { 
      category: "Core Research", 
      items: ["Distributed Systems", "Network Security", "Adversarial AI", "DSA"],
      icon: "0x03" 
    }
  ];

  return (
    <div className="bg-[#030303] mx-0 md:mx-4 font-inter">
      {/* SECTION 1: SKILLS GRID */}
      <section className="py-32 px-10 border-x border-white/5">
        <div className="mb-20 flex items-baseline gap-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">The_Toolkit</h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
              className="bg-[#080808] border border-white/10 p-10 relative overflow-hidden group transition-all duration-500"
            >
              <span className="font-mono text-[9px] text-gray-600 mb-8 block uppercase tracking-widest">{group.icon} //</span>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-8 group-hover:text-blue-500 transition-colors">
                {group.category}
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-[10px] font-mono text-gray-500 border border-white/5 px-2 py-1 group-hover:border-white/20 group-hover:text-white transition-all">
                    {item}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-[-20px] right-[-10px] text-7xl font-black text-white/[0.02] select-none italic">0{i+1}</span>
            </motion.div>
          ))}
        </div>

        {/* 8.4 GPA EYE-CATCHER */}
        <div className="mt-4 bg-[#080808] border border-white/10 p-10 flex items-center justify-between group hover:border-blue-500/30 transition-all">
          <div>
            <h4 className="text-sm font-mono text-blue-500 font-bold uppercase tracking-[0.3em]">Performance_Metric</h4>
            <p className="text-6xl font-black tracking-tighter mt-2">CGPA: 8.40</p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">Academic_Status</p>
            <p className="text-xl font-bold uppercase italic text-white/40 group-hover:text-white transition-colors">Verified_Researcher</p>
          </div>
        </div>
      </section>
    </div>
  );
}