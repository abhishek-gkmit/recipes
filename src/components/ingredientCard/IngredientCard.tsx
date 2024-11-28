import { useEffect, useMemo } from 'react';
import { View, Animated, useAnimatedValue } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import TextBlock from '@components/customText';
import useThemeContext from '@hooks/useThemeContext';
import useStyles from '@hooks/useStyles';

import ingredientCardStyles from './styles';

function IngredientCard({ imageUrl, name, amount, unit }: IngredientCardProps) {
  const position = useAnimatedValue(100);

  const { gradients } = useThemeContext();

  const styles = useStyles(ingredientCardStyles);

  const animatedStyles = useMemo(() => {
    return { transform: [{ translateX: position }] };
  }, [position]);

  useEffect(() => {
    Animated.timing(position, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.animatedView, animatedStyles]}>
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
          />

          <TextBlock style={styles.ingredientName}>{name}</TextBlock>
        </View>

        <TextBlock style={styles.ingredientQuantity}>
          {amount + ' ' + unit}
        </TextBlock>
      </LinearGradient>
    </Animated.View>
  );
}

export default IngredientCard;
