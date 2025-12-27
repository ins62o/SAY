/* React & React Native */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import dayjs, { Dayjs } from "dayjs";

/* Components */
import Header from "../components/Header";
import Button from "../components/Button";
import CalendarModal from "../components/Modal/CalendarModal";
import WeeklyCalendar from "../components/WeeklyCalendar";
import Schedule from "../components/Schedule";
import CreateSchedule from "../components/CreateSchedule";
import ChoiceCharacterModal from "../components/Modal/ChoiceCharacterModal";

/* Styles */
import { COLORS } from "../common/colors";

export default function Calendar() {
  /** ===== 모달 상태 ===== */
  const [isModal, setIsModal] = useState(false);
  const [isCharacterList, setIsCharacterList] = useState(false);

  /** ===== 화면 상태 ===== */
  const [isCreated, setIsCreated] = useState(false);

  /** ===== 날짜 상태 (주간 캘린더 + 메인 캘린더용)  ===== */
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  // 일정 생성 전용
  const [createSelectedDate, setCreateSelectedDate] = useState<Dayjs>(dayjs());

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack />

      {/* ===== 주간 캘린더 ===== */}
      {!isCreated && (
        <WeeklyCalendar
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          onPressCalendar={() => setIsModal(true)}
        />
      )}

      {/* ===== 메인 콘텐츠 ===== */}
      <View style={styles.content}>
        {!isCreated ? (
          <Schedule />
        ) : (
          <CreateSchedule
            onPressCalendar={() => setIsModal(true)}
            onPressCharacter={() => setIsCharacterList(true)}
            selectedDate={createSelectedDate}
            onSelectDate={setCreateSelectedDate}
          />
        )}

        {/* ===== 하단 버튼 ===== */}
        {!isCreated ? (
          <View style={styles.bottomBar}>
            <View style={styles.bottomInner}>
              <Button
                text="새로운 할일 생성"
                size={18}
                onPress={() => {
                  // 생성 시작 시 주간 날짜를 복사
                  setCreateSelectedDate(selectedDate);
                  setIsCreated(true);
                }}
              />
            </View>
          </View>
        ) : (
          <View style={styles.twoBtnbottomBar}>
            <View style={styles.bottomInner}>
              <Button
                text="등록"
                size={18}
                onPress={() => setIsCreated(false)}
              />
              <View style={{ marginBottom: 10 }} />
              <Button
                text="취소"
                size={18}
                onPress={() => setIsCreated(false)}
                style={styles.cancelBtn}
              />
            </View>
          </View>
        )}
      </View>

      {/* ===== 월간 캘린더 모달 ===== */}
      {isModal && (
        <CalendarModal
          visible={isModal}
          onClose={() => setIsModal(false)}
          selectedDate={isCreated ? createSelectedDate : selectedDate}
          onSelectDate={(date: Dayjs) => {
            if (isCreated) {
              setCreateSelectedDate(date);
            } else {
              setSelectedDate(date);
            }
            setIsModal(false);
          }}
        />
      )}

      {/* ===== 캐릭터 선택 모달 ===== */}
      {isCharacterList && (
        <ChoiceCharacterModal
          visible={isCharacterList}
          onClose={() => setIsCharacterList(false)}
        />
      )}
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
    justifyContent: "space-between",
  },

  bottomBar: {
    width: "100%",
    height: 100,
    backgroundColor: COLORS.background,
  },

  twoBtnbottomBar: {
    width: "100%",
    height: 150,
    backgroundColor: COLORS.background,
  },

  bottomInner: {
    padding: 15,
  },

  cancelBtn: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.brandPrimary,
  },
});
