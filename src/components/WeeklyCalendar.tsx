/* React & React Native*/
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

/* Components */
import { COLORS } from "../common/colors";
import { T18, T20 } from "./Typography";

/* Library */
import dayjs, { Dayjs } from "dayjs";

type WeeklyCalendarProps = {
  onPressCalendar: () => void;
  selectedDate: Dayjs;
  onSelectDate: (date: Dayjs) => void;
};

const WEEK_LABELS = ["월", "화", "수", "목", "금", "토", "일"];

export default function WeeklyCalendar({
  onPressCalendar,
  onSelectDate,
  selectedDate,
}: WeeklyCalendarProps) {
  const today = dayjs();

  /**  기준 날짜는 선택된 날짜 */
  const baseDate = selectedDate;

  /** ===== 선택된 날짜 기준 주의 월요일 ===== */
  const dayOfWeek = baseDate.day();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = baseDate.add(mondayOffset, "day");

  /** ===== 월 ~ 일 ===== */
  const weekDays = Array.from({ length: 7 }).map((_, i) =>
    monday.add(i, "day")
  );

  return (
    <View style={styles.calendarBox}>
      {/* 상단 타이틀 */}
      <View style={styles.todayTitle}>
        <T20>
          {selectedDate.isSame(today, "day")
            ? `오늘, ${selectedDate.format("YYYY년 MM월 DD일")}`
            : selectedDate.format("YYYY년 MM월 DD일")}
        </T20>

        <TouchableOpacity onPress={onPressCalendar}>
          <Image
            source={require("../../assets/icons/calendar.png")}
            style={styles.calendarIcon}
          />
        </TouchableOpacity>
      </View>

      {/* 주간 캘린더 */}
      <View style={styles.calendarRow}>
        {weekDays.map((day, index) => {
          const isToday = day.isSame(today, "day");
          const isSelected = day.isSame(selectedDate, "day");
          const isSaturday = index === 5;
          const isSunday = index === 6;

          return (
            <View key={day.format("YYYY-MM-DD")} style={styles.dayBox}>
              <TouchableOpacity
                onPress={() => onSelectDate(day)}
                style={[
                  styles.dayTouchable,
                  isSelected && styles.selectedContainer,
                ]}
              >
                <T18
                  style={[
                    styles.weekText,
                    isSaturday && styles.saturday,
                    isSunday && styles.sunday,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {WEEK_LABELS[index]}
                </T18>

                <T18
                  style={[
                    styles.dateText,
                    isToday && styles.todayDot,
                    isSelected && styles.selectedDateCircle,
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
  );
}

const styles = StyleSheet.create({
  calendarBox: {
    height: 150,
    justifyContent: "center",
  },

  todayTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  calendarRow: {
    height: 80,
    flexDirection: "row",
  },

  dayBox: {
    width: `${100 / 7}%`,
    justifyContent: "center",
    alignItems: "center",
  },

  dayTouchable: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 20,
    alignItems: "center",
  },

  selectedContainer: {
    backgroundColor: COLORS.brandPrimary,
  },

  weekText: {
    fontSize: 14,
  },

  dateText: {
    marginTop: 6,
    padding: 6,
    borderRadius: 50,
  },

  selectedDateCircle: {
    backgroundColor: COLORS.white,
  },

  selectedText: {
    color: COLORS.textPrimary,
  },

  todayDot: {
    borderWidth: 1,
    borderColor: COLORS.brandPrimary,
  },

  saturday: {
    color: COLORS.success,
  },

  sunday: {
    color: COLORS.fail,
  },

  calendarIcon: {
    width: 40,
    height: 40,
  },
});
