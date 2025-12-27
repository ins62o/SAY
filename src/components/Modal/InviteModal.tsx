/* React & React Native */
import React from "react";
import { Modal, StyleSheet, View, Pressable } from "react-native";

/* Styles */
import { COLORS } from "../../common/colors";
import { T16, T20, T22 } from "../Typography";

/* Components */
import Profile from "../Profile";
import Button from "../Button";

type InviteType = {
  visible: boolean;
  onClose: () => void;
};

export default function InviteModal({ visible, onClose }: InviteType) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={styles.envelopeWrapper}>
          <View style={styles.innerWrapper}>
            <View style={styles.inviteTitle}>
              <T22>초대장</T22>
            </View>
            <View style={styles.inviteContainer}>
              <Profile image={"one"} />
              <Profile image={"two"} />
              <Profile image={"three"} />
              <Profile image={"plus"} />
            </View>

            <View style={{ marginBottom: 20 }}>
              <T16>1명의 구성원을 더 초대할 수 있어요 !</T16>
            </View>

            <Button text="초대 링크 보내기" style={{ height: 42 }} size={16} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

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

  envelopeWrapper: {
    width: 300,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surfaceWarm,
    borderRadius: 10,
  },

  innerWrapper: {
    padding: 15,
    width: 270,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surfaceSoft,
    borderRadius: 10,
  },

  inviteContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },

  inviteTitle: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  inviteBtn: {},
});
