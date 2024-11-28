import { ingredientImageUrl } from '@constants';

export function formatRandomRecipes(recepies: any[]) {
  return recepies?.map(({ id, title, image, readyInMinutes }) => {
    return {
      id: id + '',
      title,
      img: image,
      time: readyInMinutes + '',
    } as RandomRecipe;
  });
}

function formatIngredient(rawIngredientData: any) {
  const { id, name, image, original, unit, amount } = rawIngredientData;

  return {
    id,
    name,
    imageUrl: ingredientImageUrl(image),
    description: original,
    unit,
    amount,
  } as Ingredient;
}

function formatRecipeInstruction(rawRecipeInstruction: any) {
  const { number: stepNumber, step: description } = rawRecipeInstruction;
  return { stepNumber, description } as InstructionStep;
}

export function formatRecipeDetails(rawRecipeDetails: any) {
  const {
    id,
    image: imageUrl,
    title,
    summary,
    readyInMinutes: time,
    servings,
    analyzedInstructions,
  } = rawRecipeDetails;

  const ingredients = rawRecipeDetails?.extendedIngredients?.map(
    (ingredient: any) => formatIngredient(ingredient),
  );

  const steps = analyzedInstructions[0]?.steps?.map((step: any) =>
    formatRecipeInstruction(step),
  );

  return {
    imageUrl,
    id,
    title,
    summary,
    time,
    ingredients,
    servings,
    steps,
  } as RecipeData;
}
