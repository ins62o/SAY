/* Library */
import BottomTabNavigator from "./src/navigations/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
