import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ROUTES from '@constants/routes';

declare global {
  type BottomTabsScreenNames = keyof typeof ROUTES.BottomTabs;
  type BottomTabsParamList = Record<BottomTabsScreenNames, undefined>;

  type DashboardStackScreenNames = keyof typeof ROUTES.DashboardStack;
  type DashboardStackParamList = {
    [ROUTES.DashboardStack.Dashboard]: undefined;
    [ROUTES.DashboardStack.Search]: undefined;
    [ROUTES.DashboardStack.Filter]: undefined;
    [ROUTES.DashboardStack.RecepiDetails]: { recepiId: string };
  };

  type RecepiDetailsNavigationProp = NavigationProp<
    DashboardStackParamList,
    typeof ROUTES.DashboardStack.RecepiDetails
  >;

  type RecepiDetailsScreenRouteProp = RouteProp<
    DashboardStackParamList,
    typeof ROUTES.DashboardStack.RecepiDetails
  >;
}
