import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal, Target, BarChart, Sparkles } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
}

const features: FeatureProps[] = [
  {
    icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
    title: "Personalized Plans",
    description: "Get workout and meal plans tailored to your body and goals, crafted by our AI.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <BarChart className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
    title: "Track Your Progress",
    description: "Monitor your weight, measurements, and workout performance with intuitive charts.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <Medal className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />,
    title: "Stay Motivated",
    description: "Earn achievements, conquer challenges, and stay on track with daily reminders.",
    gradient: "from-purple-500 to-pink-500"
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Powered by AI
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight leading-tight mb-6">
            Everything You Need to{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            BodiesBuddy isn't just an app; it's your personal fitness partner in your pocket.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {features.map(({ icon, title, description, gradient }, index) => (
            <Card 
              key={title} 
              className="group relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardHeader className="pb-6 sm:pb-8 relative">
                <div className={`mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6`} aria-hidden="true">
                  {icon}
                </div>
                <CardTitle className="font-headline text-2xl sm:text-3xl leading-tight text-center group-hover:text-primary transition-colors duration-300">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-base sm:text-lg text-center px-6 sm:px-8 pb-8 sm:pb-10 leading-relaxed">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
