/* React & React Native */
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

/* Components */
import { COLORS } from "../../common/colors";
import { T16, T18, T20 } from "../Typography";
import Profile from "../Profile";
import Button from "../Button";

/* Library */
import { Ionicons } from "@expo/vector-icons";
import { Dayjs } from "dayjs";

/* Assets */
import CalendarIcon from "../../../assets/icons/calendar.png";

type FormType = {
  content: string;
  setContent: (text: string) => void;
  date: Dayjs;
  onOpenCalendar: () => void;
  onOpenCharacter: () => void;
  onClose: () => void;
};

function FormStep({
  content,
  setContent,
  date,
  onOpenCalendar,
  onOpenCharacter,
  onClose,
}: FormType) {
  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <T20>할일 작성</T20>
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={24} />
        </Pressable>
      </View>

      {/* 제목 */}
      <View style={styles.titleBox}>
        <T18>제목</T18>
      </View>

      <TextInput
        style={styles.inputBox}
        onChangeText={setContent}
        placeholder="할 일을 입력하세요"
        cursorColor={COLORS.brandPrimary}
        selectionColor={COLORS.brandPrimary}
        returnKeyType="done"
      />

      <View style={{ marginBottom: 20 }} />

      {/* 날짜 */}
      <View style={styles.titleBox}>
        <T18>날짜</T18>
      </View>

      <TouchableOpacity style={styles.dateBox} onPress={onOpenCalendar}>
        <T16>{date.format("YYYY-MM-DD")}</T16>
        <Image source={CalendarIcon} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>

      <View style={{ marginBottom: 20 }} />

      {/* 참여 인원 */}
      <View style={styles.peopleBox}>
        <View>
          <T18>참여 인원 (3)</T18>
        </View>
        <TouchableOpacity onPress={onOpenCharacter}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        {[1, 2, 3].map((_, i) => (
          <View key={i} style={{ marginLeft: i === 0 ? 0 : -15 }}>
            <Profile image="two" size={40} />
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Button text="등록하기" size={18} onPress={onClose} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    paddingVertical: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  titleBox: {
    marginBottom: 8,
    paddingLeft: 5,
  },

  inputBox: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    fontFamily: "memo",
  },

  dateBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    borderColor: COLORS.white,
    fontFamily: "memo",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  peopleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingLeft: 5,
  },

  footer: {
    marginTop: "auto",
  },

  weekRow: {
    flexDirection: "row",
  },

  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  dayCell: {
    width: `${100 / 7}%`,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedCell: {
    backgroundColor: COLORS.brandPrimary,
    borderRadius: 20,
  },

  item: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  closeButton: {
    position: "absolute",
    right: 0,
  },
});

export default FormStep;
