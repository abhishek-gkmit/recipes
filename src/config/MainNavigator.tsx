import { NavigationContainer } from '@react-navigation/native';

import BottomTabsNavigator from '@navigation/BottomTabs';

function MainNavigator() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

export default MainNavigator;
