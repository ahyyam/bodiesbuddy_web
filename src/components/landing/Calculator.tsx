"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { calculateFitnessGoalAction } from "@/app/actions";
import type { FitnessGoalCalculatorOutput } from "@/ai/flows/fitness-goal-calculator";
import { Loader2, Zap, Dumbbell, Utensils, Sparkles } from "lucide-react";

const formSchema = z.object({
  currentWeight: z.coerce.number().min(30, { message: "Must be at least 30kg." }).max(300, { message: "Must be at most 300kg." }),
  goalWeight: z.coerce.number().min(30, { message: "Must be at least 30kg." }).max(300, { message: "Must be at most 300kg." }),
  weeklyActivityLevel: z.enum(['sedentary', 'lightly active', 'moderately active', 'very active', 'extra active']),
  goalTimeline: z.enum(['short', 'medium', 'long']),
}).refine(data => data.currentWeight > data.goalWeight, {
  message: "Goal weight must be less than current weight.",
  path: ["goalWeight"],
});

type FormValues = z.infer<typeof formSchema>;

export function Calculator() {
  const [result, setResult] = useState<FitnessGoalCalculatorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentWeight: 70,
      goalWeight: 65,
      weeklyActivityLevel: "moderately active",
      goalTimeline: "medium",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    const { data, error } = await calculateFitnessGoalAction(values);
    setIsLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error,
      });
    }
    if (data) {
      setResult(data);
    }
  }

  const resultItems = result ? [
    { icon: Zap, title: "Estimated Time to Goal", text: result.estimatedTimeToGoal },
    { icon: Dumbbell, title: "Suggested Workouts", text: result.suggestedWorkouts },
    { icon: Utensils, title: "Dietary Recommendations", text: result.dietaryRecommendations },
    { icon: Sparkles, title: "How BodiesBuddy Helps", text: result.appBenefitsHighlights },
  ] : [];

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Calculate Your Potential
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get a glimpse of what you can achieve with the BodiesBuddy app. Enter your details below for a personalized fitness projection.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <Card className="lg:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Your Fitness Goals</CardTitle>
              <CardDescription>Tell us about your goals to get started.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="currentWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Weight (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 75" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="goalWeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Goal Weight (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 70" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="weeklyActivityLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weekly Activity Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your activity level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sedentary">Sedentary</SelectItem>
                            <SelectItem value="lightly active">Lightly Active</SelectItem>
                            <SelectItem value="moderately active">Moderately Active</SelectItem>
                            <SelectItem value="very active">Very Active</SelectItem>
                            <SelectItem value="extra active">Extra Active</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="goalTimeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Goal Timeline</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="short">Short-term</SelectItem>
                            <SelectItem value="medium">Medium-term</SelectItem>
                            <SelectItem value="long">Long-term</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {isLoading ? 'Calculating...' : 'Generate Projection'}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>

          <div className="lg:col-span-3">
            <Card className="min-h-full shadow-lg transition-all duration-500 ease-in-out">
              <CardHeader>
                <CardTitle className="font-headline">Your AI-Powered Projection</CardTitle>
                <CardDescription>Here's what our AI thinks you can achieve.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex flex-col items-center justify-center h-64 text-muted-foreground space-y-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="font-semibold">Our AI is crunching the numbers...</p>
                  </div>
                )}
                {!isLoading && !result && (
                  <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground space-y-4">
                     <Zap className="h-12 w-12 text-primary/50"/>
                    <p className="font-semibold">Your results will appear here.</p>
                    <p className="text-sm">Fill out the form to get your personalized projection.</p>
                  </div>
                )}
                {result && (
                  <div className="space-y-6">
                    {resultItems.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                            <item.icon className="h-6 w-6" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold font-headline text-lg">{item.title}</h4>
                          <p className="text-muted-foreground">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
