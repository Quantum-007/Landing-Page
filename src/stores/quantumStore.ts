import { createStore } from 'zustand/vanilla';
import { persist, createJSONStorage } from 'zustand/middleware';

export type QuantumState = {
  message: string;
  tabName: string;
};

export type MessageActions = {
  setMessage: (message: string) => void;
  clearMessage: () => void;
  setTab: (tabName: string) => void;
  clearTab: () => void;
};

export type QuantumStore = QuantumState & MessageActions;

const defaultState: QuantumState = {
  message: '',
  tabName: '',
};

const isClient = typeof window !== 'undefined';

export const createQuantumStore = (
  initState: QuantumState = defaultState,
) => {
  return createStore<QuantumStore>()(
    persist(
      (set) => ({
        ...initState,
        setMessage: (message: string) => set(() => ({ message })),
        clearMessage: () => set(() => ({ message: '' })),
        setTab: (tabName: string) => set(() => ({ tabName })),
        clearTab: () => set(() => ({ tabName: '' })),
      }),
      {
        name: 'message-storage',
        storage: isClient ? createJSONStorage(() => localStorage) : undefined,
      },
    ),
  );
};
