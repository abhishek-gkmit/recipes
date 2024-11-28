import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import TextBlock from '@components/customText';
import useThemeContext from '@hooks/useThemeContext';
import useStyles from '@hooks/useStyles';
import { ImagePlaceholder } from '@constants/images';

import ingredientCardStyles from './styles';

function IngredientCard({ imageUrl, name, amount, unit }: IngredientCardProps) {
  const { gradients } = useThemeContext();

  const styles = useStyles(ingredientCardStyles);

  return (
    <LinearGradient
      style={styles.ingredientCard}
      colors={gradients.ingredientCard}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <View style={styles.imageAndNameContainer}>
        <FastImage
          source={{ uri: imageUrl }}
          style={styles.ingredientImage}
          resizeMode="contain"
          defaultSource={ImagePlaceholder}
        />

        <TextBlock style={styles.ingredientName}>{name}</TextBlock>
      </View>

      <TextBlock style={styles.ingredientQuantity}>
        {amount + ' ' + unit}
      </TextBlock>
    </LinearGradient>
  );
}

export default IngredientCard;
