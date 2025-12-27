/* React & React Native */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

/* Library */
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

/* Components */
import Header from "../components/Header";
import Profile from "../components/Profile";
import MenuButton from "../components/MenuButton";
import InviteModal from "../components/Modal/InviteModal";
import { COLORS } from "../common/colors";
import { RootStackParamList } from "../../App";
import { T20 } from "../components/Typography";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const navigation = useNavigation<Navigation>();

  const goToFeed = () => navigation.navigate("Feed");
  const goToCalendar = () => navigation.navigate("Calendar");

  return (
    <SafeAreaView edges={["top"]} style={styles.safeContainer}>
      <View style={styles.headerContainer}>
        {/* 헤더 */}
        <Header isBack={false} />
        <View style={styles.profileContainer}>
          <View style={styles.profileLineBox}>
            <Profile image={"one"} />
            <T20 style={{ marginLeft: 10 }}>정인성 ♧</T20>
          </View>
          <View>
            <Profile image={"invite"} onPress={() => setIsModal(true)} />
          </View>
        </View>
      </View>

      <View style={styles.homeContainer}>
        {/* 메뉴들 */}
        <View style={styles.tabContainer}>
          <MenuButton name="스토리" icon="story" onPress={goToFeed} />
          <MenuButton name="사진첩" icon="album" onPress={goToFeed} />
          <MenuButton name="캘린더" icon="promise" onPress={goToCalendar} />
        </View>
      </View>

      <InviteModal visible={isModal} onClose={() => setIsModal(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: COLORS.surfaceSoft },

  headerContainer: {
    height: 156,
    backgroundColor: COLORS.surfaceSoft,
  },

  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "relative",
    bottom: 35,
    padding: 15,
  },

  profileLineBox: { alignItems: "center", flexDirection: "row" },
});
