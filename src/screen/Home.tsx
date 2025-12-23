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
import { color } from "../common/colors";
import { P20 } from "../components/Typography";
import { RootStackParamList } from "../../App";

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
            <P20 style={{ marginLeft: 10 }}>정인성 ♧</P20>
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
  safeContainer: { flex: 1, backgroundColor: color.sub2 },

  headerContainer: {
    height: 156,
    backgroundColor: color.sub2,
  },

  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  homeContainer: {
    flex: 1,
    backgroundColor: color.back,
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
