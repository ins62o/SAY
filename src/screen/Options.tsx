/* === 더보기 화면 === */

/* React & React Native */
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../common/colors";
import { T14, T18, T24 } from "../components/common/Typography";
import { CommonStyles } from "../common/container";

/* Component */

export default function Options() {
  const menuList = [
    { label: "프로필 수정", icon: require("../../assets/icons/profile.png") },
    { label: "크루", icon: require("../../assets/icons/home.png") },
    { label: "공지사항", icon: require("../../assets/icons/bell.png") },
    { label: "문의하기", icon: require("../../assets/icons/chat.png") },
  ];

  return (
    <View style={styles.container}>
      {/* 프로필 영역 */}
      <View style={styles.profileContainer}>
        <View style={styles.profileWrapper}>
          <View style={styles.infoSection}>
            <T24>정인성</T24>
            <View style={styles.spacer} />
            <T14>가입일 : 2026.01.10 </T14>
            <View style={styles.spacer} />
            <T14>크루 : 둥실둥실</T14>
          </View>

          <View style={styles.imageSection}>
            <View style={styles.avatar}>
              <Image
                source={require("../../assets/characters/one.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>
        </View>
      </View>

      {/* 메뉴 카드 (2 x 2) */}
      <View style={styles.menuWrapper}>
        {menuList.map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuCard}>
            <Image source={item.icon} style={{ width: 40, height: 40 }} />
            <T18 style={styles.menuLabel}>{item.label}</T18>
          </TouchableOpacity>
        ))}
      </View>

      {/* 하단 영역 */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.versionBox}>
          <T18>버전 1.0.0</T18>
        </TouchableOpacity>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <T18>로그아웃</T18>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <T18>탈퇴</T18>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  /** 프로필 */
  profileContainer: {
    backgroundColor: COLORS.surfaceSoft,
    paddingTop: 80,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  profileWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
  },

  infoSection: {
    flex: 1,
    padding: 15,
  },

  imageSection: {
    flex: 1,
    alignItems: "center",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.background,
    marginBottom: 10,
  },

  spacer: {
    height: 8,
  },

  /** 메뉴 카드 */
  menuWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    gap: 12,
    marginTop: 20,
  },

  menuCard: {
    width: "48%",
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    ...CommonStyles.shadow,
  },

  menuLabel: {
    marginTop: 10,
  },

  /** 하단 */
  bottomSection: {
    padding: 15,
  },

  versionBox: {
    height: 48,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    ...CommonStyles.shadow,
  },

  actionRow: {
    flexDirection: "row",
    gap: 12,
  },

  actionButton: {
    flex: 1,
    height: 48,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    ...CommonStyles.shadow,
  },
});
