import { NavigationContainer } from "@react-navigation/native";

import TabAppRoutes from "./tab-app.routes";

import { ScreenRoutes } from "./screens.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <ScreenRoutes />
    </NavigationContainer>
  );
}
