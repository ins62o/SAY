/* React & React Native */
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

/* Library */
import TypeWriter from "react-native-typewriter";
import { SafeAreaView } from "react-native-safe-area-context";

/* Image */
import Plus from "../../../assets/icons/plus2.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FeedBackImage from "../../../assets/etc/feedBackImage.png";

/* Library */
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";

/* Components */
import { T18 } from "../../components/common/Typography";
import { COLORS } from "../../common/colors";
import Header from "../../components/common/Header";
import Button from "../../components/common/Button";
import FeedImageCard from "../../components/feed/FeedImageCard";
import FeedTextCard from "../../components/feed/FeedTextCard";

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export default function Feed() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [typing, setTyping] = useState<0 | 1 | -1>(0);
  const [typingDone, setTypingDone] = useState(false);

  const navigation = useNavigation<Navigation>();

  /* 이미지 opacity */
  const imageOpacity = useRef(new Animated.Value(0)).current;

  /* 버튼 애니메이션 */
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonTranslateY = useRef(new Animated.Value(16)).current;

  const goToFeedWrite = () => navigation.navigate("FeedWrite");

  const onTypingEnd = () => {
    setTyping(0);
    setTypingDone(true);
  };

  /* 버튼 등장 */
  useEffect(() => {
    if (!typingDone) return;

    Animated.parallel([
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(buttonTranslateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [typingDone]);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header isBack />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {isEmpty ? (
          /* ---------- Empty State ---------- */
          <View style={styles.emptyState}>
            {/* 텍스트 */}
            <View style={styles.textSlot}>
              <TypeWriter typing={typing} onTypingEnd={onTypingEnd}>
                <T18 style={styles.emptyText}>
                  {`기억해두고 싶은 순간이 있나요?\n여러분의 소중한 추억을 남겨 보세요.`}
                </T18>
              </TypeWriter>
            </View>

            {/* 🔥 항상 렌더되는 이미지 */}
            <Animated.Image
              source={FeedBackImage}
              style={[
                styles.emptyImage,
                {
                  opacity: imageOpacity,
                },
              ]}
              onLoadEnd={() => {
                Animated.timing(imageOpacity, {
                  toValue: 1,
                  duration: 200,
                  useNativeDriver: true,
                }).start();

                setTyping(1); // 이미지 뜬 후 타이핑 시작
              }}
            />

            {/* 버튼 */}
            <Animated.View
              style={[
                styles.emptyButtonWrapper,
                {
                  opacity: buttonOpacity,
                  transform: [{ translateY: buttonTranslateY }],
                },
              ]}
            >
              <Button
                text="첫 게시글 쓰러가기"
                size={18}
                onPress={() => setIsEmpty(false)}
              />
            </Animated.View>
          </View>
        ) : (
          /* ---------- Feed ---------- */
          <View style={styles.cardWrapper}>
            <FeedImageCard />
            <FeedTextCard />
            <FeedImageCard />
          </View>
        )}
      </ScrollView>

      {!isEmpty && (
        <TouchableOpacity style={styles.plusBtn} onPress={goToFeedWrite}>
          <Image source={Plus} style={styles.plusBtnSize} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

/* ================= Styles ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },

  emptyState: {
    width: "100%",
    height: 640,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  textSlot: {
    height: 72,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    textAlign: "center",
    lineHeight: 30,
  },

  emptyImage: {
    width: 360,
    height: 360,
    marginVertical: 16,
  },

  emptyButtonWrapper: {
    width: "80%",
    height: 56,
    justifyContent: "center",
  },

  cardWrapper: {
    width: "100%",
    padding: 15,
  },

  plusBtn: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.brandPrimary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  plusBtnSize: {
    width: 38,
    height: 38,
  },
});
