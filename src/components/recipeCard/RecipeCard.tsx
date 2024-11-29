import { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import TextBlock from '@components/customText';
import IconButton from '@components/iconButton';
import useStyles from '@hooks/useStyles';
import useThemeContext from '@hooks/useThemeContext';
import useFavourites from '@hooks/useFavourites';
import { fontSize } from '@constants/fonts';
import ROUTES from '@constants/routes';

import recipeCardStyles from './styles';

function RecipeCard({ id, title, time, img }: RecipeCardProps) {
  const { colors, gradients } = useThemeContext();

  const { favouriteRecipes, addToFavourites, removeFromFavourites } = useFavourites();

  const navigation = useNavigation<NavigationProp<DashboardStackParamList>>();

  const styles = useStyles(recipeCardStyles);

  const { isFavourite, action } = useMemo(() => {
    const isFavourite = !!favouriteRecipes?.find(recipeId => recipeId === id);

    const action = isFavourite ? () => removeFromFavourites(id) : () => addToFavourites(id);

    return { isFavourite, action };
  }, [id, favouriteRecipes, addToFavourites, removeFromFavourites]);

  return (
    <LinearGradient
      colors={gradients.recipeCard}
      style={styles.recipeCardGradient}>
      <TouchableOpacity
        style={styles.recipeCard}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate(ROUTES.DashboardStack.RecepiDetails, {
            recepiId: id,
          })
        }>

        <FastImage source={{ uri: img }} style={styles.recipeImage} />

        <TextBlock
          style={styles.recipeTitle}
          ellipsizeMode="tail"
          numberOfLines={2}>
          {title}
        </TextBlock>

        {time ?
          <View style={styles.timeContainer}>
            <TextBlock style={styles.timeHeading}>Time</TextBlock>
            <TextBlock style={styles.time}>{time + ' Mins'}</TextBlock>
          </View>
          : null}

        <IconButton
          style={styles.favouritesButton}
          icon={{
            name: isFavourite ? 'heart' : 'heart-outline',
            color: colors.primary,
            size: fontSize.twentyFour,
          }}
          onPress={action}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default RecipeCard;
