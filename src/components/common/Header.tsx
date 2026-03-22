/* React & React Native */
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

/* Library */
import { useNavigation } from "@react-navigation/native";

/* Image */
import Logo from "../../../assets/etc/Logo.png";
import goBack from "../../../assets/icons/goBack.png";

type HeaderType = {
  isBack: boolean;
  isText?: boolean;
};

export default function Header({ isBack = false, isText = false }: HeaderType) {
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderContainer}>
      {isBack && (
        <TouchableOpacity
          style={{ position: "absolute", left: 15 }}
          onPress={() => navigation.goBack()}
          hitSlop={10}
        >
          <Image source={goBack} style={{ width: 40, height: 100 }} />
        </TouchableOpacity>
      )}

      <Image source={Logo} style={{ width: 130, height: 50 }} />
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
