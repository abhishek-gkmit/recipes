interface ThemeContextValues {
  theme: ColorSchemeName;
  colors: Colors;
  gradients: Gradients;
}

interface FavouritesContextValues {
  favouriteRecipes: string[];
  addToFavourites: (recipeId: string) => void;
  removeFromFavourites: (recipeId: string) => void;
}
