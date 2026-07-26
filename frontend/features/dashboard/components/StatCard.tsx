import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";

import { StatCardData } from "../types";

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({
  data,
}: StatCardProps) {
  const Icon = data.icon;

  return (
    <Card className="group transition-all duration-200 hover:-translate-y-0.5 hover:border-muted-foreground/30">
      <CardContent className="space-y-6 p-6">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-accent/80">
            <Icon className="h-5 w-5" />
          </div>

          <div className="flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
            <TrendingUp className="h-3 w-3" />
            {data.trend}
          </div>
        </div>

        {/* Body */}
        <div>
          <p className="text-sm text-muted-foreground">
            {data.title}
          </p>

          <h3 className="mt-2 text-4xl font-bold tracking-tight">
            {data.value}
          </h3>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <Progress value={data.progress} />

          <p className="text-sm text-muted-foreground">
            {data.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}