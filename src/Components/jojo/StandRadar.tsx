import { motion } from 'framer-motion';

export type StandStats = {
  pwr: string; // Power
  spd: string; // Speed
  rng: string; // Range
  per: string; // Persistence
  prc: string; // Precision
  dev: string; // Potential
};

const statToVal = (grade: string) => {
  // Convert JoJo grades to percentage for the chart
  switch (grade) {
    case 'S': return 100;
    case 'A': return 80;
    case 'B': return 60;
    case 'C': return 40;
    case 'D': return 20;
    default: return 10;
  }
};

export default function StandRadar({ stats }: { stats: StandStats }) {
  const points = [
    statToVal(stats.pwr), // Top
    statToVal(stats.spd), // Top Right
    statToVal(stats.rng), // Bottom Right
    statToVal(stats.per), // Bottom
    statToVal(stats.prc), // Bottom Left
    statToVal(stats.dev), // Top Left
  ];

  // Calculate SVG polygon points (Hexagon mapping)
  const polyString = points.map((val, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    const x = 50 + (val / 100) * 50 * Math.cos(angle);
    const y = 50 + (val / 100) * 50 * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/80 rounded-full border-2 border-black shadow-sm p-1">
      {/* Background Grid */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20">
        <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="black" strokeWidth="1" />
        <line x1="50" y1="50" x2="50" y2="0" stroke="black" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="93.3" y2="25" stroke="black" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="93.3" y2="75" stroke="black" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="50" y2="100" stroke="black" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="6.7" y2="75" stroke="black" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="6.7" y2="25" stroke="black" strokeWidth="0.5" />
      </svg>

      {/* The Stat Polygon */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-md">
        <motion.polygon 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          points={polyString} 
          fill="rgba(250, 204, 21, 0.9)" // JoJo Yellow
          stroke="black" 
          strokeWidth="1.5" 
        />
      </svg>

      {/* Labels */}
      <div className="absolute inset-0 text-[6px] font-black flex justify-center items-start pt-0.5">PWR</div>
      <div className="absolute inset-0 text-[6px] font-black flex justify-end items-start pr-1 pt-4">SPD</div>
      <div className="absolute inset-0 text-[6px] font-black flex justify-end items-end pr-1 pb-4">RNG</div>
      <div className="absolute inset-0 text-[6px] font-black flex justify-center items-end pb-0.5">PER</div>
      <div className="absolute inset-0 text-[6px] font-black flex justify-start items-end pl-1 pb-4">PRC</div>
      <div className="absolute inset-0 text-[6px] font-black flex justify-start items-start pl-1 pt-4">DEV</div>
    </div>
  );
}