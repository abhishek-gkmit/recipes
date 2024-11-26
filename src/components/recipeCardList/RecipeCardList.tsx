import { View, FlatList, StyleSheet } from 'react-native';

import TextBlock from '@components/customText';
import RecipeCard from '@components/recipeCard';
import useStyles from '@hooks/useStyles';

import recipeCardListStyles from './styles';

function RecipeCardList({
  title,
  data,
  titleStyles,
  listContainerStyles,
  listStyles,
  listContentContainerStyles,
  ...props
}: RecipeCardListProps) {
  const styles = useStyles(recipeCardListStyles);

  return (
    <View
      style={StyleSheet.compose(
        styles.recipeCardListContainer,
        listContainerStyles,
      )}>
      <TextBlock style={StyleSheet.compose(styles.listTitle, titleStyles)}>
        {title}
      </TextBlock>

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
        {...props}
      />
    </View>
  );
}

export default RecipeCardList;
