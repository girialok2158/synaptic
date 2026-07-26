"use client";
import { Bell, Moon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
        <header className="flex h-20 items-center border-b border-border bg-background/95 px-8 backdrop-blur">
      {/* Search */}
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search..."
          className="h-11 pl-10 pr-12"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border bg-muted/70 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          ⌘K
        </span>
      </div>

      {/* Right Section */}
      <div className="ml-auto flex items-center gap-2">
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </div>

        <Button variant="ghost" size="icon">
          <Moon className="h-5 w-5" />
        </Button>

        <div className="mx-1 h-6 w-px bg-border/60" />

        <Avatar className="h-10 w-10 border border-border transition-all duration-200 hover:border-muted-foreground hover:bg-accent">
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}