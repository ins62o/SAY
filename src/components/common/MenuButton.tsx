/* React & React Native */
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

/* Styles */
import { CommonStyles } from "../../common/container";
import { COLORS } from "../../common/colors";
import { T16 } from "../common/Typography";

const iconMap = {
  album: require("../../../assets/icons/album.png"),
  promise: require("../../../assets/icons/promise.png"),
  story: require("../../../assets/icons/story.png"),
} as const;

type MenuType = {
  name: string;
  icon: keyof typeof iconMap;
  onPress: () => void;
};

export default function MenuButton({ name, icon, onPress }: MenuType) {
  const iconStyle = [
    styles.icon,
    icon === "album" && styles.albumIcon,
    icon === "story" && styles.storyIcon,
    icon === "promise" && styles.promiseIcon,
  ];

  return (
    <TouchableOpacity
      style={[styles.tabButton, CommonStyles.shadow]}
      onPress={onPress}
    >
      <View style={styles.iconBox}>
        <Image
          source={iconMap[icon as keyof typeof iconMap]}
          style={iconStyle}
          resizeMode="contain"
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
    backgroundColor: COLORS.brandPrimary,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    padding: 5,
  },

  iconBox: {
    backgroundColor: "#fff",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  icon: {
    width: 26,
    height: 26,
  },

  albumIcon: {
    width: 22,
    height: 22,
  },

  storyIcon: {
    width: 28,
    height: 28,
  },

  promiseIcon: {
    width: 27,
    height: 27,
  },
});
