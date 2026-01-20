import { create } from 'zustand';

interface DimensionState {
  mode: 'NORMAL' | 'JOJO';
  setMode: (mode: 'NORMAL' | 'JOJO') => void;
  toggleMode: () => void;
}

export const useDimensionStore = create<DimensionState>((set) => ({
  mode: 'NORMAL',
  setMode: (newMode) => set({ mode: newMode }),
  toggleMode: () => set((state) => ({ 
    mode: state.mode === 'NORMAL' ? 'JOJO' : 'NORMAL' 
  })),
}));