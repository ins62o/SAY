/* Library */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

/* Navigators */
import BottomTabNavigator from "./src/navigations/Tabs";

/* Screens */
import Login from "./src/screen/Login";
import FeedDetail from "./src/screen/Feed/FeedDetail";
import Calendar from "./src/screen/Calendar/Calendar";
import Feed from "./src/screen/Feed/Feed";
import FeedWrite from "./src/screen/Feed/FeedWrite";
import Gallery from "./src/screen/Gallery/Gallery";
import GalleryDetail from "./src/screen/Gallery/GalleryDetail";

export type RootStackParamList = {
  Login: undefined;
  MainTab: undefined;
  Calendar: undefined;
  Gallery: undefined;

  // 피드
  Feed: undefined;
  FeedWrite: undefined;
  FeedDetail: undefined;
  GalleryDetail: undefined;
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
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="GalleryDetail" component={GalleryDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
