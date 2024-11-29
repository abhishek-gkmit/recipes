import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import useFavourites from '@hooks/useFavourites';
import useStyles from '@hooks/useStyles';
import { getRecipeDetailsBulk } from '@network/apiMethods';

import Loader from '@components/customLoader';
import RecipeCardList from '@components/recipeCardList';
import TextBlock from '@components/customText';
import EmptyListIndicator from '@components/emptyListIndicator';
import getGlobalStyles from '@theme/globalStyles';

import favouritesStyles from './styles';

function Favourites() {
  const [favouriteRecipesDetails, setFavouriteRecipesDetails] = useState<
    RandomRecipe[]
  >([]);
  const [loading, setLoading] = useState(false);

  const { favouriteRecipes } = useFavourites();

  const globalStyles = useStyles(getGlobalStyles);
  const localStyles = useStyles(favouritesStyles);

  const loadFavouriteRecipesDetails = useCallback(async () => {
    if (favouriteRecipes.length === 0) {
      return;
    }

    setLoading(true);

    const favouriteRecipesDetails = await getRecipeDetailsBulk(
      favouriteRecipes,
    );

    favouriteRecipesDetails &&
      setFavouriteRecipesDetails(favouriteRecipesDetails);

    setLoading(false);
  }, [favouriteRecipes]);

  useEffect(() => {
    loadFavouriteRecipesDetails();
  }, [favouriteRecipes]);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={globalStyles.screen}>
      <TextBlock style={localStyles.heading}>Favourites</TextBlock>
      <RecipeCardList
        data={favouriteRecipesDetails}
        horizontal={false}
        numColumns={2}
        listContentContainerStyles={localStyles.listContentContainerStyles}
        listContainerStyles={localStyles.listContainer}
        columnWrapperStyle={localStyles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyListIndicator title="No favourite recipes" />}
      />
    </View>
  );
}

export default Favourites;
