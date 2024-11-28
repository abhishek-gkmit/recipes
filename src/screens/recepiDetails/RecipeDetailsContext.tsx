import { createContext, useContext } from 'react';

const initialContextValues = {
  id: '',
  title: '',
  imageUrl: '',
  ingredients: [],
  time: '',
  summary: '',
  servings: 0,
  steps: [],
};

const RecipeDetailsContext =
  createContext<RecipeDetailsContextValues>(initialContextValues);

function useRecipeDetails() {
  return useContext(RecipeDetailsContext);
}

export { RecipeDetailsContext, useRecipeDetails, initialContextValues };
