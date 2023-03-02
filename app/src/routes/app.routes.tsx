import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthPage from "@screens/auth";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="auth" component={AuthPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

