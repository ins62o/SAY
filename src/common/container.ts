/* React Native */
import { StyleSheet } from "react-native";

/* Styles */
import { color } from "./colors";

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.back,
  },

  FJA: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
});
