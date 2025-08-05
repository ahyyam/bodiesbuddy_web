import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function LiveChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="rounded-full h-14 w-14 shadow-lg"
        aria-label="Open live chat"
      >
        <MessageSquare className="h-7 w-7" />
      </Button>
    </div>
  );
}
