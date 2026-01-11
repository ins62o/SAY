/* React & React Native */
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

/* Components */
import { COLORS } from "../../common/colors";
import { CommonStyles } from "../../common/container";
import { T16, T18 } from "../common/Typography";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function FeedImageCard() {
  const { navigate } = useNavigation<Navigation>();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.imageCard}
      onPress={() => navigate("FeedDetail")}
    >
      <View style={styles.cardImageBox} />

      <View style={styles.cardHeader}>
        <View style={styles.profile}>
          <View style={styles.profileOutline}>
            <Image
              source={require("../../../assets/characters/one.png")}
              style={styles.profileImage}
            />
          </View>
          <T16 style={styles.profileName}>정인성</T16>
        </View>

        <View style={styles.textBox}>
          <T18 style={styles.titleText}>2026년 새해전 연말 파티</T18>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    width: "100%",
    height: 285,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingBottom: 15,
    ...CommonStyles.shadow,
  },

  cardImageBox: {
    width: "90%",
    aspectRatio: 16 / 9,
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 14,
    backgroundColor: COLORS.surfaceSoft,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    paddingHorizontal: 16,
  },

  profile: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },

  profileOutline: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.surfaceWarm,
    marginBottom: 6,
  },

  profileImage: {
    width: 32,
    height: 32,
  },

  profileName: {
    color: COLORS.textSecondary,
  },

  textBox: {
    flex: 1,
    justifyContent: "center",
  },

  titleText: {
    color: COLORS.textPrimary,
    lineHeight: 24,
  },
});
