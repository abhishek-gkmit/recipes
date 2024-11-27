import {View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import TextBlock from '@components/customText';
import IconButton from '@components/iconButton';
import useStyles from '@hooks/useStyles';
import useThemeContext from '@hooks/useThemeContext';
import {fontSize} from '@constants/fonts';

import recipeCardStyles from './styles';

function RecipeCard({id, title, time, img}: RecipeCardProps) {
  const {colors, gradients} = useThemeContext();

  const styles = useStyles(recipeCardStyles);

  return (
    <LinearGradient
      colors={gradients.recipeCard}
      style={styles.recipeCardGradient}>
      <TouchableOpacity style={styles.recipeCard} activeOpacity={0.95}>
        <FastImage source={{uri: img}} style={styles.recipeImage} />

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
