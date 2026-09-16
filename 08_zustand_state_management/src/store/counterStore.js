import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: Math.min(state.count + 1, 100) })),
  decrement: () => set((state) => ({ count: Math.max(state.count - 1, 0) })),
  reset: () => set({ count: 0 }),
}));
