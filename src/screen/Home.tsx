/* React & React Native */
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";

/* Components */
import Header from "../components/Header";
import Profile from "../components/Profile";
import MenuButton from "../components/MenuButton";
import InviteModal from "../components/Modal/InviteModal";
import { Color } from "../common/colors";
import { T18 } from "../components/Typography";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const navigation = useNavigation<Navigation>();

  const goToFeed = () => navigation.navigate("Feed");

  return (
    <SafeAreaView edges={["top"]} style={styles.safeContainer}>
      <View style={styles.headerContainer}>
        {/* 헤더 */}
        <Header isBack={false} />
        <View style={styles.profileContainer}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Profile image={"one"} />
            <T18 style={{ marginLeft: 10 }}>정인성</T18>
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
          <MenuButton name="캘린더" icon="promise" onPress={goToFeed} />
        </View>
      </View>

      <InviteModal visible={isModal} onClose={() => setIsModal(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: Color.Main200 },

  headerContainer: {
    height: 156,
    backgroundColor: Color.Main200,
  },

  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  homeContainer: {
    flex: 1,
    backgroundColor: Color.Main100,
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
});
