/* React & React Native */
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";

/* Assets */
import Plus from "../../../assets/icons/plus2.png";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

/* Components */
import { T16, T18, T22 } from "../../components/common/Typography";
import { COLORS } from "../../common/colors";
import Header from "../../components/common/Header";
import FolderModal from "../../components/modal/FolderModal";
import GalleryBottomModal from "../../components/modal/GalleryBottomModal";

const { width } = Dimensions.get("window");
const CARD_GAP = 15;
const CARD_WIDTH = (width - 15 * 2 - CARD_GAP * 2) / 3;

/* Mock Data */
const DATA = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i),
  title: `사진 ${i + 1}`,
  date: "2021. 3. 13 · 13:38",
  image: require("../../../assets/abc.jpg"),
}));

export default function GalleryDetail() {
  const [modalVisible, setModalVisible] = useState(false);
  const [folderModal, setFolderModal] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const onFolder = () => {
    setModalVisible(false);
    setFolderModal(true);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.cardWrapper}>
      <Pressable style={styles.card}>
        <Image source={item.image} style={styles.thumbnail} />
        <T18 style={styles.title} numberOfLines={1}>
          {item.title}
        </T18>
        <T16 style={styles.date}>{item.date}</T16>
      </Pressable>

      <TouchableOpacity style={styles.moreBtn}>
        <Ionicons
          name="ellipsis-horizontal"
          size={14}
          color={COLORS.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack />

      <View style={styles.titleRow}>
        <T22>가족 사진</T22>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Plus Button */}
      <TouchableOpacity style={styles.plusBtn} onPress={openModal}>
        <Image source={Plus} style={styles.plusBtnSize} />
      </TouchableOpacity>

      {/* 바텀 모달 */}
      <GalleryBottomModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        onFolder={onFolder}
      />

      <FolderModal
        visible={folderModal}
        onClose={() => setFolderModal(false)}
        modalHeight={240}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  list: {
    padding: 15,
    paddingBottom: 50,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 30,
  },

  cardWrapper: {
    width: CARD_WIDTH,
    alignItems: "center",
  },

  card: {
    width: "100%",
    alignItems: "center",
  },

  thumbnail: {
    width: "100%",
    height: CARD_WIDTH,
    borderRadius: 8,
  },

  title: {
    marginTop: 6,
    textAlign: "center",
  },

  date: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  moreBtn: {
    marginTop: 6,
    padding: 6,
    borderRadius: 16,
    backgroundColor: COLORS.textThird,
  },

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

  plusBtnSize: {
    width: 38,
    height: 38,
  },

  modalActionWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
});
