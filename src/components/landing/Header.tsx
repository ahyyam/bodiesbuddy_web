"use client";

import { Button } from "@/components/ui/button";
import { HeartHandshake, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
      isScrolled ? 'border-b' : ''
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#hero" className="flex items-center space-x-2">
          <HeartHandshake className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline">BodiesBuddy</span>
        </a>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
        </nav>

        <Button asChild>
          <a href="#hero" aria-label="Download BodiesBuddy app">
            <Download className="mr-2 h-4 w-4" />
            Download App
          </a>
        </Button>
      </div>
    </header>
  );
}
