'use server';

/**
 * @fileOverview A fitness goal calculator AI agent.
 *
 * - fitnessGoalCalculator - A function that calculates potential fitness outcomes.
 * - FitnessGoalCalculatorInput - The input type for the fitnessGoalCalculator function.
 * - FitnessGoalCalculatorOutput - The return type for the fitnessGoalCalculator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FitnessGoalCalculatorInputSchema = z.object({
  currentWeight: z.number().describe('Your current weight in kilograms.'),
  goalWeight: z.number().describe('Your desired weight in kilograms.'),
  weeklyActivityLevel: z
    .string()
    .describe(
      'Your weekly activity level (sedentary, lightly active, moderately active, very active, extra active)'
    ),
  goalTimeline: z
    .string()
    .describe('The timeline to acheive the goal (short, medium, long)'),
});
export type FitnessGoalCalculatorInput = z.infer<
  typeof FitnessGoalCalculatorInputSchema
>;

const FitnessGoalCalculatorOutputSchema = z.object({
  estimatedTimeToGoal: z
    .string()
    .describe('Estimated time to reach the goal weight.'),
  suggestedWorkouts: z
    .string()
    .describe('Suggested workout routines based on activity level.'),
  dietaryRecommendations: z
    .string()
    .describe('Dietary recommendations to support weight loss.'),
  appBenefitsHighlights: z
    .string()
    .describe('Highlights of how the BodiesBuddy app can help.'),
});
export type FitnessGoalCalculatorOutput = z.infer<
  typeof FitnessGoalCalculatorOutputSchema
>;

export async function fitnessGoalCalculator(
  input: FitnessGoalCalculatorInput
): Promise<FitnessGoalCalculatorOutput> {
  return fitnessGoalCalculatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fitnessGoalCalculatorPrompt',
  input: {schema: FitnessGoalCalculatorInputSchema},
  output: {schema: FitnessGoalCalculatorOutputSchema},
  prompt: `You are a fitness expert providing estimated fitness outcomes.

  Based on the user's current weight ({{{currentWeight}}} kg), goal weight ({{{goalWeight}}} kg),
  weekly activity level ({{{weeklyActivityLevel}}}), and goal timeline ({{{goalTimeline}}}), provide the following:

  - estimatedTimeToGoal: An estimated time to reach the goal weight.
  - suggestedWorkouts: Suggested workout routines based on the activity level.
  - dietaryRecommendations: Dietary recommendations to support weight loss.
  - appBenefitsHighlights: Highlights of how the BodiesBuddy app can assist the user in achieving their goals.
  `,
});

const fitnessGoalCalculatorFlow = ai.defineFlow(
  {
    name: 'fitnessGoalCalculatorFlow',
    inputSchema: FitnessGoalCalculatorInputSchema,
    outputSchema: FitnessGoalCalculatorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
