import { StyleSheet } from 'react-native';

import { horizontalScale, moderateScale } from '@utility/scalingHelpers';

function toggleButtonStyles(colors: Colors) {
  return StyleSheet.create({
    toggleButton: {
      backgroundColor: colors.background,
      padding: moderateScale(5),
      paddingHorizontal: horizontalScale(10),
      borderWidth: moderateScale(1),
      borderColor: colors.primary,
      borderRadius: moderateScale(10),
      gap: moderateScale(10),
    },

    on: {
      backgroundColor: colors.primary,
    },

    text: {
      color: colors.primary,
    },

    textOn: {
      color: colors.white,
    },
  });
}

export default toggleButtonStyles;
