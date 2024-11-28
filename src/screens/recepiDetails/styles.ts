import { StyleSheet } from 'react-native';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';
import { fontFamily, fontSize } from '@constants/fonts';

function recepiDetailsStyles(colors: Colors) {
  return StyleSheet.create({
    recipeDetails: {},

    recipeImage: {
      height: verticalScale(250),
      marginBottom: verticalScale(10),
    },

    recipeName: {
      marginHorizontal: horizontalScale(20),
      fontSize: fontSize.eighteen,
      fontFamily: fontFamily.MontserratSemiBold,
      marginBottom: verticalScale(10),
    },

    backButton: {
      position: 'absolute',
      margin: moderateScale(10),
      top: 0,
      left: 0,
      zIndex: 5,
      backgroundColor: colors.background,
      borderRadius: 100,
      padding: moderateScale(10),
      elevation: 5,
    },

    favouriteButton: {
      right: 0,
      left: 'auto',
    },

    recipeDescription: { fontSize: 14, padding: 20 },

    ingredientListContent: { gap: 10, paddingHorizontal: 20 },

    ingredientList: { marginTop: 20 },

    recipeInstruction: {
      gap: 10,
      backgroundColor: colors.brightGray,
      padding: 10,
      borderRadius: 10,
    },

    recipeInstructionStep: {
      fontSize: 16,
      fontFamily: fontFamily.NunitoSansSemiBold,
    },

    recipeInstructionDesc: { fontSize: 14 },

    recipeInstructionList: { padding: 20, gap: 10 },

    recipeInstructionListHeading: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
}

export default recepiDetailsStyles;
