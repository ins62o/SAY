/* React & React Native */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import dayjs, { Dayjs } from "dayjs";

/* Components */
import Header from "../components/Header";
import Button from "../components/Button";
import WeeklyCalendar from "../components/WeeklyCalendar";
import Schedule from "../components/Schedule";
import CalendarModal from "../components/Modal/CalendarModal";
import ChoiceCharacterModal from "../components/Modal/ChoiceCharacterModal";

/* Styles */
import { COLORS } from "../common/colors";
import CreateTodoModal from "../components/Modal/CreateTodoModal";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const [calendarModal, setCalendarModal] = useState(false);
  const [characterModal, setCharacterModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack />

      {/* ===== 주간 캘린더 ===== */}
      <WeeklyCalendar
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        onPressCalendar={() => setCalendarModal(true)}
      />

      {/* ===== 일정 리스트 ===== */}
      <View style={styles.content}>
        <Schedule />
      </View>

      {/* ===== 하단 버튼 ===== */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomInner}>
          <Button
            text="새로운 할일 생성"
            size={18}
            onPress={() => setCreateModal(true)}
          />
        </View>
      </View>

      {/* ===== 월간 캘린더 ===== */}
      <CalendarModal
        visible={calendarModal}
        onClose={() => setCalendarModal(false)}
        selectedDate={selectedDate}
        onSelectDate={(date: Dayjs) => {
          setSelectedDate(date);
          setCalendarModal(false);
        }}
      />

      {/* ===== 할 일 생성 모달 ===== */}
      <CreateTodoModal
        visible={createModal}
        initialDate={selectedDate}
        onClose={() => setCreateModal(false)}
      />

      {/* ===== 참여 인원 선택 ===== */}
      <ChoiceCharacterModal
        visible={characterModal}
        onClose={() => setCharacterModal(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
    backgroundColor: COLORS.surfaceSoft,
  },

  bottomBar: {
    width: "100%",
    backgroundColor: COLORS.background,
    paddingBottom: 30,
  },

  bottomInner: {
    padding: 15,
  },
});
