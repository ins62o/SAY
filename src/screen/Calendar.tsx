/* React & React Native */
import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

/* Components */
import TodoList from "../components/TodoList";
import Header from "../components/Header";
import Button from "../components/Button";
import { T20 } from "../components/Typography";

/* Styles */
import { Color } from "../common/colors";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Calendar() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack={true} />

      {/* 캘린더 */}
      <View style={styles.calendarBox}>
        <View style={styles.calendar}></View>
      </View>

      {/* 할일 리스트 */}
      <View style={styles.todoBox}>
        {/* 제목 */}
        <View style={styles.titleBox}>
          <T20>일정 진행 상황</T20>
          <Ionicons name="help-circle-outline" size={24} />
        </View>

        {/* 콘텐츠 */}
        <ScrollView style={styles.contentBox}>
          <TodoList todo="체리랑 산책가기" isCheck={false} />
          <TodoList todo="체리랑 산책가기" isCheck={false} />
          <TodoList todo="체리랑 산책가기" isCheck={false} />
          <TodoList todo="체리랑 산책가기" isCheck={true} />
          <TodoList todo="개발하기" isCheck={true} />
        </ScrollView>

        {/* 버튼 */}
        <View style={styles.btnBox}>
          <Button text="신규 할일 생성" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Main200,
  },

  todoBox: {
    flex: 1,
    backgroundColor: Color.Main100,
    padding: 15,
    position: "relative",
  },

  calendarBox: {
    height: 180,
    padding: 15,
  },

  calendar: {
    borderRadius: 10,
    backgroundColor: "#fff",
    height: "90%",
    width: "100%",
  },

  titleBox: {
    paddingHorizontal: 10,
    marginVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  contentBox: {
    maxHeight: 400,
    paddingBottom: 10,
  },

  btnBox: {
    height: 70,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
