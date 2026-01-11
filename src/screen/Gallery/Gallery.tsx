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
import FolderModal from "../../components/modal/FolderModal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import GalleryBottomModal from "../../components/modal/GalleryBottomModal";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function Gallery() {
  const [viewMode, setViewMode] = useState<"grid" | "square">("grid");
  const [modalVisible, setModalVisible] = useState(false);
  const [folderModal, setFolderModal] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const { navigate } = useNavigation<Navigation>();

  const goToAlbum = () => navigate("GalleryDetail");

  const onFolder = () => {
    setModalVisible(false);
    setFolderModal(true);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack />

      {/* 앨범이 없을 때 */}
      {/* <NoneGallery/> */}

      <ScrollView
        contentContainerStyle={styles.galleryContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* 사진첩 헤더 */}
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

        {/* 2줄 그리드 모드 */}
        {viewMode === "grid" && <GridGallery onPress={goToAlbum} />}

        {/* 1줄 모드 */}
        {viewMode === "square" && <SquareGallery />}
      </ScrollView>

      {/* 하단 더하기 버튼 */}
      <TouchableOpacity style={styles.plusBtn} onPress={openModal}>
        <Image source={Plus} style={styles.plusBtnSize} />
      </TouchableOpacity>

      {/* 하단 바텀 모달 */}
      <GalleryBottomModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        onFolder={onFolder}
      />

      {/* 폴더 생성 모달 */}
      <FolderModal
        visible={folderModal}
        onClose={() => setFolderModal(false)}
        modalHeight={240}
      />
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
});
