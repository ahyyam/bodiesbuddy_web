import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "BodiesBuddy dashboard showing fitness metrics and progress overview",
    hint: "app dashboard" 
  },
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "Personalized workout plan interface with exercise recommendations",
    hint: "workout plan" 
  },
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "Progress tracking charts showing weight and measurement trends",
    hint: "progress chart" 
  },
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "Nutrition tracking and meal logging interface",
    hint: "meal log" 
  },
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "Achievement system showing fitness milestones and rewards",
    hint: "gamification achievement" 
  },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight">
            See BodiesBuddy in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the clean, intuitive interface that makes fitness tracking a breeze.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="flex aspect-[9/16] items-center justify-center p-0">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={300}
                        height={600}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" aria-label="Previous screenshot" />
          <CarouselNext className="hidden sm:flex" aria-label="Next screenshot" />
        </Carousel>
      </div>
    </section>
  );
}
