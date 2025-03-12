import { createStore } from 'zustand/vanilla';
import { persist, createJSONStorage } from 'zustand/middleware';
import { PilotProgramFormData } from '@/types/forms/form';

export type QuantumState = {
  message: string;
  tabName: string;
  step: number;
  formData: PilotProgramFormData;
  errors: Partial<Record<keyof PilotProgramFormData, string>>;
};

export type MessageActions = {
  setMessage: (message: string) => void;
  clearMessage: () => void;
  setTab: (tabName: string) => void;
  clearTab: () => void;
  setFormData: (data: Partial<PilotProgramFormData>) => void;
  validateStep: () => boolean;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
};

export type QuantumStore = QuantumState & MessageActions;

const defaultState: QuantumState = {
  message: '',
  tabName: '',
  step: 0,
  formData: {
    name: '',
    email: '',
    company: '',
    consent: false,
    industry: '',
    automationLevel: 3,
    operationSize: 'small',
    currentSystems: '',
    challenges: [],
    roiTimeframe: 12,
    roboticSolutions: [],
    implementationTimeline: '',
    additionalNotes: '',
    specificChallenges: '',
  },
  errors: {},
};

const isClient = typeof window !== 'undefined';

export const createQuantumStore = (initState: QuantumState = defaultState) => {
  return createStore<QuantumStore>()(
    persist(
      (set, get) => ({
        ...initState,
        setMessage: (message: string) => set(() => ({ message })),
        clearMessage: () => set(() => ({ message: '' })),
        setTab: (tabName: string) => set(() => ({ tabName })),
        clearTab: () => set(() => ({ tabName: '' })),
        setFormData: (data: Partial<PilotProgramFormData>) =>
          set((state) => ({
            formData: { ...state.formData, ...data },
            errors: { ...state.errors, ...Object.keys(data).reduce((acc, key) => ({ ...acc, [key]: undefined }), {}) },
          })),
        validateStep: () => {
          const { step, formData } = get();
          const errors: Partial<Record<keyof PilotProgramFormData, string>> = {};

          if (step === 0) {
            if (!formData.name) errors.name = 'Full Name is required';
            if (!formData.email) errors.email = 'Email Address is required';
            if (!formData.industry) errors.industry = 'Industry is required';
          } else if (step === 1) {
            if (formData.automationLevel === undefined || formData.automationLevel < 0 || formData.automationLevel > 10) {
              errors.automationLevel = 'Automation Level must be between 0 and 10';
            }
            if (!formData.operationSize) errors.operationSize = 'Operation Size is required';
            if (!formData.currentSystems) errors.currentSystems = 'Current Systems information is required';
          }
          if (step === 2) {
            if (!formData.challenges || formData.challenges.length === 0) {
              errors.challenges = 'At least one challenge must be selected';
            }
          }
          if (step === 3) {
            if (!formData.consent) {
              errors.consent = 'You must provide consent to submit the form.';
            }
          }

          set({ errors });
          return Object.keys(errors).length === 0;
        },
        nextStep: () => {
          if (get().validateStep()) {
            set((state) => ({ step: state.step + 1 }));
          }
        },
        prevStep: () => set((state) => ({ step: Math.max(0, state.step - 1) })),
        resetForm: () => set(() => ({ ...defaultState })),
      }),
      {
        name: 'message-storage',
        storage: isClient ? createJSONStorage(() => localStorage) : undefined,
      },
    ),
  );
};
