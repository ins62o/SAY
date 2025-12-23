/* React & React Native */
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

/* Components */
import TodoList from "../components/TodoList";
import Header from "../components/Header";
import Button from "../components/Button";
import { T18, T20, TB20 } from "../components/Typography";

/* Styles */
import { color } from "../common/colors";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import dayjs from "dayjs";

export default function Calendar() {
  const today = dayjs();

  const WEEK_LABELS = ["월", "화", "수", "목", "금", "토", "일"];

  /** ===== 이번 주 월요일 구하기 ===== */
  const dayOfWeek = today.day(); // 0(일) ~ 6(토)
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = today.add(mondayOffset, "day");

  /** ===== 월 ~ 일 (7일) 생성 ===== */
  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    monday.add(i, "day")
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack={true} />
      {/* 캘린더 박스 */}
      <View style={styles.calendarBox}>
        <View style={styles.todayTitle}>
          <TB20 style={{ color: color.main2 }}>
            오늘, {today.format("YYYY년 MM월 DD일")}
          </TB20>
        </View>

        <View style={styles.calendar}>
          {weekDays.map((day, index) => {
            const isToday = day.isSame(today, "day");
            const isSaturday = index === 5;
            const isSunday = index === 6;

            return (
              <View key={day.format("YYYY-MM-DD")} style={styles.dayBox}>
                <TouchableOpacity
                  style={[styles.day, isToday && styles.todayDay]}
                >
                  {/* 요일 */}
                  <T18
                    style={[
                      styles.weekText,
                      isSaturday && styles.saturday,
                      isSunday && styles.sunday,
                    ]}
                  >
                    {WEEK_LABELS[index]}
                  </T18>

                  {/* 날짜 */}
                  <T18
                    style={[
                      styles.dateText,
                      isSaturday && styles.saturday,
                      isSunday && styles.sunday,
                      isToday && styles.todayDate,
                    ]}
                  >
                    {day.format("DD")}
                  </T18>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: color.sub2,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: color.back,
          }}
        >
          <View style={{ padding: 15 }}>
            <Button text="신규 할일 생성" size={18} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.back,
  },

  calendarBox: {
    height: 150,
    justifyContent: "center",
  },

  todayTitle: {
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  calendar: {
    height: 80,
    flexDirection: "row",
  },

  dayBox: {
    width: `${100 / 7}%`,
    justifyContent: "center",
    alignItems: "center",
  },

  day: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  weekText: {
    fontSize: 14,
  },

  dateText: {
    marginTop: 6,
    padding: 6,
    borderRadius: 50,
  },

  todayDay: {
    backgroundColor: color.main,
  },

  todayDate: {
    backgroundColor: "#fff",
  },

  saturday: {
    color: color.blue,
  },

  sunday: {
    color: color.red,
  },
});
