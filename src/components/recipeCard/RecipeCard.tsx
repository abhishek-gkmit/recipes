import { View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import TextBlock from '@components/customText';
import IconButton from '@components/iconButton';
import useStyles from '@hooks/useStyles';
import useThemeContext from '@hooks/useThemeContext';
import { fontSize } from '@constants/fonts';
import ROUTES from '@constants/routes';

import recipeCardStyles from './styles';

function RecipeCard({ id, title, time, img }: RecipeCardProps) {
  const { colors, gradients } = useThemeContext();

  const navigation = useNavigation<NavigationProp<DashboardStackParamList>>();

  const styles = useStyles(recipeCardStyles);

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

        <View style={styles.timeContainer}>
          <TextBlock style={styles.timeHeading}>Time</TextBlock>
          <TextBlock style={styles.time}>{time + ' Mins'}</TextBlock>
        </View>

        <IconButton
          style={styles.favouritesButton}
          icon={{
            name: 'heart-outline',
            color: colors.primary,
            size: fontSize.twentyFour,
          }}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default RecipeCard;
