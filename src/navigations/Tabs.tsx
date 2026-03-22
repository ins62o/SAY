import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screen/Home";
import Options from "../screen/Options";
import Chat from "../screen/Chat/Chat";
import { COLORS } from "../common/colors";

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
          options={{ tabBarLabel: "\uD648" }}
        />

        <BottomTab.Screen
          name="Chat"
          component={Chat}
          options={{ tabBarLabel: "\uC218\uB2E4" }}
        />

        <BottomTab.Screen
          name="Options"
          component={Options}
          options={{ tabBarLabel: "\uB354\uBCF4\uAE30" }}
        />
      </BottomTab.Navigator>
    </>
  );
}
