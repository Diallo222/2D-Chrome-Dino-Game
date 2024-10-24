import { create } from "zustand";

export const useGameStore = create((set) => ({
    start: false,
    setStart: (start) => set((state) => ({ start: state.start ? false : start })),
    score: 0,
    setScore: (score) => set((state) => ({ ...state, score })),
    resetScore: () => set((state) => ({ ...state, score: 0 })),

}));