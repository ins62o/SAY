/* React & React Native */
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

/* Components */
import { COLORS } from "../../common/colors";
import { T18, T20 } from "../common/Typography";
import Profile from "../common/Profile";
import Button from "../common/Button";

/* Assets */
import onCheck from "../../../assets/icons/on-check.png";

function CharacterStep({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <T20>구성원 목록</T20>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.from({ length: 6 }).map((_, i) => (
          <TouchableOpacity key={i} style={styles.item}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Profile image="one" />
              <T18 style={{ marginLeft: 10 }}>정인성</T18>
            </View>
            <Image source={onCheck} style={{ width: 28, height: 28 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>

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
          <Button text="추가" size={18} onPress={onBack} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },

  titleBox: {
    marginBottom: 8,
  },

  inputBox: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },

  dateBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
  },

  peopleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    padding: 15,
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
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CharacterStep;
