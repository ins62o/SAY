/* React & React Native */
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";

/* Library */
import TypeWriter from "react-native-typewriter";
import { SafeAreaView } from "react-native-safe-area-context";

/* Components */
import Header from "../components/Header";
import { COLORS } from "../common/colors";
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
        {!isTyping ? (
          <Animated.View style={{ opacity }}>
            <TypeWriter
              typing={1}
              onTypingEnd={fadeOut}
              style={{ paddingTop: 15 }}
            >
              <T18>기억해두고 싶은 순간이 있나요 ?</T18>
            </TypeWriter>
          </Animated.View>
        ) : (
          <View style={styles.cardContainer}></View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  feedContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },

  cardContainer: {
    flex: 1,
  },
});
