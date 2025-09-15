export type UserRole = "SuperAdmin" | "Admin" | "Teacher" | "Teacher/Admin";

export interface TimelineCapability {
  id: string;
  label: string;
}

export interface TimelineStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  role: UserRole;
  imageUrl: string;
  imageAlt: string;
  capabilities: TimelineCapability[];
}

export interface TimelineJourneyProps {
  steps: TimelineStep[];
  className?: string;
}


