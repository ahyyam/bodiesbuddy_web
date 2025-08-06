import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight leading-tight mb-6">
            Loved by{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Fitness Enthusiasts
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="pb-6 sm:pb-8 relative">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="relative">
                  <Image
                    src="https://placehold.co/120x120.png"
                    alt="Sarah L. - Busy Mom & Fitness Newbie"
                    width={120}
                    height={120}
                    className="rounded-2xl w-20 h-20 sm:w-24 sm:h-24 shadow-lg"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-bold font-headline text-xl sm:text-2xl mb-1">Sarah L.</h3>
                  <p className="text-muted-foreground">Busy Mom & Fitness Newbie</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 relative">
              <blockquote className="text-lg sm:text-xl md:text-2xl italic leading-relaxed text-center sm:text-left relative">
                <span className="absolute -top-4 -left-4 text-4xl text-primary/20 font-serif">"</span>
                BodiesBuddy completely changed the game for me. The AI plans are so easy to follow, and seeing my progress in the app keeps me motivated every single day. I've never felt stronger!
                <span className="absolute -bottom-4 -right-4 text-4xl text-primary/20 font-serif">"</span>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
