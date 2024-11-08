interface BudgetParams {
  basePricePerDay: number;
  travelers: number;
  duration: number;
  travelStyle: 'budget' | 'moderate' | 'luxury';
}

export const calculateTripBudget = ({ basePricePerDay, travelers, duration, travelStyle }: BudgetParams): number => {
  const styleMultiplier = {
    budget: 0.7,
    moderate: 1,
    luxury: 1.5
  };

  // Base calculation
  let total = basePricePerDay * travelers * duration;
  
  // Apply style multiplier
  total *= styleMultiplier[travelStyle];
  
  // Group discount for 3 or more travelers
  if (travelers >= 3) {
    total *= 0.9;
  }

  // Round to nearest 10
  return Math.round(total / 10) * 10;
};