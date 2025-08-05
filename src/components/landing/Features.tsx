import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal, Target, BarChart } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Target className="w-8 h-8" aria-hidden="true" />,
    title: "Personalized Plans",
    description: "Get workout and meal plans tailored to your body and goals, crafted by our AI.",
  },
  {
    icon: <BarChart className="w-8 h-8" aria-hidden="true" />,
    title: "Track Your Progress",
    description: "Monitor your weight, measurements, and workout performance with intuitive charts.",
  },
  {
    icon: <Medal className="w-8 h-8" aria-hidden="true" />,
    title: "Stay Motivated",
    description: "Earn achievements, conquer challenges, and stay on track with daily reminders.",
  },
];

export function Features() {
  return (
    <section id="features" className="container mx-auto py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Everything You Need to Succeed
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          BodiesBuddy isn't just an app; it's your personal fitness partner in your pocket.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4" aria-hidden="true">
                {icon}
              </div>
              <CardTitle className="font-headline text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
