import {
  getFavouriteRecipesFromStorage,
  saveFavouriteRecipesToStorage,
} from '@utility/asyncStorage';
import React, { useState, createContext, useEffect, useCallback } from 'react';

const FavouritesContext = createContext<FavouritesContextValues>(
  {} as FavouritesContextValues,
);

function FavouritesContextProvider({ children }: { children: React.ReactNode }) {
  const [favouriteRecipes, setFavouriteRecipes] = useState<Array<string>>([]);

  const addToFavourites = useCallback(
    async (recipeId: string) => {
      const newFavouriteRecipes = [...favouriteRecipes, recipeId];

      setFavouriteRecipes(newFavouriteRecipes);

      saveFavouriteRecipesToStorage(newFavouriteRecipes);
    },
    [favouriteRecipes, setFavouriteRecipes],
  );

  const removeFromFavourites = useCallback(
    (recipeId: string) => {
      const newFavouriteRecipes = favouriteRecipes.filter(
        id => recipeId !== id,
      );

      setFavouriteRecipes(newFavouriteRecipes);

      saveFavouriteRecipesToStorage(newFavouriteRecipes);
    },
    [favouriteRecipes, setFavouriteRecipes],
  );

  useEffect(() => {
    (async () => {
      const favouriteRecipes = await getFavouriteRecipesFromStorage();

      setFavouriteRecipes(favouriteRecipes);
    })();
  }, []);

  return (
    <FavouritesContext.Provider
      value={{
        favouriteRecipes,
        addToFavourites,
        removeFromFavourites,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export { FavouritesContextProvider, FavouritesContext };
