/* React & React Native */
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

/* Components */
import { COLORS } from "../../common/colors";
import { T16 } from "../common/Typography";

export default function MenuIcon({
  label,
  icon,
  size,
}: {
  label: string;
  icon: any;
  size: "small" | "medium" | "large";
}) {
  const iconStyle =
    size === "large"
      ? styles.iconLarge
      : size === "medium"
      ? styles.iconMedium
      : styles.iconSmall;

  return (
    <View style={styles.modalActionItem}>
      <TouchableOpacity style={styles.modalIconCircle}>
        <Image source={icon} style={iconStyle} />
      </TouchableOpacity>
      <T16>{label}</T16>
    </View>
  );
}

const styles = StyleSheet.create({
  iconSmall: { width: 45, height: 45 },
  iconMedium: { width: 50, height: 50 },
  iconLarge: { width: 70, height: 70 },

  modalActionItem: {
    width: "20%",
    alignItems: "center",
  },

  modalIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
