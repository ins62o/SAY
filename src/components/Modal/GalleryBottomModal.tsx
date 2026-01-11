/* React & React Native */
import { View, StyleSheet } from "react-native";
import React from "react";

/* Components */
import BottomModal from "./BottomModal";
import MenuIcon from "../gallery/CircleIcon";

type GalleryType = {
  modalVisible: boolean;
  closeModal: () => void;
  onFolder: () => void;
};

export default function GalleryBottomModal({
  modalVisible,
  closeModal,
  onFolder,
}: GalleryType) {
  return (
    <BottomModal visible={modalVisible} onClose={closeModal}>
      <View style={styles.modalActionWrapper}>
        <MenuIcon
          label="갤러리"
          icon={require("../../../assets/icons/gallery.png")}
          size="medium"
        />
        <MenuIcon
          label="카메라"
          icon={require("../../../assets/icons/camera.png")}
          size="large"
        />
        <MenuIcon
          label="폴더"
          icon={require("../../../assets/icons/file.png")}
          size="medium"
          onPress={onFolder}
        />
      </View>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  modalActionWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
