import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ROUTES from '@constants/routes';

declare global {
  type BottomTabsScreenNames = keyof typeof ROUTES.BottomTabs;
  type BottomTabsParamList = Record<BottomTabsScreenNames, undefined>;

  type DashboardStackScreenNames = keyof typeof ROUTES.DashboardStack;
  type DashboardStackParamList = Record<DashboardStackScreenNames, undefined>;
}
