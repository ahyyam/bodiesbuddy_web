import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const screenshots = [
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "BodiesBuddy dashboard showing fitness metrics and progress overview",
    hint: "Dashboard",
    description: "Track your fitness journey with intuitive metrics"
  },
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "Personalized workout plan interface with exercise recommendations",
    hint: "Workout Plans",
    description: "AI-powered personalized workout recommendations"
  },
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "Progress tracking charts showing weight and measurement trends",
    hint: "Progress Charts",
    description: "Visualize your progress with detailed analytics"
  },
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "Nutrition tracking and meal logging interface",
    hint: "Nutrition Tracker",
    description: "Log and track your nutrition with ease"
  },
  { 
    src: "https://placehold.co/300x600.png", 
    alt: "Achievement system showing fitness milestones and rewards",
    hint: "Achievements",
    description: "Stay motivated with gamified achievements"
  },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight leading-tight mb-6">
            See BodiesBuddy in{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore the clean, intuitive interface that makes fitness tracking a breeze.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="group overflow-hidden border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <CardContent className="flex flex-col aspect-[9/16] p-0 relative">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                          {screenshot.hint}
                        </Badge>
                      </div>
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={300}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-sm font-medium">
                          {screenshot.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-6 bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300" />
          <CarouselNext className="hidden sm:flex -right-6 bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  );
}
