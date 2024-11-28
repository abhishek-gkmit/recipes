interface Ingredient {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  unit: string;
  amount: number;
}

interface InstructionStep {
  stepNumber: number;
  description: string;
}

interface RecipeData {
  id: string;
  title: string;
  imageUrl: string;
  ingredients: Ingredient[];
  time: string;
  summary: string;
  servings: number;
  steps: InstructionStep[];
}

interface RecipeDetailsContextValues extends RecipeData { }

interface IngredientListProps extends Partial<FlatListProps<any>> {
  ingredients: Ingredient[];
  servings: number;
}

interface RecipeDetailsTabViewProps {
  ingredients: Ingredient[];
  servings: number;
  instructionSteps: InstructionStep[];
}

interface RecipeInstructionsListProps {
  instructions: InstructionStep[];
  servings: number;
}

interface BackAndFavouritesButtonsProps {
  navigation: RecepiDetailsNavigationProp;
}
