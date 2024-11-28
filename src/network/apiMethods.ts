import {
  formatRandomRecipes,
  formatRecipeDetails,
} from '@utility/dataFormatters';

import { _get } from './axiosMethods';
import { apiEndpoints } from './apiConstants';

export async function getRandomRecipes(tags?: string[], count?: number) {
  const includeTags = tags?.map(tag => tag.toLowerCase())?.join(', ');

  const params = {
    number: count || 10,
    'include-tags': includeTags,
  };

  const res = await _get(apiEndpoints.randomRecipes, params);

  const recepies = formatRandomRecipes(res.data?.recipes);

  return recepies;
}

export async function getRecipeDetails(
  recipeId?: string,
  includeNutrition = false,
) {
  if (!recipeId) {
    return;
  }

  const res = await _get(apiEndpoints.recipeDetails(recipeId), {
    includeNutrition,
  });

  const recipeDetails = formatRecipeDetails(res.data);

  return recipeDetails;
}
