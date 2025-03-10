'use client';

import { useStore } from 'zustand';
import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type QuantumStore, createQuantumStore } from '@/stores/quantumStore';

export type QuantumStoreApi = ReturnType<typeof createQuantumStore>;

export const QuantumStoreContext = createContext<QuantumStoreApi | undefined>(
  undefined,
);

export interface QuantumStoreProviderProps {
  children: ReactNode;
}

export const QuantumStoreProvider = ({
  children,
}: QuantumStoreProviderProps) => {
  const storeRef = useRef<QuantumStoreApi | null>(null);
  if (!storeRef.current) {
    storeRef.current = createQuantumStore();
  }

  return (
    <QuantumStoreContext.Provider value={storeRef.current}>
      {children}
    </QuantumStoreContext.Provider>
  );
};

export const useQuantumStore = <T,>(
  selector: (store: QuantumStore) => T,
): T => {
  const quatumStoreContext = useContext(QuantumStoreContext);

  if (!quatumStoreContext) {
    throw new Error(`useMessageStore must be used within MessageStoreProvider`);
  }

  return useStore(quatumStoreContext, selector);
};
