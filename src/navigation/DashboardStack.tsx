import ROUTES from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '@screens/dashboard';
import Filter from '@screens/filter';
import RecepiDetails from '@screens/recepiDetails';
import Search from '@screens/search';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.DashboardStack.Dashboard}
        component={Dashboard}
      />
      <Stack.Screen name={ROUTES.DashboardStack.Search} component={Search} />
      <Stack.Screen name={ROUTES.DashboardStack.Filter} component={Filter} />
      <Stack.Screen
        name={ROUTES.DashboardStack.RecepiDetails}
        component={RecepiDetails}
      />
    </Stack.Navigator>
  );
}

export default DashboardStack;
