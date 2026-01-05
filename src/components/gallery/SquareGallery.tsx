/* React & React Native */
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

/* Components */
import { T16, T22 } from "../common/Typography";
import { COLORS } from "../../common/colors";

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

export default function SquareGallery() {
  return albums.map((item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.squareContainer}
      activeOpacity={0.6}
    >
      <Image source={item.image} style={styles.squareImage} />
      <View style={styles.squareOverlay} />
      <View style={styles.textWrapper}>
        <T22 style={styles.squareTitle}>{item.title}</T22>
        <T16 style={styles.squareSubTitle}>사진 {item.count}</T16>
      </View>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  squareContainer: {
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },

  squareImage: { ...StyleSheet.absoluteFillObject, width: "100%" },

  squareOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  textWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
  squareTitle: { color: COLORS.white },
  squareSubTitle: { color: COLORS.textThird, marginTop: 5 },
});
