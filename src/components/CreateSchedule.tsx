/* React & React Native */
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";

/* Components */
import { COLORS } from "../common/colors";
import { T18 } from "./Typography";
import Profile from "./Profile";
import { Dayjs } from "dayjs";

type CreateScheduleType = {
  onPressCalendar: () => void;
  onPressCharacter: () => void;
  selectedDate: Dayjs;
  onSelectDate: (date: Dayjs) => void; // 구조 통일용 (여기선 직접 사용 안 함)
};

export default function CreateSchedule({
  onPressCalendar,
  onPressCharacter,
  selectedDate,
}: CreateScheduleType) {
  return (
    <View style={styles.container}>
      {/* ===== 할일 내용 ===== */}
      <View style={styles.titleBox}>
        <T18>할일 내용</T18>
      </View>

      <TextInput
        style={styles.inputBox}
        cursorColor={COLORS.brandPrimary}
        selectionColor={COLORS.brandPrimary}
        keyboardType="default"
        placeholder="할 일을 입력하세요"
        returnKeyType="done"
      />

      <View style={{ marginBottom: 30 }} />

      <View style={styles.row}>
        {/* ===== 날짜 ===== */}
        <View style={styles.column}>
          <View style={styles.titleBox}>
            <T18>날짜</T18>
          </View>

          <View style={styles.dateBox}>
            {/* 🔥 선택된 날짜 표시 */}
            <T18>{selectedDate.format("YYYY-MM-DD")}</T18>

            <TouchableOpacity onPress={onPressCalendar}>
              <Image
                source={require("../../assets/icons/calendar.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ===== 참여 인원 ===== */}
        <View style={styles.column}>
          <View style={styles.peopleBox}>
            <T18>참여 인원 (3)</T18>
            <TouchableOpacity onPress={onPressCharacter}>
              <T18 style={{ color: COLORS.brandAccent }}>편집</T18>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <View key={index} style={{ marginLeft: index === 0 ? 0 : -20 }}>
                <Profile image="two" />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

/* ================= Styles ================= */

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 15,
  },

  titleBox: {
    flexDirection: "row",
    marginBottom: 10,
    paddingLeft: 5,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    fontFamily: "memo",
  },

  row: {
    flex: 0.2,
    flexDirection: "row",
  },

  column: {
    flex: 0.5,
  },

  dateBox: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    width: "90%",
    height: 48,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  peopleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
