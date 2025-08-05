import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Loved by Fitness Enthusiasts
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Image
                src="https://placehold.co/80x80.png"
                alt="Sarah L. - Busy Mom & Fitness Newbie"
                width={80}
                height={80}
                className="rounded-full"
                loading="lazy"
              />
              <div>
                <p className="font-bold font-headline text-lg">Sarah L.</p>
                <p className="text-sm text-muted-foreground">Busy Mom & Fitness Newbie</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <blockquote className="text-xl italic border-l-4 border-primary pl-4">
              "BodiesBuddy completely changed the game for me. The AI plans are so easy to follow, and seeing my progress in the app keeps me motivated every single day. I've never felt stronger!"
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
