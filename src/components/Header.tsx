/* React & React Native */
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

/* Library */
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

type HeaderType = {
  isBack: boolean;
};

export default function Header({ isBack = false }: HeaderType) {
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderContainer}>
      {isBack && (
        <TouchableOpacity
          style={{ position: "absolute", left: 15 }}
          onPress={() => navigation.goBack()}
          hitSlop={10}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}

      <Image
        source={require("../../assets/Logo.png")}
        style={{ width: 90, height: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    position: "relative",
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
});
