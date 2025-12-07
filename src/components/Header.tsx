/* React & React Native */
import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.HeaderContainer}>
      <Image
        source={require("../../assets/Logo.png")}
        style={{ width: 150, height: 52 }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  HeaderContainer: {
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
});
