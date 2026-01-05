/* React & React Native */
import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  PanResponder,
  Dimensions,
} from "react-native";

/* Styles */
import { COLORS } from "../../common/colors";

/* Constants */
const SCREEN_HEIGHT = Dimensions.get("window").height;
const MODAL_HEIGHT = 200;

interface BottomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomModal({
  visible,
  onClose,
  children,
}: BottomModalProps) {
  const [mounted, setMounted] = React.useState(visible);
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setMounted(true);
      pan.setValue(0);
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT - MODAL_HEIGHT,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0.45,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    } else if (mounted) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT,
          duration: 280,
          useNativeDriver: false,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start(() => {
        pan.setValue(0);
        setMounted(false);
      });
    }
  }, [visible]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dy) > 5,
      onPanResponderMove: (_, g) => {
        if (g.dy > 0) pan.setValue(g.dy);
      },
      onPanResponderRelease: (_, g) => {
        if (g.dy > 100) onClose();
        else {
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  if (!mounted) return null;

  return (
    <>
      <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
        <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
      </Animated.View>

      <Animated.View
        style={[styles.container, { top: Animated.add(translateY, pan) }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.content}>
          <View style={styles.handle} />
          {children}
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },

  container: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  content: {
    flex: 1,
    padding: 15,
  },

  handle: {
    width: 70,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.textSecondary,
    alignSelf: "center",
    marginBottom: 20,
  },
});
