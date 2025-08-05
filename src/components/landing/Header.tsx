import { Button } from "@/components/ui/button";
import { HeartHandshake, Download } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center space-x-2">
          <HeartHandshake className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline">BodiesBuddy</span>
        </a>
        <Button asChild>
          <a href="#hero">
            <Download className="mr-2 h-4 w-4" />
            Download App
          </a>
        </Button>
      </div>
    </header>
  );
}
