import { horizontalScale, moderateScale, verticalScale } from '@utility/scalingHelpers';
import { StyleSheet } from 'react-native';

function searchScreenStyles(colors: Colors) {
  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.brightGray,
      padding: moderateScale(10),
      gap: moderateScale(10)
    },

    backButtonStyle: {
      backgroundColor: colors.background,
      elevation: 5
    },

    listContainer: { marginTop: 0, marginBottom: verticalScale(30) },

    columnWrapperStyle: { gap: moderateScale(30), justifyContent: 'center' },

    listContentContainerStyles: {
      paddingVertical: verticalScale(20),
    },

    filtersContainer: {
      elevation: 10,
      backgroundColor: colors.white,
      paddingBottom: verticalScale(20)
    },

    filterList: { marginTop: verticalScale(20), gap: moderateScale(10) },

    filterListTitle: { textAlign: 'left', paddingLeft: horizontalScale(10) },

    filterListScrollViewContent: { paddingHorizontal: horizontalScale(10) },
  });
}

export default searchScreenStyles;
