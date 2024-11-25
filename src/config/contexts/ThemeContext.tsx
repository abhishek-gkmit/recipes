import React, { createContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { colorSchemes } from '@constants';
import { colors } from '@theme/colors';

const ThemeContext = createContext<ThemeContextValues>({
  theme: colorSchemes.light,
  colors: colors[colorSchemes.light],
});

function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const theme = useColorScheme();

  const { colorsByTheme } = useMemo(() => {
    return {
      colorsByTheme: colors[theme || colorSchemes.light],
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, colors: colorsByTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
