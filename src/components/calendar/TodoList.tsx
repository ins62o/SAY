/* React & React Native */
import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

/* Components */
import { T18 } from "../common/Typography";
import { COLORS } from "../../common/colors";

/* Image */
import onCheck from "../../../assets/icons/on-check.png";
import offCheck from "../../../assets/icons/off-check.png";

/* Types */
type TodoType = {
  todo: string;
  isCheck: boolean;
};

export default function TodoList({ todo, isCheck }: TodoType) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={isCheck ? onCheck : offCheck} style={styles.icon} />

      <T18 style={[styles.text, isCheck && styles.checkedText]}>{todo}</T18>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  /* ===== Layout ===== */
  container: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  /* ===== Icon ===== */
  icon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },

  /* ===== Text ===== */
  text: {
    flex: 1,
  },

  checkedText: {
    color: COLORS.brandAccent,
  },
});
