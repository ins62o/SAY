/* React & React Native */
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useMemo, useState, useEffect } from "react";

/* Library */
import { Dayjs } from "dayjs";
import { Ionicons } from "@expo/vector-icons";

/* Components */
import { COLORS } from "../../common/colors";
import { T18 } from "../Typography";
import Button from "../Button";
import dayjs from "dayjs";

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

type Props = {
  selectedDate: Dayjs;
  onSelectDate: (d: Dayjs) => void;
  onBack: () => void;
};

function CalendarStep({ selectedDate, onSelectDate, onBack }: Props) {
  const today = dayjs();

  const [currentMonth, setCurrentMonth] = useState(
    selectedDate.startOf("month")
  );
  const [localSelectedDate, setLocalSelectedDate] =
    useState<Dayjs>(selectedDate);

  /* selectedDate 변경 시 동기화 */
  useEffect(() => {
    setCurrentMonth(selectedDate.startOf("month"));
    setLocalSelectedDate(selectedDate);
  }, [selectedDate]);

  /** ===== 캘린더 날짜 ===== */
  const days = useMemo(() => {
    const start = currentMonth.startOf("month").startOf("week");
    const end = currentMonth.endOf("month").endOf("week");

    const arr: Dayjs[] = [];
    let d = start;

    while (d.isBefore(end) || d.isSame(end, "day")) {
      arr.push(d);
      d = d.add(1, "day");
    }

    return arr;
  }, [currentMonth]);

  const handleConfirm = () => {
    onSelectDate(localSelectedDate);
  };

  return (
    <View style={styles.wrapper}>
      {/* ===== Header ===== */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setCurrentMonth((p) => p.subtract(1, "month"))}
        >
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>

        <T18>{currentMonth.format("YYYY년 MM월")}</T18>

        <TouchableOpacity
          onPress={() => setCurrentMonth((p) => p.add(1, "month"))}
        >
          <Ionicons name="chevron-forward" size={24} />
        </TouchableOpacity>
      </View>

      {/* ===== Week ===== */}
      <View style={styles.weekRow}>
        {WEEK.map((w, idx) => (
          <T18
            key={w}
            style={[
              styles.weekText,
              idx === 0 && styles.sunday,
              idx === 6 && styles.saturday,
            ]}
          >
            {w}
          </T18>
        ))}
      </View>

      {/* ===== Days ===== */}
      <View style={styles.daysGrid}>
        {days.map((d) => {
          const isCurrentMonth = d.month() === currentMonth.month();
          const isSelected = d.isSame(localSelectedDate, "day");
          const isToday = d.isSame(today, "day");

          return (
            <TouchableOpacity
              key={d.format("YYYY-MM-DD")}
              style={[
                styles.dayCell,
                isSelected && styles.selectedCell,
                isToday && !isSelected && styles.todayCell,
              ]}
              disabled={!isCurrentMonth}
              onPress={() => setLocalSelectedDate(d)}
            >
              <T18
                style={[
                  styles.dayText,
                  !isCurrentMonth && styles.outsideMonth,
                  isSelected && styles.selectedText,
                ]}
              >
                {d.date()}
              </T18>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ===== Footer ===== */}
      <View style={styles.footer}>
        <View style={{ flex: 0.45 }}>
          <Button
            text="이전"
            size={18}
            onPress={onBack}
            style={{
              backgroundColor: COLORS.background,
              borderColor: COLORS.white,
            }}
          />
        </View>

        <View style={{ flex: 0.45 }}>
          <Button text="확인" size={18} onPress={handleConfirm} />
        </View>
      </View>
    </View>
  );
}

export default CalendarStep;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  weekRow: {
    flexDirection: "row",
    marginBottom: 8,
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

  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
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
    opacity: 0.2,
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

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    padding: 15,
  },
});
