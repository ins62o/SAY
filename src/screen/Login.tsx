/* React & React Native */
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

/* Assets */
import Welcome from "../../assets/etc/welcome.png";

/* Components */
import { T14, T16, T18 } from "../components/common/Typography";
import { COLORS } from "../common/colors";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function Login() {
  const navigation = useNavigation<Navigation>();

  const goMainTab = () => navigation.replace("MainTab");

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Welcome} style={styles.image} />

      <View style={styles.dividerWrapper}>
        <View style={styles.line} />
        <T18 style={styles.title}>회원가입 / 로그인</T18>
        <View style={styles.line} />
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.Btn, styles.kakaoBtn]}
          onPress={goMainTab}
        >
          <Image
            source={require("../../assets/icons/kakao.png")}
            style={styles.icon}
          />
          <T18>카카오로 시작하기</T18>

          <View
            style={{
              borderWidth: 1,
              position: "absolute",
              right: 0,
              marginRight: 20,
              padding: 8,
              borderRadius: 15,
              backgroundColor: COLORS.brandAccent,
              borderColor: COLORS.brandAccent,
            }}
          >
            <T14>최근 로그인</T14>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn, styles.naverBtn]}>
          <Image
            source={require("../../assets/icons/naver.png")}
            style={styles.icon}
          />
          <T18 style={{ color: COLORS.white }}>네이버로 시작하기</T18>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Btn, styles.googleBtn]}>
          <Image
            source={require("../../assets/icons/google.png")}
            style={styles.icon}
          />
          <T18>구글로 시작하기</T18>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }} />

      <Pressable>
        <T16 style={{ color: COLORS.textSecondary }}>
          아이디 접속이 안된다면 ?
        </T16>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  image: {
    width: 350,
    height: 200,
    marginBottom: 20,
  },

  title: {
    color: COLORS.textSecondary,
    marginHorizontal: 10,
  },

  buttonWrapper: {
    width: "100%",
    paddingVertical: 15,
    gap: 12,
  },

  dividerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 16,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.textSecondary,
  },

  Btn: {
    height: 48,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },

  kakaoBtn: {
    backgroundColor: "#FEE500",
  },

  naverBtn: {
    backgroundColor: "#2DB40D",
  },

  googleBtn: {
    backgroundColor: COLORS.white,
  },

  icon: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    marginLeft: 30,
  },
});
