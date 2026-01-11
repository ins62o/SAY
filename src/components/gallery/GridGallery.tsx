/* React & React Native */
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

/* Assets */
import { Entypo } from "@expo/vector-icons";

/* Components */
import { T16, T18 } from "../common/Typography";
import { COLORS } from "../../common/colors";
import { CommonStyles } from "../../common/container";

const albums = [
  {
    id: "1",
    title: "가족사진",
    count: 126,
    image: require("../../../assets/abc.jpg"),
  },
  {
    id: "2",
    title: "여행",
    count: 42,
    image: require("../../../assets/e.jpg"),
  },
  {
    id: "3",
    title: "반려동물",
    count: 87,
    image: require("../../../assets/f.jpg"),
  },
  {
    id: "4",
    title: "스크린샷",
    count: 310,
    image: require("../../../assets/g.jpg"),
  },
];

type GalleryType = {
  onPress: () => void;
};

export default function GridGallery({ onPress }: GalleryType) {
  return (
    <View style={styles.grid}>
      {albums.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.galleryItem}
          activeOpacity={0.6}
          onPress={onPress}
        >
          <View>
            <View style={styles.itemHeader}>
              <T18>{item.title}</T18>
              <Entypo
                name="chevron-small-right"
                size={24}
                color={COLORS.textPrimary}
              />
            </View>
            <T16 style={styles.itemCount}>{item.count} 사진</T16>
          </View>

          <View style={styles.previewStack}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                source={item.image}
                style={[styles.stackImage, { left: index * 18, zIndex: index }]}
              />
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  galleryItem: {
    width: "48%",
    height: 160,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: 12,
    padding: 15,
    justifyContent: "space-between",
    ...CommonStyles.shadow,
  },

  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemCount: { marginTop: 5, color: COLORS.textSecondary },

  previewStack: { height: 55, position: "relative", marginTop: 10 },

  stackImage: {
    width: 55,
    height: 55,
    borderRadius: 10,
    position: "absolute",
    borderWidth: 1,
    borderColor: COLORS.white,
  },
});
