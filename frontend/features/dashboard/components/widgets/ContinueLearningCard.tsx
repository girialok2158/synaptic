"use client";

import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function ContinueLearningCard() {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="space-y-6 p-6">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Continue Learning
            </h3>

            <p className="text-sm text-muted-foreground">
              Pick up where you left off
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
        </div>

        {/* Course */}

        <div className="space-y-1">
          <h4 className="text-xl font-semibold">
            System Design Fundamentals
          </h4>

          <p className="text-sm text-muted-foreground">
            Chapter 8 of 12
          </p>
        </div>

        {/* Progress */}

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Progress
            </span>

            <span className="font-medium">
              72%
            </span>
          </div>

          <Progress value={72} />
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            ⏳ 2h remaining
          </p>

          <Button variant="outline" size="sm">
            Continue

            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
