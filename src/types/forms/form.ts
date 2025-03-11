export interface PilotProgramFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
  industry: string;
  challenges: string[];
  roiTimeframe: number;
  operationSize: string;
  currentSystems: string;
  additionalNotes: string;
  automationLevel: number;
  roboticSolutions: string[];
  specificChallanges: string;
  implementationTimeline: string;
}

export interface GeneralInqueryFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
}
