"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {

  FileText,

  ArrowRight,

} from "lucide-react";

export default function RecentNotesCard() {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="space-y-6 p-6">

  {/* Header */}

  <div className="flex items-center justify-between">

    <div>

      <h3 className="text-lg font-semibold">

        Recent Notes

      </h3>

      <p className="text-sm text-muted-foreground">

        Your latest study notes

      </p>

    </div>

    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">

      <FileText className="h-5 w-5 text-primary" />

    </div>

  </div>

  {/* Notes */}

  <div className="space-y-4">

  {/* Note 1 */}

  <div

    className="

      group

      flex

      items-center

      justify-between

      rounded-2xl

      border

      p-4

      transition-all

      duration-300

      hover:border-primary/30

      hover:bg-muted/30

      cursor-pointer

    "

  >

    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">

        <FileText className="h-5 w-5 text-blue-500" />

      </div>

      <div>

        <h4 className="font-semibold">

          React Performance

        </h4>

        <div className="mt-2 flex items-center gap-2">

  <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-500">

    React

  </span>

  <span className="text-xs text-muted-foreground">

    Updated today

  </span>

</div>

      </div>

    </div>

    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />

  </div>

  {/* Note 2 */}

  <div

    className="

      group

      flex

      items-center

      justify-between

      rounded-2xl

      border

      p-4

      transition-all

      duration-300

      hover:border-primary/30

      hover:bg-muted/30

      cursor-pointer

    "

  >

    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10">

        <FileText className="h-5 w-5 text-green-500" />

      </div>

      <div>

        <h4 className="font-semibold">

          Operating Systems

        </h4>

        <div className="mt-2 flex items-center gap-2">

  <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-500">

    Systems

  </span>

  <span className="text-xs text-muted-foreground">

    Yesterday

  </span>

</div>

      </div>

    </div>

    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />

  </div>

</div>

</CardContent>
    </Card>
  );
}
