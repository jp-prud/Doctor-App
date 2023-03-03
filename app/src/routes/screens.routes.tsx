import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Auth from "@screens/Auth";

export function ScreenRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Auth" component={Auth} />
    </Navigator>
  );
}
