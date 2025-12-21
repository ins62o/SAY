/* React Native & React */
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

/* Components */
import { T18 } from "./Typography";

/* Styles */
import { Color } from "../common/colors";

type ButtonType = {
  text: string;
};

export default function Button({ text }: ButtonType) {
  return (
    <TouchableOpacity style={styles.btn}>
      <T18 style={{ color: Color.colorBlack }}>{text}</T18>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 48,
    width: "90%",
    backgroundColor: Color.Main300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
