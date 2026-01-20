import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function ProjectGrid() {
  const experiences = [
    { 
      id: "LOG_01", 
      title: "Google Tech Sprint", 
      role: "SDE Intern", 
      tech: "Node.js • React • MongoDB",
      desc: "Built a scalable recruitment platform; owned backend API development for secure JWT authentication."
    },
    { 
      id: "LOG_02", 
      title: "Smart India Hackathon", 
      role: "Core Developer", 
      tech: "C++ • Unreal Engine",
      desc: "National Finalist. Engineered C++ simulations handling 500+ concurrent entities with memory-efficient OOD."
    },
    { 
      id: "LOG_03", 
      title: "Adversarial AI", 
      role: "Research Lead", 
      tech: "Python • PyTorch • RL",
      desc: "Stress-testing LSTM-based intrusion detection systems using multi-stage reinforcement learning attack behaviors."
    }
  ];

  return (
    <section className="bg-[#030303] py-32 px-10 border-x border-white/5 mx-0 md:mx-4">
      <div className="mb-20 flex items-baseline gap-4">
        <h2 className="text-5xl font-black tracking-tighter uppercase italic">Selected_Experience</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
        <span className="font-mono text-[9px] text-blue-500 font-bold uppercase tracking-widest">Index: 03</span>
      </div>

      <div className="space-y-1">
        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group relative grid grid-cols-12 py-12 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors cursor-none"
          >
            <div className="col-span-1 font-mono text-[10px] text-gray-600 group-hover:text-blue-500 transition-colors">
              {exp.id}
            </div>
            <div className="col-span-11 md:col-span-5">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:translate-x-3 transition-transform duration-500">
                {exp.title}
              </h3>
              <p className="text-blue-500 font-mono text-[10px] mt-2 font-bold uppercase tracking-widest">{exp.role}</p>
            </div>
            <div className="col-span-12 md:col-span-4 mt-6 md:mt-0">
               <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
                {exp.desc}
               </p>
            </div>
            <div className="col-span-12 md:col-span-2 flex justify-end mt-6 md:mt-0">
               <div className="font-mono text-[9px] text-gray-600 border border-white/10 px-3 py-1 rounded-full group-hover:border-blue-500 group-hover:text-white transition-all">
                {exp.tech}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}