"use client";

import { CalendarDays } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({
  badge,
  title,
  subtitle,
}: PageHeaderProps) {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <section className="flex flex-col gap-8 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
      {/* Left */}
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {badge}
        </p>

        <h1 className="text-5xl font-bold tracking-tight">
          {title}
        </h1>

        <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
          {subtitle}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
          <CalendarDays className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Today
          </p>

          <p className="font-semibold">
            {formattedDate}
          </p>
        </div>
      </div>
    </section>
  );
}