/* React & React Native */
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

/* Assets */
import Plus from "../../../assets/icons/plus2.png";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

/* Components */
import { T22 } from "../../components/common/Typography";
import { COLORS } from "../../common/colors";
import Header from "../../components/common/Header";
import GridGallery from "../../components/gallery/GridGallery";
import SquareGallery from "../../components/gallery/SquareGallery";
import MenuIcon from "../../components/gallery/CircleIcon";
import BottomModal from "../../components/modal/BottomModal";

export default function Gallery() {
  const [viewMode, setViewMode] = useState<"grid" | "square">("grid");
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack />

      <ScrollView
        contentContainerStyle={styles.galleryContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <View style={styles.titleRow}>
          <T22>사진첩</T22>
          <View style={styles.iconRow}>
            <Ionicons
              name={viewMode === "grid" ? "grid" : "grid-outline"}
              size={24}
              color={COLORS.textPrimary}
              onPress={() => setViewMode("grid")}
            />
            <Ionicons
              name={viewMode === "square" ? "square" : "square-outline"}
              size={24}
              color={COLORS.textPrimary}
              style={styles.iconSpacing}
              onPress={() => setViewMode("square")}
            />
          </View>
        </View>

        <View style={styles.spacing} />

        {/* 2줄 그리드 모드*/}
        {viewMode === "grid" && <GridGallery />}

        {/* 1줄 모드 */}
        {viewMode === "square" && <SquareGallery />}
      </ScrollView>

      {/* 하단 더하기 버튼 */}
      <TouchableOpacity style={styles.plusBtn} onPress={openModal}>
        <Image source={Plus} style={styles.plusBtnSize} />
      </TouchableOpacity>

      {/* Bottom Modal */}
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
          />
        </View>
      </BottomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  galleryContainer: { padding: 15 },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconRow: { flexDirection: "row", alignItems: "center" },
  iconSpacing: { marginLeft: 8 },
  spacing: { height: 20 },

  plusBtn: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.brandPrimary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  plusBtnSize: { width: 38, height: 38 },

  modalActionWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
