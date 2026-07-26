"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { BookOpen } from "lucide-react";

export default function StudyPlanCard() {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-lg">
          Today&apos;s Study Plan
        </CardTitle>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>

      <CardContent className="space-y-6 p-6">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>Operating Systems</span>
            <span>90%</span>
          </div>

          <Progress value={90} />
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>DBMS Revision</span>
            <span>65%</span>
          </div>

          <Progress value={65} />
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>React Project</span>
            <span>30%</span>
          </div>

          <Progress value={30} />
        </div>
      </CardContent>
    </Card>
  );
}
