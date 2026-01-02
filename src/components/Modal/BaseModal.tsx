/* React & React Native */
import React, { ReactNode } from "react";
import { Modal, StyleSheet, View, Pressable } from "react-native";

/* Styles */
import { COLORS } from "../../common/colors";

type BaseModalProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: number;
  height?: number;
  innerWidth?: number;
  innerHeight?: number;
  innerPadding?: number;
};

export default function BaseModal({
  visible,
  onClose,
  children,
  width = 300,
  height = 300,
  innerWidth,
  innerHeight,
  innerPadding = 15,
}: BaseModalProps) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={[styles.envelopeWrapper, { width, height }]}>
          <View
            style={[
              styles.innerWrapper,
              {
                width: innerWidth ?? width - 30,
                height: innerHeight ?? height - 30,
                padding: innerPadding,
              },
            ]}
          >
            {children}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surfaceWarm,
    borderRadius: 10,
  },

  innerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surfaceSoft,
    borderRadius: 10,
  },
});
