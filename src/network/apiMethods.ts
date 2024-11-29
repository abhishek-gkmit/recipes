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

export async function getRecipeDetailsBulk(
  recipeIds?: string[],
  includeNutrition = false,
) {
  if (!recipeIds) {
    return;
  }

  const recipeIdString = recipeIds.join(', ');

  // const res = await _get(apiEndpoints.recipeDetailsBulk, {
  //   ids: recipeIdString,
  //   includeNutrition,
  // });
  //
  // const recipeDetailsBulk = formatRandomRecipes(res.data);

  const recipeDetailsBulk = [
    {
      id: '715538',
      img: 'https://img.spoonacular.com/recipes/715538-556x370.jpg',
      time: '35',
      title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
    },
    {
      id: '716429',
      img: 'https://img.spoonacular.com/recipes/716429-556x370.jpg',
      time: '45',
      title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
    },
  ];

  return recipeDetailsBulk;
}

export async function getSearchResultsFromApi(query: string, cuisineFilters: string[], dietFilters: string[]) {
  const cuisine = cuisineFilters.join(',');
  const diet = dietFilters.join(',');

  const res = await _get(apiEndpoints.search, {
    query,
    cuisine,
    diet,
    addRecipeInformation: true,
  });

  const searchResults = formatRandomRecipes(res.data?.results);

  return searchResults;
}
