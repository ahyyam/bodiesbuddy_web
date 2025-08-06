"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function LiveChatWidget() {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <Button
        size="icon"
        className="rounded-full h-12 w-12 sm:h-14 sm:w-14 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Go to contact section"
        asChild
      >
        <a href="#contact">
          <MessageSquare className="h-5 w-5 sm:h-7 sm:w-7" />
        </a>
      </Button>
    </div>
  );
}
