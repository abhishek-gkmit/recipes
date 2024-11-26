import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Favourites from '@screens/favourites';
import MealPlanner from '@screens/mealPlanner';
import BottomTabBar from '@components/customBottomTabBar';
import ROUTES from '@constants/routes';

import DashboardStack from './DashboardStack';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTabBar {...props} />}>
      <BottomTabs.Screen
        name={ROUTES.BottomTabs.DashboardStack}
        component={DashboardStack}
      />
      <BottomTabs.Screen
        name={ROUTES.BottomTabs.MealPlanner}
        component={MealPlanner}
      />
      <BottomTabs.Screen
        name={ROUTES.BottomTabs.Favourites}
        component={Favourites}
      />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsNavigator;
