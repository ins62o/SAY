/* Library */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

/* Navigators */
import BottomTabNavigator from "./src/navigations/Tabs";

/* Screens */
import Login from "./src/screen/Login";
import Calendar from "./src/screen/Calendar";
import Feed from "./src/screen/Feed";
import FeedWrite from "./src/screen/FeedWrite";
import FeedDetail from "./src/screen/FeedDetail";

export type RootStackParamList = {
  Login: undefined;
  MainTab: undefined;
  Calendar: undefined;

  // 피드
  Feed: undefined;
  FeedWrite: undefined;
  FeedDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    memo: require("./assets/fonts/Memoment.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTab" component={BottomTabNavigator} />
        <Stack.Screen name="Calendar" component={Calendar} />
        {/* 피드  */}
        <Stack.Screen name="Feed" component={Feed} />

        <Stack.Screen name="FeedWrite" component={FeedWrite} />
        <Stack.Screen name="FeedDetail" component={FeedDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
