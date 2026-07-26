"use client";

import { Progress } from "@/components/ui/progress";

interface ProgressRowProps {
  title: string;
  progress: number;
  subtitle: string;
}

export default function ProgressRow({
  title,
  progress,
  subtitle,
}: ProgressRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">{title}</h4>

        <span className="text-xs text-muted-foreground">
          {progress}%
        </span>
      </div>

      <Progress value={progress} className="h-2" />

      <p className="text-xs text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}