import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import IconButton from '@components/iconButton';
import Input from '@components/input';
import RecipeCardList from '@components/recipeCardList';
import EmptyListIndicator from '@components/emptyListIndicator';
import ToggleFilterList from '@components/toggleFilterList';
import useStyles from '@hooks/useStyles';
import useThemeContext from '@hooks/useThemeContext';
import { getSearchResultsFromApi } from '@network/apiMethods';
import { cuisines, diets } from '@constants';
import getGlobalStyles from '@theme/globalStyles';

import searchStyles from './styles';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<RandomRecipe[]>([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>(['Indian']);
  const [dietFilters, setDietFilters] = useState<string[]>(['Vegetarian']);

  const { colors } = useThemeContext();

  const navigation = useNavigation<NavigationProp<DashboardStackParamList>>();

  const globalStyles = useStyles(getGlobalStyles);
  const localStyles = useStyles(searchStyles);

  const getSearchResults = useCallback(async (query: string) => {
    const searchResults = await getSearchResultsFromApi(query, cuisineFilters, dietFilters);

    setSearchResults(searchResults);
  }, [setSearchResults, cuisineFilters, dietFilters]);

  useEffect(() => {
    const timeout = setTimeout(() => getSearchResults(searchQuery), 300);

    return () => clearTimeout(timeout);
  }, [searchQuery, cuisineFilters, dietFilters]);

  return (
    <View style={globalStyles.screen}>
      <View style={localStyles.filtersContainer}>
        <View style={localStyles.inputContainer}>
          <IconButton
            icon={{ name: 'arrow-left', size: 24 }}
            btnStyle={localStyles.backButtonStyle}
            onPress={() => navigation.goBack()}
          />
          <Input
            placeholder="Search by recipes or ingredients"
            placeholderTextColor={colors.black5}
            value={searchQuery}
            setValue={text => setSearchQuery(text)}
          />
        </View>

        <ToggleFilterList
          title="Filter cuisine"
          filters={cuisines}
          activeFilters={cuisineFilters}
          onFiltersChange={activeFilters => setCuisineFilters(activeFilters)}
          textStyle={localStyles.filterListTitle}
          scrollViewContent={localStyles.filterListScrollViewContent}
          style={localStyles.filterList}
        />

        <ToggleFilterList
          title="Filter diets"
          filters={diets}
          activeFilters={dietFilters}
          selectMultipleFilters={true}
          onFiltersChange={activeFilters => setDietFilters(activeFilters)}
          textStyle={localStyles.filterListTitle}
          scrollViewContent={localStyles.filterListScrollViewContent}
          style={localStyles.filterList}
        />
      </View>

      <RecipeCardList
        data={searchResults}
        horizontal={false}
        numColumns={2}
        listContentContainerStyles={localStyles.listContentContainerStyles}
        listContainerStyles={localStyles.listContainer}
        columnWrapperStyle={localStyles.columnWrapperStyle}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyListIndicator title="No recipes found" />}
      />
    </View>
  );
}

export default Search;
