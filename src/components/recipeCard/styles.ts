import { StyleSheet } from 'react-native';

import { fontFamily, fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function recipeCardStyles(colors: Colors) {
  return StyleSheet.create({
    recipeCardGradient: {
      height: verticalScale(180),
      width: horizontalScale(150),
      borderRadius: moderateScale(15),
      justifyContent: 'center',
      elevation: 5,
      marginTop: verticalScale(50),
    },

    recipeCard: {
      height: verticalScale(180),
      width: horizontalScale(150),
      backgroundColor: colors.black0,
      borderRadius: moderateScale(15),
      padding: moderateScale(10),
      justifyContent: 'center',
    },

    recipeTitle: {
      fontSize: fontSize.eighteen,
      textAlign: 'center',
    },

    timeContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding: moderateScale(10),
    },

    timeHeading: {
      color: colors.black5,
      fontFamily: fontFamily.NunitoSansSemiBold,
      fontSize: fontSize.twelve,
    },

    time: {
      fontFamily: fontFamily.NunitoSansBold,
      fontSize: fontSize.twelve,
    },

    recipeImage: {
      resizeMode: 'cover',
      position: 'absolute',
      alignSelf: 'center',
      width: horizontalScale(100),
      height: verticalScale(100),
      top: moderateScale(-50),
      borderRadius: moderateScale(500),
      zIndex: 5,
      elevation: moderateScale(10),
    },

    favouritesButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: moderateScale(5),
      margin: moderateScale(10),
      backgroundColor: colors.background,
      borderRadius: moderateScale(100),
      elevation: 5,
    },
  });
}

export default recipeCardStyles;
