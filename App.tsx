/* App navigation setup */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import BottomTabNavigator from "./src/navigations/Tabs";
import Login from "./src/screen/Login";
import FeedDetail from "./src/screen/Feed/FeedDetail";
import Calendar from "./src/screen/Calendar/Calendar";
import Feed from "./src/screen/Feed/Feed";
import FeedWrite from "./src/screen/Feed/FeedWrite";
import Gallery from "./src/screen/Gallery/Gallery";
import GalleryDetail from "./src/screen/Gallery/GalleryDetail";
import ProfileSettings from "./src/screen/ProfileSettings";
import "./src/lib/firebase";

export type RootStackParamList = {
  Login: undefined;
  MainTab: undefined;
  Calendar: undefined;
  Gallery: undefined;
  Feed: undefined;
  FeedWrite: undefined;
  FeedDetail: undefined;
  GalleryDetail: undefined;
  ProfileSettings: undefined;
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
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="FeedWrite" component={FeedWrite} />
        <Stack.Screen name="FeedDetail" component={FeedDetail} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="GalleryDetail" component={GalleryDetail} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
