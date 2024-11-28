import { StyleSheet } from 'react-native';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';
import { fontFamily, fontSize } from '@constants/fonts';

function recepiDetailsStyles(colors: Colors) {
  return StyleSheet.create({
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

    recipeDescription: { fontSize: fontSize.fourteen, padding: moderateScale(20) },

    ingredientListContent: { gap: moderateScale(10), paddingHorizontal: horizontalScale(20) },

    ingredientList: { marginTop: verticalScale(20) },

    recipeInstruction: {
      gap: moderateScale(10),
      backgroundColor: colors.brightGray,
      padding: moderateScale(10),
      borderRadius: moderateScale(10),
    },

    recipeInstructionStep: {
      fontSize: fontSize.sixteen,
      fontFamily: fontFamily.NunitoSansSemiBold,
    },

    recipeInstructionDesc: { fontSize: fontSize.fourteen },

    recipeInstructionList: { padding: moderateScale(20), gap: moderateScale(10) },

    recipeInstructionListHeading: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    backAndFavouritesButtons: {
      zIndex: 5
    }
  });
}

export default recepiDetailsStyles;
