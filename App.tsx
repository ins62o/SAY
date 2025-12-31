/* Library */
import BottomTabNavigator from "./src/navigations/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

/* Screen */
import Calendar from "./src/screen/Calendar";
import Feed from "./src/screen/Feed";
import FeedWrite from "./src/screen/FeedWrite";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  MainTab: undefined;
  Calendar: undefined;

  // 피드
  Feed: undefined;
  FeedWrite: undefined;
};

export default function App() {
  const [fontsLoaded] = useFonts({
    memo: require("./assets/fonts/Memoment.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTab" component={BottomTabNavigator} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="FeedWrite" component={FeedWrite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
