/* React & React Native */
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
} from "react-native";

/* Styles */
import { COLORS } from "../../common/colors";

/* Images */
import invite from "../../../assets/icons/invite.png";
import one from "../../../assets/characters/one.png";
import two from "../../../assets/characters/two.png";
import three from "../../../assets/characters/three.png";
import plus from "../../../assets/icons/plus.png";

const profileImages = {
  invite,
  one,
  two,
  three,
  plus,
};

type ProfileImageKey = keyof typeof profileImages;

type ProfileProps = {
  image: ProfileImageKey;
  size?: number;
  onPress?: () => void;
};

const getProfileOutlineStyle = (size: number): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
});

const getProfileImageStyle = (size: number): ImageStyle => ({
  width: size - 2,
  height: size - 2,
  borderRadius: (size - 2) / 2,
});

export default function Profile({ image, size = 50, onPress }: ProfileProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.outline, getProfileOutlineStyle(size)]}
    >
      <Image
        source={profileImages[image]}
        style={getProfileImageStyle(size)}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  outline: {
    borderWidth: 1,
    borderColor: COLORS.surfaceWarm,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
});
