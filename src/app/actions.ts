'use server';

import { fitnessGoalCalculator, FitnessGoalCalculatorOutput } from '@/ai/flows/fitness-goal-calculator';
import { z } from 'zod';

const FitnessGoalCalculatorInputSchema = z.object({
  currentWeight: z.coerce.number().min(30, { message: "Current weight must be at least 30kg." }).max(300, { message: "Current weight must be at most 300kg." }),
  goalWeight: z.coerce.number().min(30, { message: "Goal weight must be at least 30kg." }).max(300, { message: "Goal weight must be at most 300kg." }),
  weeklyActivityLevel: z.enum(['sedentary', 'lightly active', 'moderately active', 'very active', 'extra active']),
  goalTimeline: z.enum(['short', 'medium', 'long']),
}).refine(data => data.currentWeight > data.goalWeight, {
  message: "Goal weight must be less than current weight.",
  path: ["goalWeight"],
});


export async function calculateFitnessGoalAction(
  input: z.infer<typeof FitnessGoalCalculatorInputSchema>
): Promise<{ data?: FitnessGoalCalculatorOutput, error?: string }> {
  const validatedFields = FitnessGoalCalculatorInputSchema.safeParse(input);

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.flatten().fieldErrors;
    const firstError = Object.values(errorMessages)[0]?.[0] || "Invalid input.";
    return { error: firstError };
  }

  try {
    const result = await fitnessGoalCalculator(validatedFields.data);
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred while calculating your results. Please try again.' };
  }
}
