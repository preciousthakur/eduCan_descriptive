import { TimelineStep } from "../types";

export const dummyTimelineSteps: TimelineStep[] = [
  {
    id: "step-1",
    stepNumber: 1,
    title: "Super Admin creates platform + creates Admins",
    description:
      "SuperAdmin can create Admin accounts and assign schools. Can manage global settings.",
    role: "SuperAdmin",
    imageUrl: "https://placehold.co/800x500",
    imageAlt: "Super Admin onboarding and admin creation",
    capabilities: [
      { id: "cap-1", label: "Create Admins" },
      { id: "cap-2", label: "Assign Schools" },
      { id: "cap-3", label: "Global Settings" },
    ],
  },
  {
    id: "step-2",
    stepNumber: 2,
    title: "Admin creates Teachers",
    description:
      "Admin creates teacher profiles, assigns classes and uploads schedules.",
    role: "Admin",
    imageUrl: "https://placehold.co/800x500",
    imageAlt: "Admin creating teacher profiles and schedules",
    capabilities: [
      { id: "cap-4", label: "Create Teachers" },
      { id: "cap-5", label: "Assign Classes" },
      { id: "cap-6", label: "Upload Schedules" },
    ],
  },
  {
    id: "step-3",
    stepNumber: 3,
    title: "Teachers manage Students",
    description:
      "Teachers add student data, attendance, PTM notes and marks.",
    role: "Teacher",
    imageUrl: "https://placehold.co/800x500",
    imageAlt: "Teacher managing students data and attendance",
    capabilities: [
      { id: "cap-7", label: "Manage Students" },
      { id: "cap-8", label: "Attendance" },
      { id: "cap-9", label: "PTM Notes" },
      { id: "cap-10", label: "Marks" },
    ],
  },
  {
    id: "step-4",
    stepNumber: 4,
    title: "Students & Parents data view",
    description:
      "Platform stores student details, holidays, leave requests, PTM attendance and reports.",
    role: "Teacher/Admin",
    imageUrl: "https://placehold.co/800x500",
    imageAlt: "Students and parents viewing data",
    capabilities: [
      { id: "cap-11", label: "Student Details" },
      { id: "cap-12", label: "Holidays" },
      { id: "cap-13", label: "Leave Requests" },
      { id: "cap-14", label: "PTM Attendance" },
      { id: "cap-15", label: "Reports" },
    ],
  },
  {
    id: "step-5",
    stepNumber: 5,
    title: "Super Admin adds multiple schools",
    description:
      "SuperAdmin can create and manage multiple schools (example: School A, School B).",
    role: "SuperAdmin",
    imageUrl: "https://placehold.co/800x500",
    imageAlt: "Super Admin managing multiple schools",
    capabilities: [
      { id: "cap-16", label: "Multi-School" },
      { id: "cap-17", label: "School A" },
      { id: "cap-18", label: "School B" },
    ],
  },
];


