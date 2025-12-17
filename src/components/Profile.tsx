/* React & React Native */
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

/* Styles */
import { Color } from "../common/colors";

type ProfileImageKey = keyof typeof profileImages;

type ProfileType = {
  image: ProfileImageKey;
  onPress?: () => void;
};

const profileImages = {
  icon: require("../../assets/icon.png"),
  invite: require("../../assets/icons/invite.png"),
  one: require("../../assets/characters/one.png"),
  two: require("../../assets/characters/two.png"),
  three: require("../../assets/characters/three.png"),
  plus: require("../../assets/characters/plus.png"),
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
    borderColor: Color.Main400,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.Main100,
  },

  ProfileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
