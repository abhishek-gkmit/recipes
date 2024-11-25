import { StyleSheet } from 'react-native';

function getThemedStyles(colors: Colors) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },

    flexContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}

export default getThemedStyles;
