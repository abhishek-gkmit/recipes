import { useContext } from 'react';

import { ThemeContext } from '@config/contexts/ThemeContext';

function useThemeContext() {
  return useContext(ThemeContext);
}

export default useThemeContext;
