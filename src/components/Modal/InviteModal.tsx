/* React & React Native */
import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";

/* Styles */
import { Color } from "../../common/colors";
import { T16, T20 } from "../Typography";

/* Components */
import Profile from "../Profile";

type EnvelopeModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function InviteModal({ visible, onClose }: EnvelopeModalProps) {
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
              <T20>초대장</T20>
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

            <View>
              <TouchableOpacity style={styles.inviteBtn}>
                <T16>초대 링크 보내기</T16>
              </TouchableOpacity>
            </View>
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
    backgroundColor: Color.Main400,
    borderRadius: 10,
  },

  innerWrapper: {
    padding: 15,
    width: 270,
    height: 220,
    alignItems: "center",
    backgroundColor: Color.Main200,
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

  inviteBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Color.Main400,
    borderRadius: 10,
    backgroundColor: Color.Main100,
  },
});
