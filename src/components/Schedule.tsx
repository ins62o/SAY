/* React & React Native */
import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

/* Components */
import TodoList from "./TodoList";
import { COLORS } from "../common/colors";
import { T20 } from "./Typography";

/* Library */
import { Ionicons } from "@expo/vector-icons";

export default function Schedule() {
  return (
    <View style={styles.container}>
      {/* ===== 타이틀 ===== */}
      <View style={styles.titleBox}>
        <T20>일정 진행 상태</T20>
        <TouchableOpacity style={styles.helpIcon}>
          <Ionicons
            name="help-circle-outline"
            size={24}
            color={COLORS.textPrimary}
          />
        </TouchableOpacity>
      </View>

      {/* ===== 할일 목록들 ===== */}
      <TodoList todo="체리 산책시키기" isCheck={true} />
      <TodoList todo="코딩 테스트 1회 풀기" isCheck={false} />
      <TodoList todo="운동 갔다오기" isCheck={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    position: "relative",
  },

  titleBox: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
  },

  helpIcon: {
    position: "absolute",
    top: -2,
    right: 0,
  },
});
