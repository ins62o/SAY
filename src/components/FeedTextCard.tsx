/* React & React Native */
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

/* Components */
import { T16, T18 } from "./Typography";
import { COLORS } from "../common/colors";
import { CommonStyles } from "../common/container";

export default function FeedTextCard() {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.textCard, CommonStyles.shadow]}
    >
      <View style={styles.textCardHeader}>
        <View style={styles.profileRow}>
          <View style={styles.profileOutline}>
            <Image
              source={require("../../assets/characters/one.png")}
              style={styles.profileImage}
            />
          </View>
          <T16 style={styles.profileName}>정인성</T16>
        </View>

        <T18 style={styles.textCardTitle}>2026년 새해전 연말 파티</T18>
      </View>

      <T16 style={styles.textContent}>
        오늘은 즐거운 2026년 새해전 마지막 연말 파티다. 너무 재밌다. 왁자지껄
        우르르르르 오르르르오늘은 즐거운 2026년 새해전 마지막 연말 파티다. 너무
        재밌다.. 너무 재밌다.. 너무 재밌다.
      </T16>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textCard: {
    marginTop: 24,
    width: "100%",
    height: 150,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    padding: 15,
    marginBottom: 30,
  },

  textCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  textCardTitle: {
    flex: 1,
    color: COLORS.textPrimary,
  },

  textContent: {
    lineHeight: 22,
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
    marginRight: 6,
    marginBottom: 6,
  },

  profileImage: {
    width: 32,
    height: 32,
  },

  profileName: {
    color: COLORS.textSecondary,
  },
});
