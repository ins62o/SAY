/* React Native & React */
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

/* Components */
import { T16, T18, T20, TB16 } from "./Typography";

/* Styles */
import { color } from "../common/colors";
import { CommonStyles } from "../common/container";

type ButtonType = {
  text: string;
  style?: any;
  size?: number;
};

export default function Button({ text, style, size }: ButtonType) {
  return (
    <TouchableOpacity style={[styles.btn, style]}>
      {size === 16 && <T16>{text}</T16>}
      {size === 18 && <T18>{text}</T18>}
      {size === 20 && <T20>{text}</T20>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 48,
    padding: 10,
    borderWidth: 1,
    borderColor: color.main,
    borderRadius: 10,
    backgroundColor: color.main,
    justifyContent: "center",
    alignItems: "center",
    ...CommonStyles.shadow,
  },
});
