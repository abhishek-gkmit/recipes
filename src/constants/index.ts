const colorSchemes = {
  dark: 'dark',
  light: 'light',
} as const;

const cuisines = [
  'Indian',
  'Thai',
  'French',
  'American',
  'Japanese',
  'Chinese',
  'Italian',
  'Korean',
  'Mexican',
];

const diets = [
  'Vegetarian',
  'Gluten Free',
  'Vegan',
  'Ketogenic',
  'Pescetarian',
];

const ingredientImageUrl = (imageName: string) =>
  `https://img.spoonacular.com/ingredients_500x500/${imageName}`;

const FAVOURITES_RECIPES = 'favourites';

export { colorSchemes, cuisines, diets, ingredientImageUrl, FAVOURITES_RECIPES };
