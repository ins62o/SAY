/* React & React Native */
import { View, Image, StyleSheet } from "react-native";
import React from "react";

/* Components */
import { T18 } from "../common/Typography";

/* Assets */
import noAlbum from "../../../assets/etc/noAlbum.png";

export default function NoneGallery() {
  return (
    <View style={styles.container}>
      <Image source={noAlbum} style={styles.noAlbum} />
      <T18 style={{ marginTop: 10 }}>첫 추억을 기다리고 있어요</T18>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingBottom: 100,
  },

  noAlbum: {
    width: 300,
    height: 150,
  },
});
