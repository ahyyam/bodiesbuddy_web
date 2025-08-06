import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppleStoreIcon } from "@/components/icons/apple-store";
import { GooglePlayIcon } from "@/components/icons/google-play";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left order-2 lg:order-1 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-headline tracking-tight leading-[0.9] sm:leading-[0.85]">
                Your Fitness Journey,
                <br />
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Reimagined.
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Stop guessing, start achieving. BodiesBuddy combines AI-powered personalization with intuitive tracking to help you reach your fitness goals faster than ever.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start max-w-md sm:max-w-none mx-auto lg:mx-0">
              <Button 
                size="lg" 
                className="font-bold text-base h-14 sm:h-16 px-8 sm:px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group" 
                asChild
              >
                <a href="#" aria-label="Download BodiesBuddy on App Store" className="flex items-center">
                  <AppleStoreIcon className="mr-3 size-6 sm:size-7 transition-transform group-hover:scale-110" />
                  <span className="text-left">
                    <span className="block text-xs font-normal opacity-90">Download on the</span>
                    <span className="text-base sm:text-lg">App Store</span>
                  </span>
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="font-bold text-base h-14 sm:h-16 px-8 sm:px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group" 
                asChild
              >
                <a href="#" aria-label="Download BodiesBuddy on Google Play" className="flex items-center">
                  <GooglePlayIcon className="mr-3 size-6 sm:size-7 transition-transform group-hover:scale-110" />
                  <span className="text-left">
                    <span className="block text-xs font-normal opacity-90">GET IT ON</span>
                    <span className="text-base sm:text-lg">Google Play</span>
                  </span>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]">
              {/* Phone Mockup with enhanced styling */}
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] sm:border-[16px] lg:border-[18px] rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.5rem] h-[550px] sm:h-[650px] lg:h-[700px] w-[280px] sm:w-[330px] lg:w-[380px] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="w-[140px] sm:w-[160px] lg:w-[180px] h-[18px] sm:h-[20px] lg:h-[22px] bg-gray-800 top-0 rounded-b-[1rem] sm:rounded-b-[1.5rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] sm:h-[52px] lg:h-[58px] w-[3px] bg-gray-800 absolute -start-[17px] sm:-start-[19px] lg:-start-[21px] top-[124px] sm:top-[140px] lg:top-[150px] rounded-s-lg"></div>
                <div className="h-[46px] sm:h-[52px] lg:h-[58px] w-[3px] bg-gray-800 absolute -start-[17px] sm:-start-[19px] lg:-start-[21px] top-[178px] sm:top-[200px] lg:top-[216px] rounded-s-lg"></div>
                <div className="h-[64px] sm:h-[72px] lg:h-[80px] w-[3px] bg-gray-800 absolute -end-[17px] sm:-end-[19px] lg:-end-[21px] top-[142px] sm:top-[160px] lg:top-[170px] rounded-e-lg"></div>
                <div className="rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden w-[252px] sm:w-[298px] lg:w-[344px] h-[522px] sm:h-[618px] lg:h-[664px] bg-background">
                  <Image
                    src="https://placehold.co/300x600.png"
                    alt="BodiesBuddy app screenshot showing fitness tracking interface"
                    width={344}
                    height={664}
                    className="w-full h-full object-cover"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
