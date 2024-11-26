import {ThemeContextProvider} from '@config/contexts/ThemeContext';
import MainNavigator from '@config/MainNavigator';

function App() {
  return (
    <ThemeContextProvider>
      <MainNavigator />
    </ThemeContextProvider>
  );
}

export default App;
