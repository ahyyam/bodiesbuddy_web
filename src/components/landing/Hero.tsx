import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppleStoreIcon } from "@/components/icons/apple-store";
import { GooglePlayIcon } from "@/components/icons/google-play";

export function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline tracking-tight">
            Your Fitness Journey,
            <br />
            <span className="text-primary">Reimagined.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Stop guessing, start achieving. BodiesBuddy combines AI-powered personalization with intuitive tracking to help you reach your fitness goals faster than ever.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="font-bold text-base" asChild>
              <a href="#">
                <AppleStoreIcon className="mr-3 size-6" />
                <span>
                  <span className="block text-xs font-normal text-left">Download on the</span>
                  App Store
                </span>
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="font-bold text-base" asChild>
              <a href="#">
                <GooglePlayIcon className="mr-3 size-6" />
                <span>
                  <span className="block text-xs font-normal text-left">GET IT ON</span>
                  Google Play
                </span>
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Phone Mockup */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-background">
                    <Image
                        src="https://placehold.co/300x600.png"
                        alt="App Screenshot"
                        width={272}
                        height={572}
                        className="w-[272px] h-[572px] object-cover"
                        data-ai-hint="app screenshot"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
