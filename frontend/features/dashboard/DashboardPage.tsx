import AppShell from "@/components/layout/AppShell";

import {
  PageHeader,
  StatsGrid,
  DashboardContent,
} from "./";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          badge="Dashboard"
          title="Welcome back, Alok 👋"
          subtitle="Stay focused, keep your momentum, and make today another productive study session."
        />

        <StatsGrid />

        <DashboardContent />
      </div>
    </AppShell>
  );
}