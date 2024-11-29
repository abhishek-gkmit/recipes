import { fontFamily, fontSize } from '@constants/fonts';
import { verticalScale } from '@utility/scalingHelpers';
import { StyleSheet } from 'react-native';

function favouritesScreenStyles(colors: Colors) {
  return StyleSheet.create({
    heading: {
      fontSize: fontSize.twenty,
      textAlign: 'center',
      backgroundColor: colors.primary,
      paddingVertical: verticalScale(5),
    },

    listContainer: { marginTop: 0, marginBottom: 30 },

    columnWrapperStyle: { gap: 30, justifyContent: 'center' },

    listContentContainerStyles: {
      paddingVertical: 20,
    },
  });
}

export default favouritesScreenStyles;
