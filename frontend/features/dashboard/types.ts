import { LucideIcon } from "lucide-react";

export interface StatCardData {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend: string;
  progress: number;
}