import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

import useThemeContext from './useThemeContext';

function useStyles<T>(themedStyleFunc: (colors: Colors) => T): T {
  const { colors, theme } = useThemeContext();

  // to handle the change of orientation
  const dimensions = useWindowDimensions();

  const styles = useMemo(() => {
    return themedStyleFunc(colors);
  }, [theme, dimensions]);

  return styles;
}

export default useStyles;
