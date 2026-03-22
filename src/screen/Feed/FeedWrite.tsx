/* === 스토리 작성 화면 === */

/* React & React Native */
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";

/* Components */
import Header from "../../components/common/Header";
import Button from "../../components/common/Button";
import { T14, T16, T18 } from "../../components/common/Typography";
import { COLORS } from "../../common/colors";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function FeedWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigation = useNavigation<Navigation>();

  const isRequired = title.length > 0 && content.length > 0;

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <Header isBack />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={{ paddingBottom: 24 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity style={styles.cardImageBox}>
              <T16>사진을 추가해주세요.</T16>
            </TouchableOpacity>

            <View style={styles.info}>
              <T14 style={{ color: COLORS.textSecondary }}>
                ＊최대 5장의 사진을 업로드할 수 있습니다.
              </T14>
            </View>

            <View style={{ marginBottom: 20 }} />

            <View style={{ padding: 15 }}>
              <View style={styles.titleBox}>
                <T18>제목</T18>
                <View style={styles.dot} />
              </View>
              <TextInput
                style={styles.inputBox}
                cursorColor={COLORS.brandPrimary}
                selectionColor={COLORS.brandPrimary}
                placeholder="이야기의 제목을 적어주세요."
                returnKeyType="done"
                value={title}
                onChangeText={(text) => setTitle(text)}
              />
              <View style={{ marginBottom: 40 }} />
              <View style={styles.titleBox}>
                <T18>내용</T18>
                <View style={styles.dot} />
              </View>
              <TextInput
                style={styles.contentInput}
                cursorColor={COLORS.brandPrimary}
                selectionColor={COLORS.brandPrimary}
                placeholder="이야기의 내용을 적어주세요."
                multiline
                textAlignVertical="top"
                value={content}
                onChangeText={(content) => setContent(content)}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {/* 하단 고정 버튼 */}
        <View style={styles.bottomButton}>
          <Button text="이야기 만들기" size={18} />
        </View>
      </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
  },

  cardImageBox: {
    width: "90%",
    aspectRatio: 16 / 9,
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 14,
    backgroundColor: COLORS.surfaceSoft,
    justifyContent: "center",
    alignItems: "center",
  },

  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 5,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    fontFamily: "memo",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: COLORS.brandPrimary,
    marginLeft: 3,
  },

  /** 🔥 내용 input */
  contentInput: {
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    fontFamily: "memo",
    height: 180,
  },

  /** 🔥 하단 버튼 */
  bottomButton: {
    padding: 15,
    paddingBottom: 30,
    backgroundColor: COLORS.background,
  },

  info: {
    width: "90%",
    marginTop: 7,
    alignSelf: "center",
  },
});
