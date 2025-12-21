/* React & React Native  */
import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

/* Components */
import { TB18 } from "./Typography";

type TodoType = {
  todo: string;
  isCheck: boolean;
};

const IconState = {
  oncheck: require("../../assets/characters/on-check.png"),
  offcheck: require("../../assets/characters/off-check.png"),
};

export default function TodoList({ todo, isCheck }: TodoType) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconBox}>
        <Image
          source={IconState[isCheck ? "oncheck" : "offcheck"]}
          style={styles.icon}
        />
      </View>

      <TB18>{todo}</TB18>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    justifyContent: "center",
    marginRight: 5,
  },

  icon: {
    height: 35,
    width: 35,
  },
});
