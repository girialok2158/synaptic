"use client";

import {
  StudyPlanCard,
  ContinueLearningCard,
  AIRecommendationsCard,
  RecentNotesCard,
  UpcomingTasksCard,
  WeeklyActivityCard,
} from "./components/widgets";

export default function DashboardContent() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {/* Left Column */}
      <div className="space-y-6 lg:col-span-2">
        <StudyPlanCard />
        <ContinueLearningCard />
        <WeeklyActivityCard />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <AIRecommendationsCard />
        <RecentNotesCard />
        <UpcomingTasksCard />
      </div>
    </section>
  );
}