import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import TextBlock from '@components/customText';
import ButtonWithIcon from '@components/buttonWithIcon';
import RecipeCardList from '@components/recipeCardList';
import ToggleFilterList from '@components/toggleFilterList';
import useStyles from '@hooks/useStyles';
import { getRandomRecipes } from '@network/apiMethods';
import { cuisines, diets } from '@constants';

import getGlobalStyles from '@theme/globalStyles';
import dashboardStyles from './styles';

function Dashboard() {
  const [randomRecipesByCuisine, setRandomRecipesByCuisine] = useState<
    RandomRecipe[]
  >([]);
  const [randomRecipesByDiets, setRandomRecipesByDiets] = useState<
    RandomRecipe[]
  >([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>(['Indian']);
  const [dietFilters, setDietFilters] = useState<string[]>(['Vegetarian']);
  const [dietLoading, setDietLoading] = useState(false);
  const [cuisineLoading, setCuisineLoading] = useState(false);

  const globalStyles = useStyles(getGlobalStyles);
  const localStyles = useStyles(dashboardStyles);

  const loadRandomRecipesByCuisine = useCallback(async () => {
    setCuisineLoading(true);
    const randomRecipes = await getRandomRecipes([...cuisineFilters]);
    setRandomRecipesByCuisine(randomRecipes);
    setCuisineLoading(false);
  }, [setRandomRecipesByCuisine, cuisineFilters]);

  const loadRandomRecipesByDiets = useCallback(async () => {
    setDietLoading(true);
    const randomRecipes = await getRandomRecipes([...dietFilters]);
    setRandomRecipesByDiets(randomRecipes);
    setDietLoading(false);
  }, [setRandomRecipesByDiets, dietFilters]);

  useEffect(() => {
    loadRandomRecipesByCuisine();
  }, [cuisineFilters]);

  useEffect(() => {
    loadRandomRecipesByDiets();
  }, [dietFilters]);

  return (
    <ScrollView
      style={StyleSheet.compose(globalStyles.screen, localStyles.dashboard)}
      contentContainerStyle={localStyles.dashboardContentContainer}>
      <TextBlock style={localStyles.mainHeading}>Hello</TextBlock>
      <TextBlock style={localStyles.subHeading}>
        What are you cooking today?
      </TextBlock>

      <ButtonWithIcon
        iconPosition="start"
        icon={{ name: 'search', size: 20 }}
        text="Search by ingredients or recipe name"
        style={localStyles.searchBtn}
        textStyle={localStyles.searchBtnText}
      />

      <ToggleFilterList
        title="Cuisine"
        filters={cuisines}
        activeFilters={cuisineFilters}
        onFiltersChange={activeFilters => setCuisineFilters(activeFilters)}
      />

      <RecipeCardList data={randomRecipesByCuisine} loading={cuisineLoading} />

      <ToggleFilterList
        title="Diets"
        filters={diets}
        activeFilters={dietFilters}
        selectMultipleFilters={true}
        onFiltersChange={activeFilters => setDietFilters(activeFilters)}
      />

      <RecipeCardList data={randomRecipesByDiets} loading={dietLoading} />
    </ScrollView>
  );
}

export default Dashboard;
