import {
  Brain,
  BookOpen,
  Flame,
  Clock3,
} from "lucide-react";

import StatCard from "./StatCard";
import { StatCardData } from "../types";

const stats: StatCardData[] = [
  {
    title: "Study Hours",
    value: "28h",
    description: "+4 hours compared to last week",
    icon: Clock3,
    trend: "+12%",
    progress: 72,
  },
  {
    title: "AI Chats",
    value: "132",
    description: "24 conversations today",
    icon: Brain,
    trend: "+18%",
    progress: 81,
  },
  {
    title: "Notes",
    value: "64",
    description: "Across all subjects",
    icon: BookOpen,
    trend: "+9%",
    progress: 64,
  },
  {
    title: "Current Streak",
    value: "17 Days",
    description: "Keep it going 🔥",
    icon: Flame,
    trend: "+3",
    progress: 85,
  },
];

export default function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          data={item}
        />
      ))}
    </section>
  );
}