"use client";

import {
  BarChart3,
  TrendingUp,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const activity = [

  { id: "mon", label: "M", day: "Monday", hours: 4 },

  { id: "tue", label: "T", day: "Tuesday", hours: 6 },

  { id: "wed", label: "W", day: "Wednesday", hours: 5 },

  { id: "thu", label: "T", day: "Thursday", hours: 8 },

  { id: "fri", label: "F", day: "Friday", hours: 7 },

  { id: "sat", label: "S", day: "Saturday", hours: 9 },

  { id: "sun", label: "S", day: "Sunday", hours: 6 },

];


export default function WeeklyActivityCard() {
  const max = Math.max(...activity.map((d) => d.hours));
  const totalHours = activity.reduce(
  (sum, item) => sum + item.hours,
  0
);
const averageHours = Math.round(totalHours / activity.length);

  return (
    <Card

  className="

    transition-all

    duration-300

    hover:-translate-y-1

    hover:border-primary/30

    hover:shadow-xl

    hover:shadow-primary/5

  "

>
      <CardContent className="space-y-6 p-6">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Weekly Activity
            </h3>

            <p className="text-sm text-muted-foreground">
              Your study consistency
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">

  <BarChart3 className="h-5 w-5 text-primary" />

</div>
        </div>

        {/* Chart */}

        <div className="flex h-60 items-end justify-between gap-5 overflow-visible pt-8">

  {activity.map((item) => (

    <div

  key={item.id}

  className="group flex flex-1 flex-col items-center gap-3"

>

      <div className="relative flex h-36 items-end justify-center">

        {/* Tooltip */}

        <span

  className="

    absolute

    bottom-full

    mb-3

    left-1/2

    -translate-x-1/2

    rounded-lg

    border

    bg-background/95

    backdrop-blur

    px-3

    py-1.5

    text-xs

    font-medium

    whitespace-nowrap

    opacity-0

    shadow-lg

    transition-all

    duration-200

    group-hover:-translate-y-1

    group-hover:opacity-100

    pointer-events-none

  "

>

  <span className="text-foreground">

    {item.hours} hrs

  </span>

</span>

        {/* Bar */}

        <div className="relative flex h-full items-end">

  {/* Background Track */}

  <div className="h-full w-6 rounded-full bg-muted/40" />

  {/* Filled Bar */}

  <div

    className="

      absolute

      bottom-0

      w-6

      rounded-full

      bg-primary

      transition-all

      duration-300

      group-hover:brightness-110

    "

    style={{

      height: `${Math.max((item.hours / max) * 100, 12)}%`,

    }}

  />

</div>

      </div>

      <span className="mt-3 text-xs text-muted-foreground">

        {item.label}

      </span>

    </div>

  ))}

</div>
        {/* Footer */}

        <div className="flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-sm text-muted-foreground">
                Total Study Time
                </p>

                <h3 className="text-3xl font-bold">
                {totalHours} hrs
                </h3>

                <p className="text-xs text-muted-foreground mt-1">
                Avg {averageHours} hrs/day
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
            <TrendingUp className="h-4 w-4" />
            +12%
          </div>
        </div>
      </CardContent>
    </Card>
  );
}