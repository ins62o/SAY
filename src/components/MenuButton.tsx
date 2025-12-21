/* React & React Native */
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

/* Styles */
import { CommonStyles } from "../common/container";
import { Color } from "../common/colors";
import { T16 } from "./Typography";

const iconMap = {
  album: require("../../assets/icons/album.png"),
  promise: require("../../assets/icons/promise.png"),
  story: require("../../assets/icons/story.png"),
} as const;

type MenuType = {
  name: string;
  icon: keyof typeof iconMap;
  onPress: () => void;
};

export default function MenuButton({ name, icon, onPress }: MenuType) {
  return (
    <TouchableOpacity
      style={[styles.tabButton, CommonStyles.shadow]}
      onPress={onPress}
    >
      <View style={styles.iconBox}>
        <Image
          source={iconMap[icon as keyof typeof iconMap]}
          style={styles.icon}
        />
      </View>
      <T16 style={{ marginLeft: 10 }}>{name}</T16>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    width: "30%",
    height: 50,
    backgroundColor: Color.Main300,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    padding: 5,
  },

  iconBox: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 50,
    height: 50,
  },
});
