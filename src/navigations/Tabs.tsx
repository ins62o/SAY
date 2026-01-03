/* Library */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

/* Components */
import Home from "../screen/Home";
import Chat from "../screen/Chat";
import Options from "../screen/Options";

/* Styles */
import { COLORS } from "../common/colors";
import Login from "../screen/Login";

const iconMap = {
  Home: "home",
  Chat: "chatbox-ellipses",
  Options: "ellipsis-horizontal",
} as const;

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <>
      <StatusBar style="dark" />
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name={iconMap[route.name as keyof typeof iconMap]}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: COLORS.brandPrimary,
          tabBarInactiveTintColor: COLORS.textSecondary,
          headerShown: false,
        })}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: "홈" }}
        />

        <BottomTab.Screen
          name="Chat"
          component={Chat}
          options={{ tabBarLabel: "수다" }}
        />

        <BottomTab.Screen
          name="Options"
          component={Options}
          options={{ tabBarLabel: "더보기" }}
        />
      </BottomTab.Navigator>
    </>
  );
}
