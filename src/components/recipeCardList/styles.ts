import { StyleSheet } from 'react-native';

import { fontSize } from '@constants/fonts';
import { moderateScale, verticalScale } from '@utility/scalingHelpers';

function recipeCardListStyles(colors: Colors) {
  return StyleSheet.create({
    recipeCardListContainer: {
      marginTop: verticalScale(30),
      gap: moderateScale(10),
    },

    recipeCardListContent: {
      gap: moderateScale(20),
      padding: moderateScale(10),
    },

    listTitle: {
      fontSize: fontSize.eighteen,
    },
  });
}

export default recipeCardListStyles;
