export default function Contact() {
  return (
    <footer className="bg-[#050505] pt-40 pb-20 px-10 border-x border-white/5 mx-0 md:mx-4">
      <div className="text-center space-y-12">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Let's Build <br/> The Future.</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 pt-10">
          <a href="mailto:your-email@example.com" className="group">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-mono">E-Mail</p>
            <p className="text-xl font-bold group-hover:underline decoration-blue-500 underline-offset-8 transition-all">yourname@vitap.ac.in</p>
          </a>
          <a href="#" className="group">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-mono">LinkedIn</p>
            <p className="text-xl font-bold group-hover:underline decoration-blue-500 underline-offset-8 transition-all">linkedin.com/in/zord</p>
          </a>
        </div>

        <div className="pt-32 flex flex-col items-center gap-4">
          <div className="w-12 h-[1px] bg-white/20" />
          <p className="font-mono text-[9px] text-gray-600 uppercase tracking-[0.5em]">
            Krish Patel // Zord // 2026 Edition
          </p>
        </div>
      </div>
    </footer>
  );
}