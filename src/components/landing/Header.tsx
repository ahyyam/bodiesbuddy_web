"use client";

import { Button } from "@/components/ui/button";
import { HeartHandshake, Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        <a 
          href="#hero" 
          className="flex items-center space-x-2 group" 
          onClick={closeMobileMenu}
        >
          <HeartHandshake className="h-6 w-6 sm:h-8 sm:w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="text-xl sm:text-2xl font-bold font-headline transition-colors duration-300 group-hover:text-primary">
            BodiesBuddy
          </span>
        </a>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#testimonials" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
          >
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Desktop Download Button */}
        <Button 
          asChild 
          className="hidden sm:flex shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <a href="#hero" aria-label="Download BodiesBuddy app">
            <Download className="mr-2 h-4 w-4" />
            Download App
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-primary/10 transition-all duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="h-5 w-5 transition-transform duration-300" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
          <nav className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            <a 
              href="#features" 
              className="block text-base font-medium text-muted-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10"
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="block text-base font-medium text-muted-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
            <a 
              href="#testimonials" 
              className="block text-base font-medium text-muted-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10"
              onClick={closeMobileMenu}
            >
              Testimonials
            </a>
            <Button asChild className="w-full mt-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="#hero" onClick={closeMobileMenu}>
                <Download className="mr-2 h-4 w-4" />
                Download App
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
