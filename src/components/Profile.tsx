/* React & React Native */
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

/* Styles */
import { COLORS } from "../common/colors";

/* Image */
import invite from "../../assets/icons/invite.png";
import one from "../../assets/characters/one.png";
import two from "../../assets/characters/two.png";
import three from "../../assets/characters/three.png";
import plus from "../../assets/icons/plus.png";

type ProfileImageKey = keyof typeof profileImages;

type ProfileType = {
  image: ProfileImageKey;
  onPress?: () => void;
};

const profileImages = {
  invite,
  one,
  two,
  three,
  plus,
};

export default function Profile({ image, onPress }: ProfileType) {
  return (
    <TouchableOpacity style={styles.ProfileOutline} onPress={onPress}>
      <Image source={profileImages[image]} style={styles.ProfileImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ProfileOutline: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.surfaceWarm,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  ProfileImage: {
    width: 48,
    height: 48,
  },
});
