import { create } from "zustand";

export interface BetStore{
    balance: number
    increaseBalance: (amount: number)=>void
    decreaseBalance: (amount: number)=>void
}

export const useBetStore = create<BetStore>((set)=>({
    balance: 100.00,
    increaseBalance: (amount) => set((state) => ({ balance: state.balance + amount })),
    decreaseBalance: (amount) => set((state) => ({ balance: state.balance - amount })),
}))
