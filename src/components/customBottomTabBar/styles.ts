import { StyleSheet } from 'react-native';

import { moderateScale, verticalScale } from '@utility/scalingHelpers';

function bottomTabBarStyles(colors: Colors) {
  return StyleSheet.create({
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: colors.background,
      height: verticalScale(60),
    },

    tabContainer: {
      flex: 1,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(50),
    },

    tab: {
      backgroundColor: colors.background,
      borderRadius: moderateScale(200),
    },
  });
}

export default bottomTabBarStyles;
