/* React & React Native */
import React, { useEffect, useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

/* Components */
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../common/colors";
import { T18 } from "../Typography";
import Button from "../Button";

/* Library */
import dayjs, { Dayjs } from "dayjs";

type CalendarType = {
  visible: boolean;
  onClose: () => void;
  selectedDate: Dayjs;
  onSelectDate: (date: Dayjs) => void;
};

const WEEK_LABELS = ["일", "월", "화", "수", "목", "금", "토"];

export default function CalendarModal({
  visible,
  onClose,
  selectedDate,
  onSelectDate,
}: CalendarType) {
  const today = dayjs();

  const [currentMonth, setCurrentMonth] = useState<Dayjs>(
    selectedDate.startOf("month")
  );
  const [localSelectedDate, setLocalSelectedDate] =
    useState<Dayjs>(selectedDate);

  /* 🔥 핵심: 부모 상태와 동기화 */
  useEffect(() => {
    if (!visible) return;

    setCurrentMonth(selectedDate.startOf("month"));
    setLocalSelectedDate(selectedDate);
  }, [visible, selectedDate]);

  /** ===== 캘린더 데이터 ===== */
  const calendarDays = useMemo(() => {
    const start = currentMonth.startOf("month").startOf("week");
    const end = currentMonth.endOf("month").endOf("week");

    const days: Dayjs[] = [];
    let date = start;

    while (date.isBefore(end) || date.isSame(end, "day")) {
      days.push(date);
      date = date.add(1, "day");
    }

    return days;
  }, [currentMonth]);

  const handleConfirm = () => {
    onSelectDate(localSelectedDate);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={styles.calendarBox}>
          {/* ===== Header ===== */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() =>
                setCurrentMonth((prev) => prev.subtract(1, "month"))
              }
            >
              <Ionicons name="chevron-back" size={24} />
            </TouchableOpacity>

            <T18>{currentMonth.format("YYYY년 MM월")}</T18>

            <TouchableOpacity
              onPress={() => setCurrentMonth((prev) => prev.add(1, "month"))}
            >
              <Ionicons name="chevron-forward" size={24} />
            </TouchableOpacity>
          </View>

          {/* ===== Week ===== */}
          <View style={styles.weekRow}>
            {WEEK_LABELS.map((day, idx) => (
              <T18
                key={day}
                style={[
                  styles.weekText,
                  idx === 0 && styles.sunday,
                  idx === 6 && styles.saturday,
                ]}
              >
                {day}
              </T18>
            ))}
          </View>

          {/* ===== Calendar ===== */}
          <View style={styles.daysGrid}>
            {calendarDays.map((day) => {
              const isCurrentMonth = day.month() === currentMonth.month();
              const isToday = day.isSame(today, "day");
              const isSelected = day.isSame(localSelectedDate, "day");

              return (
                <TouchableOpacity
                  key={day.format("YYYY-MM-DD")}
                  style={[
                    styles.dayCell,
                    isSelected && styles.selectedCell,
                    isToday && !isSelected && styles.todayCell,
                  ]}
                  disabled={!isCurrentMonth}
                  onPress={() => setLocalSelectedDate(day)}
                >
                  <T18
                    style={[
                      styles.dayText,
                      !isCurrentMonth && styles.outsideMonth,
                      isSelected && styles.selectedText,
                    ]}
                  >
                    {day.date()}
                  </T18>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* ===== Footer ===== */}
          <View style={styles.footer}>
            <Button
              text="확인"
              size={18}
              style={styles.button}
              onPress={handleConfirm}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

/* ================= Styles ================= */

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },

  calendarBox: {
    width: "90%",
    backgroundColor: COLORS.background,
    borderRadius: 12,
    overflow: "hidden",
  },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  weekRow: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 10,
  },

  weekText: {
    width: `${100 / 7}%`,
    textAlign: "center",
  },

  sunday: {
    color: COLORS.fail,
  },

  saturday: {
    color: COLORS.success,
  },

  /* Days */
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },

  dayCell: {
    width: `${100 / 7}%`,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },

  dayText: {
    textAlign: "center",
  },

  outsideMonth: {
    opacity: 0.3,
  },

  todayCell: {
    borderWidth: 1,
    borderColor: COLORS.brandPrimary,
    borderRadius: 20,
  },

  selectedCell: {
    backgroundColor: COLORS.brandPrimary,
    borderRadius: 20,
  },

  selectedText: {
    color: COLORS.textPrimary,
  },

  /* Footer */
  footer: {
    marginTop: "auto",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.surfaceSoft,
  },

  button: {
    width: "100%",
  },
});
