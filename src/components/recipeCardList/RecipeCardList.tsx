import { View, FlatList, StyleSheet } from 'react-native';

import TextBlock from '@components/customText';
import RecipeCard from '@components/recipeCard';
import Loader from '@components/customLoader';
import EmptyListIndicator from '@components/emptyListIndicator';
import useStyles from '@hooks/useStyles';

import recipeCardListStyles from './styles';
import { useMemo } from 'react';

function RecipeCardList({
  title,
  data,
  loading,
  titleStyles,
  listContainerStyles,
  listStyles,
  listContentContainerStyles,
  ...props
}: RecipeCardListProps) {
  const styles = useStyles(recipeCardListStyles);

  const textBlock = useMemo(() => {
    return title ? (
      <TextBlock style={StyleSheet.compose(styles.listTitle, titleStyles)}>
        {title}
      </TextBlock>
    ) : null;
  }, [styles, titleStyles, title]);

  const cardList = loading ? (
    <Loader />
  ) : (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <RecipeCard {...item} />}
      horizontal
      style={listStyles}
      contentContainerStyle={StyleSheet.compose(
        styles.recipeCardListContent,
        listContentContainerStyles,
      )}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={3}
      ListEmptyComponent={<EmptyListIndicator title="recipes" />}
      {...props}
    />
  );

  return (
    <View
      style={StyleSheet.compose(
        styles.recipeCardListContainer,
        listContainerStyles,
      )}>
      {textBlock}
      {cardList}
    </View>
  );
}

export default RecipeCardList;
