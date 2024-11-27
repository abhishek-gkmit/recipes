import { StyleSheet } from 'react-native';

import { fontFamily, fontSize } from '@constants/fonts';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utility/scalingHelpers';

function dashboardStyles(colors: Colors) {
  return StyleSheet.create({
    dashboard: {
      padding: moderateScale(20),
    },

    dashboardContentContainer: {
      paddingBottom: verticalScale(20),
    },

    mainHeading: {
      fontSize: fontSize.twentyFour,
      fontFamily: fontFamily.NunitoSansBold,
    },

    subHeading: {
      color: colors.black6,
    },

    searchBtn: {
      backgroundColor: colors.background,
      gap: moderateScale(8),
      elevation: 5,
      padding: moderateScale(12),
      borderWidth: moderateScale(1),
      borderColor: colors.black1,
      marginTop: verticalScale(30),
    },

    searchBtnText: {
      color: colors.black4,
    },

    recipeCardsContainer: {
      marginTop: verticalScale(30),
    },

    recipeCardsContentContainer: {
      gap: moderateScale(20),
      paddingHorizontal: horizontalScale(10),
    },
  });
}

export default dashboardStyles;
