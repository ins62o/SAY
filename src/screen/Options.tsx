/* === 더보기 화면 === */

/* React & React Native */
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../common/colors";
import { T14, T18, T20, T22 } from "../components/common/Typography";
import { CommonStyles } from "../common/container";
import { Ionicons } from "@expo/vector-icons";

/* Component */

export default function Options() {
  const menuList = [
    { label: "멤버십", icon: "accessibility" },
    { label: "크루", icon: "people" },
    { label: "공지사항", icon: "notifications" },
    { label: "문의하기", icon: "chatbubble" },
  ];

  return (
    <View style={styles.container}>
      {/* 프로필 영역 */}
      <View style={styles.profileContainer}>
        <View style={styles.profileWrapper}>
          <View style={styles.infoSection}>
            <T22>정인성</T22>
            <View style={styles.spacer} />
            <T20>2026.01.10 남</T20>
            <View style={styles.spacer} />
            <T20>크루 : 둥실뭉실</T20>
          </View>

          <View style={styles.imageSection}>
            <View style={styles.avatar} />
            <TouchableOpacity style={styles.editButton}>
              <T14>편집</T14>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 메뉴 카드 (2 x 2) */}
      <View style={styles.menuWrapper}>
        {menuList.map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuCard}>
            <Ionicons name={item.icon as any} size={24} />
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
    alignItems: "center",
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

  editButton: {
    backgroundColor: COLORS.textThird,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
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
