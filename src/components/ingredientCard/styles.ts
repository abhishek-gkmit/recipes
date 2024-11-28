import { StyleSheet } from 'react-native';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';
import { fontSize } from '@constants/fonts';

function ingredientCardStyles(colors: Colors) {
  return StyleSheet.create({
    animatedView: {
      flex: 1,
    },

    ingredientCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: moderateScale(10),
    },

    imageAndNameContainer: { flexDirection: 'row', alignItems: 'center' },

    ingredientImage: {
      width: horizontalScale(50),
      height: verticalScale(50),
      borderRadius: moderateScale(10),
      margin: moderateScale(10),
      backgroundColor: colors.white,
    },

    ingredientName: { fontSize: fontSize.sixteen },

    ingredientQuantity: { marginRight: horizontalScale(20) },
  });
}

export default ingredientCardStyles;
