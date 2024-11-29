import AsyncStorage from '@react-native-async-storage/async-storage';

import { FAVOURITES_RECIPES } from '@constants';

async function getFavouriteRecipesFromStorage() {
  const favouriteRecipes = await AsyncStorage.getItem(FAVOURITES_RECIPES);

  if (!favouriteRecipes) {
    return [];
  }

  return JSON.parse(favouriteRecipes) as string[];
}

async function saveFavouriteRecipesToStorage(recipes: string[]) {
  try {
    await AsyncStorage.setItem(FAVOURITES_RECIPES, JSON.stringify(recipes));
  } catch (err) {
    console.error(err);
  }

  return recipes;
}

export { getFavouriteRecipesFromStorage, saveFavouriteRecipesToStorage };
