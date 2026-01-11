import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import BaseModal from "./BaseModal";
import { T16, T18, T20 } from "../common/Typography";
import { COLORS } from "../../common/colors";
import Button from "../common/Button";

type FolderType = {
  visible: boolean;
  onClose: () => void;
  modalHeight: number;
};

export default function FolderModal({
  visible,
  onClose,
  modalHeight,
}: FolderType) {
  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      width={360}
      height={modalHeight}
      innerPadding={0}
    >
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <T18>새 폴더 만들기</T18>
        </View>

        <View style={{ marginBottom: 30 }} />

        <TextInput
          style={styles.inputBox}
          cursorColor={COLORS.brandPrimary}
          selectionColor={COLORS.brandPrimary}
          keyboardType="default"
          placeholder="폴더명을 입력하세요."
          returnKeyType="done"
        />

        <View style={{ marginBottom: 30 }} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            text="취소"
            style={{
              width: "47%",
              backgroundColor: COLORS.background,
              borderColor: COLORS.background,
            }}
            size={18}
          />
          <Button text="확인" style={{ width: "47%" }} size={18} />
        </View>
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
  },

  titleBox: {
    alignItems: "center",
  },

  inputBox: {
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    fontFamily: "memo",
  },
});
