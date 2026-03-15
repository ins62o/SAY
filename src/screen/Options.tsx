import React from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { COLORS } from "../common/colors";
import { CommonStyles } from "../common/container";
import { T14, T18, T24 } from "../components/common/Typography";
import { RootStackParamList } from "../../App";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function Options() {
  const navigation = useNavigation<Navigation>();

  const menuList = [
    { label: "프로필 설정", icon: require("../../assets/icons/profile.png") },
    { label: "우리 집", icon: require("../../assets/icons/home.png") },
    { label: "공지사항", icon: require("../../assets/icons/bell.png") },
    { label: "문의하기", icon: require("../../assets/icons/chat.png") },
  ];

  const goToLogin = () => navigation.replace("Login");

  const handleLogout = () => {
    Alert.alert("로그아웃하시겠습니까 ?", "", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "확인",
        onPress: goToLogin,
      },
    ]);
  };

  const handleWithdraw = () => {
    Alert.alert(
      "서비스 이용을 그만하시겠습니까?",
      "확인을 누르실 경우 모든 데이터가 삭제되며 복구가 불가능합니다.",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "확인",
          style: "destructive",
          onPress: () => {},
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileWrapper}>
          <View style={styles.infoSection}>
            <T24>사용자</T24>
            <View style={styles.spacer} />
            <T14>가입일 : 2026.01.10</T14>
            <View style={styles.spacer} />
            <T14>크루 : SAY</T14>
          </View>

          <View style={styles.imageSection}>
            <View style={styles.avatar}>
              <Image
                source={require("../../assets/characters/one.png")}
                style={styles.avatarImage}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        {menuList.map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuCard}>
            <Image source={item.icon} style={styles.menuIcon} />
            <T18 style={styles.menuLabel}>{item.label}</T18>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.versionBox}>
          <T18>버전 1.0.0</T18>
        </TouchableOpacity>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton} onPress={handleLogout}>
            <T18>로그아웃</T18>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleWithdraw}
          >
            <T18 style={styles.withdrawText}>탈퇴</T18>
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

  avatarImage: {
    width: "100%",
    height: "100%",
  },

  spacer: {
    height: 8,
  },

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

  menuIcon: {
    width: 40,
    height: 40,
  },

  menuLabel: {
    marginTop: 10,
  },

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

  withdrawText: {
    color: COLORS.fail,
  },
});
