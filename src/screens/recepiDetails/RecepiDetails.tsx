import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import TextBlock from '@components/customText';
import Loader from '@components/customLoader';
import IconButton from '@components/iconButton';
import FadeInSlideUp from '@components/animations/fadeInSlideUp';
import useStyles from '@hooks/useStyles';
import useThemeContext from '@hooks/useThemeContext';
import { ImagePlaceholder } from '@constants/images';
import { getRecipeDetails } from '@network/apiMethods';
import getGlobalStyles from '@theme/globalStyles';

import RecipeDetailsTabView from './RecipeDetailsTabView';
import {
  RecipeDetailsContext,
  initialContextValues,
} from './RecipeDetailsContext';
import recepiDetailsStyles from './styles';

function BackAndFavouritesButtons({ navigation }: BackAndFavouritesButtonsProps) {
  const { colors } = useThemeContext();

  const localStyles = useStyles(recepiDetailsStyles);

  return (
    <FadeInSlideUp style={localStyles.backAndFavouritesButtons}>
      <IconButton
        icon={{
          name: 'arrow-left-circle-outline',
          size: 24,
          color: colors.foreground,
        }}
        onPress={() => navigation.navigate('Dashboard')}
        style={localStyles.backButton}
        activeOpacity={0.95}
      />

      <IconButton
        icon={{ name: 'heart-outline', size: 24, color: colors.primary }}
        style={[localStyles.backButton, localStyles.favouriteButton]}
        activeOpacity={0.95}
      />
    </FadeInSlideUp>
  );
}

function RecepiDetails() {
  const [recipeDetails, setRecipeDetails] =
    useState<RecipeData>(initialContextValues);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<RecepiDetailsNavigationProp>();
  const route = useRoute<RouteProp<DashboardStackParamList>>();

  const globalStyles = useStyles(getGlobalStyles);
  const localStyles = useStyles(recepiDetailsStyles);

  const loadRecipeDetails = useCallback(async () => {
    const recipeDetails = await getRecipeDetails(route.params?.recepiId);

    recipeDetails && setRecipeDetails(recipeDetails);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadRecipeDetails();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <RecipeDetailsContext.Provider value={recipeDetails}>
      <View
        style={globalStyles.screen}>
        <BackAndFavouritesButtons navigation={navigation} />

        <FadeInSlideUp delay={100}>
          <FastImage
            source={{
              uri: recipeDetails.imageUrl,
            }}
            defaultSource={ImagePlaceholder}
            style={localStyles.recipeImage}
          />
        </FadeInSlideUp>

        <FadeInSlideUp delay={200}>
          <TextBlock style={localStyles.recipeName}>
            {recipeDetails?.title}
          </TextBlock>
        </FadeInSlideUp>

        <FadeInSlideUp delay={400} style={globalStyles.screen}>
          <RecipeDetailsTabView />
        </FadeInSlideUp>
      </View>
    </RecipeDetailsContext.Provider>
  );
}

export default RecepiDetails;
