import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import BottomTabsNavigator from '@navigation/BottomTabs';

import { FavouritesContextProvider } from './contexts/FavouritesContext';

function MainNavigator() {
  return (
    <>
      <FavouritesContextProvider>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </FavouritesContextProvider>
      <Toast />
    </>
  );
}

export default MainNavigator;
