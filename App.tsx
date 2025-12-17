/* Library */
import BottomTabNavigator from "./src/navigations/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Feed from "./src/screen/Feed";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  MainTab: undefined;
  Feed: undefined;
};

export default function App() {
  const [fontsLoaded] = useFonts({
    PretendardMedium: require("./assets/fonts/Pretendard-Medium.ttf"),
    PretendardBold: require("./assets/fonts/Pretendard-Bold.ttf"),
    memo: require("./assets/fonts/Memoment.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTab" component={BottomTabNavigator} />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
