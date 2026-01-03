/* React & React Native */
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useRef } from "react";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";

/* Components */
import Header from "../../components/common/Header";
import Profile from "../../components/common/Profile";
import Button from "../../components/common/Button";
import { COLORS } from "../../common/colors";
import { T14, T16, T18, T20 } from "../../components/common/Typography";
import { CommonStyles } from "../../common/container";

/* Assets */
import { Ionicons } from "@expo/vector-icons";

export default function FeedDetail() {
  const scrollRef = useRef<ScrollView>(null);
  const commentBoxRef = useRef<View>(null);

  const handleFocusComment = () => {
    commentBoxRef.current?.measureLayout(scrollRef.current as any, (_, y) => {
      scrollRef.current?.scrollTo({
        y: y - 20,
        animated: true,
      });
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          ref={scrollRef}
          style={styles.feedContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* 유저 정보 */}
          <View style={styles.userInfo}>
            <Profile image="one" size={35} />
            <T18 style={styles.userName}>정인성</T18>
          </View>

          {/* 이미지 */}
          <View style={styles.image} />

          {/* 컨텐츠 카드 */}
          <View style={styles.contentCard}>
            {/* 제목 */}
            <View style={styles.titleWrapper}>
              <T20>2026년 새해전 연말 파티</T20>
            </View>

            {/* 내용 */}
            <T18 style={styles.contentText}>
              스토리 내용을 어떤걸 쓸까 말까 고민이 되네 아 그렇다고 안쓰기도
              그렇고 음음음 여백은 맞을까 간격은 어떨까 고민되네 스타일은 괜찮나
              제목 크기는 또 크진않나 아니 작나..?
            </T18>

            {/* 댓글 입력 */}
            <View style={styles.commentBox} ref={commentBoxRef}>
              <TextInput
                style={styles.commentInput}
                placeholder="댓글을 작성해주세요."
                placeholderTextColor={COLORS.textSecondary}
                onFocus={handleFocusComment}
                returnKeyType="done"
              />
              <Button text="등록" size={16} style={styles.commentButton} />
            </View>

            {/* 댓글 정보 */}
            <View style={styles.commentInfo}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={18}
                color={COLORS.textPrimary}
              />
              <T16 style={styles.commentCount}>댓글 2</T16>
            </View>

            {/* 댓글 카드 */}
            <View style={styles.commentCard}>
              <View style={styles.commentHeader}>
                <View style={styles.commentUser}>
                  <Profile image="one" size={20} />
                  <T16 style={styles.commentUserName}>정인성</T16>
                </View>
                <T14 style={styles.commentDate}>2026.01.03</T14>
              </View>

              <T16 style={styles.commentText}>
                체리 너무 귀엽당 x 체리 너무 귀엽당
              </T16>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surfaceSoft,
  },

  feedContainer: {
    flex: 1,
    padding: 15,
  },

  /* User */
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userName: {
    marginLeft: 5,
  },

  /* Image */
  image: {
    height: 300,
    borderRadius: 15,
    backgroundColor: COLORS.background,
    marginBottom: 20,
    ...CommonStyles.shadow,
  },

  /* Content Card */
  contentCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
  },

  titleWrapper: {
    borderBottomWidth: 2,
    borderColor: COLORS.brandPrimary,
    paddingBottom: 4,
    marginBottom: 20,
  },

  contentText: {
    lineHeight: 30,
    marginBottom: 30,
  },

  /* Comment Input */
  commentBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.brandPrimary,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    paddingLeft: 10,
    height: 42,
    width: "100%",
    marginBottom: 10,
  },

  commentInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "memo",
  },

  commentButton: {
    width: 80,
    height: 40,
  },

  /* Comment Info */
  commentInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  commentCount: {
    marginLeft: 5,
  },

  /* Comment Card */
  commentCard: {
    width: "100%",
    backgroundColor: COLORS.surfaceSoft,
    borderRadius: 15,
    padding: 15,
  },

  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  commentUser: {
    flexDirection: "row",
    alignItems: "center",
  },

  commentUserName: {
    marginLeft: 5,
  },

  commentDate: {
    color: COLORS.textPrimary,
  },

  commentText: {
    marginLeft: 25,
    color: COLORS.textSecondary,
  },
});
