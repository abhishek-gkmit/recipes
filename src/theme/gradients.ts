import { colors } from './colors';

const { light, dark } = colors;

export const GRADIENTS = {
  light: {
    recipeCard: [light.primary, light.white],
    ingredientCard: [light.glacierGray, light.white],
  },
  dark: {
    recipeCard: [dark.primary, dark.veroneseGreen, dark.darkGunmetal],
    ingredientCard: [dark.glacierGray, dark.white],
  },
};
