/* React & React Native */
import { View, StyleSheet, Animated } from "react-native";
import React, { useRef, useState } from "react";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import TypeWriter from "react-native-typewriter";
import { Color } from "../common/colors";
import { T18 } from "../components/Typography";

export default function Feed() {
  const [isTyping, setIsTyping] = useState(false);
  const opacity = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setIsTyping(true);
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* 헤더 */}
      <Header isBack={true} />

      {/* 피드 메인 */}
      <View style={styles.feedContainer}>
        {!isTyping && (
          <Animated.View style={{ opacity }}>
            <TypeWriter typing={1} onTypingEnd={fadeOut}>
              <T18>오늘 기억해두고 싶은 순간이 있나요?</T18>
            </TypeWriter>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Main200,
  },

  feedContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 15,
  },
});
