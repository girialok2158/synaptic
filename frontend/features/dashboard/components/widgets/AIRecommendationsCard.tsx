"use client";

import {

  Card,

  CardContent,

} from "@/components/ui/card";

import {

  Sparkles,

  CheckCircle2,

  BookOpen,

  Flame,

  ArrowRight,

} from "lucide-react";

export default function AIRecommendationsCard() {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
     
      <CardContent className="space-y-6 p-6">

  {/* Header */}

  <div className="flex items-center justify-between">

    <div>

      <h3 className="text-lg font-semibold">

        AI Recommendations

      </h3>

      <p className="text-sm text-muted-foreground">

        Personalized suggestions for today

      </p>

    </div>

    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">

      <Sparkles className="h-5 w-5 text-primary" />

    </div>

  </div>

  {/* Recommendations */}

  {/* Recommendations */}

<div className="space-y-3">

  {/* Recommendation 1 */}

  <div className="group flex items-center justify-between rounded-xl border border-border bg-muted/20 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">

    <div className="flex items-center gap-4">

      <div className="rounded-lg bg-green-500/10 p-2">

        <CheckCircle2 className="h-5 w-5 text-green-400" />

      </div>

      <div>

        <p className="font-medium">

          Finish Graph Algorithms

        </p>

        <p className="text-sm text-muted-foreground">

          Complete today&apos;s practice goal

        </p>

      </div>

    </div>

    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />

  </div>

  {/* Recommendation 2 */}

  <div className="group flex items-center justify-between rounded-xl border border-border bg-muted/20 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">

    <div className="flex items-center gap-4">

      <div className="rounded-lg bg-blue-500/10 p-2">

        <BookOpen className="h-5 w-5 text-blue-400" />

      </div>

      <div>

        <p className="font-medium">

          Revise DBMS Normalization

        </p>

        <p className="text-sm text-muted-foreground">

          Strengthen database concepts

        </p>

      </div>

    </div>

    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />

  </div>

  {/* Recommendation 3 */}

  <div className="group flex items-center justify-between rounded-xl border border-border bg-muted/20 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">

    <div className="flex items-center gap-4">

      <div className="rounded-lg bg-orange-500/10 p-2">

        <Flame className="h-5 w-5 text-orange-400" />

      </div>

      <div>

        <p className="font-medium">

          Maintain your 17-day streak

        </p>

        <p className="text-sm text-muted-foreground">

          Study at least 30 minutes today

        </p>

      </div>

    </div>

    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />

  </div>

</div>

</CardContent>
    </Card>
  );
}
