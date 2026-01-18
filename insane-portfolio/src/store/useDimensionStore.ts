import { create } from 'zustand';

type DimensionMode = 'NORMAL' | 'JOJO';
type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

interface DimensionState {
  mode: DimensionMode;
  difficulty: Difficulty;
  toggleMode: () => void;
  setDifficulty: (level: Difficulty) => void;
}

export const useDimensionStore = create<DimensionState>((set) => ({
  mode: 'NORMAL',
  difficulty: 'EASY',
  toggleMode: () => set((state) => ({ 
    mode: state.mode === 'NORMAL' ? 'JOJO' : 'NORMAL' 
  })),
  setDifficulty: (level) => set({ difficulty: level }),
}));