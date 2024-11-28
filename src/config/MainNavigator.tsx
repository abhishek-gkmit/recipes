import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabsNavigator from '@navigation/BottomTabs';
import useThemeContext from '@hooks/useThemeContext';

function MainNavigator() {
  const { colors } = useThemeContext();

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.primary} />
        <BottomTabsNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default MainNavigator;
