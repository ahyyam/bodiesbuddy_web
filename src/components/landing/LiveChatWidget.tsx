"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function LiveChatWidget() {
  const [isContactOpen, setIsContactOpen] = useState(false);

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
      <div className="fixed bottom-20 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full h-14 w-14 shadow-lg"
          aria-label="Open contact form"
          onClick={openContact}
        >
          <MessageSquare className="h-7 w-7" />
        </Button>
      </div>

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
