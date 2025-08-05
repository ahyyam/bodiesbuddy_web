"use client";

import { Button } from "@/components/ui/button";
import { HeartHandshake, Download, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted');
    setIsContactOpen(false);
  };

  const openContact = () => {
    console.log('Opening contact form');
    setIsContactOpen(true);
  };

  const closeContact = () => {
    console.log('Closing contact form');
    setIsContactOpen(false);
  };

  return (
    <>
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
            <Button
              variant="ghost"
              size="sm"
              onClick={openContact}
              className="text-sm font-medium"
            >
              Contact Us
            </Button>
          </nav>

          <Button asChild>
            <a href="#hero" aria-label="Download BodiesBuddy app">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </a>
          </Button>
        </div>
      </header>

      {/* Contact Form Popup */}
      {isContactOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeContact();
            }
          }}
        >
          <Card className="w-full max-w-md mx-4 relative">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Get in touch with our team
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeContact}
                className="h-8 w-8 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
