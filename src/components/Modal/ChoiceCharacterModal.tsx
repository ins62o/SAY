/* React & React Native */
import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

/* Components */
import Profile from "../Profile";
import Button from "../Button";
import { COLORS } from "../../common/colors";
import { T18, T20 } from "../Typography";

type InviteType = {
  visible: boolean;
  onClose: () => void;
};

export default function ChoiceCharacterModal({ visible, onClose }: InviteType) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={styles.modal}>
          {/* Header */}
          <View style={styles.header}>
            <T20>구성원 목록</T20>
          </View>

          {/* List */}
          <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
            {Array.from({ length: 7 }).map((_, index) => (
              <TouchableOpacity key={index} style={styles.item}>
                <View style={styles.profile}>
                  <Profile image="one" />
                  <T18 style={styles.name}>정인성</T18>
                </View>

                <Image
                  source={require("../../../assets/characters/on-check.png")}
                  style={styles.check}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <Button text="확인" size={18} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  /* Overlay */
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },

  /* Modal */
  modal: {
    width: "80%",
    maxHeight: 420,
    backgroundColor: COLORS.surfaceSoft,
    borderRadius: 16,
    overflow: "hidden",
  },

  /* Header */
  header: {
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: COLORS.surfaceSoft,
    borderBottomWidth: 2,
    borderColor: COLORS.background,
  },

  /* List */
  list: {
    flexGrow: 0,
  },

  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    marginLeft: 10,
  },

  check: {
    width: 36,
    height: 36,
  },

  footer: {
    padding: 14,
    backgroundColor: COLORS.background,
  },
});
