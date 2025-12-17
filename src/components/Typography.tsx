/* React & React Native */
import React, { ReactNode } from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextLayoutEventData,
  TextStyle,
} from "react-native";

interface BaseTextProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  children: ReactNode;
  onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
}

export const TB16: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.tb16, props.style]} />
);

export const T16: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t16, props.style]} />
);

export const TB18: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.tb18, props.style]} />
);

export const T18: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t18, props.style]} />
);

export const TB20: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.tb20, props.style]} />
);

export const T20: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t20, props.style]} />
);

const styles = StyleSheet.create({
  /* 16 */
  tb16: {
    fontFamily: "memo",
    fontSize: 16,
  },
  t16: {
    fontFamily: "memo",
    fontSize: 16,
  },

  /* 18 */
  tb18: {
    fontFamily: "memo",
    fontSize: 18,
  },
  t18: {
    fontFamily: "memo",
    fontSize: 18,
  },

  /* 20 */
  tb20: {
    fontFamily: "memo",
    fontSize: 20,
  },
  t20: {
    fontFamily: "memo",
    fontSize: 20,
  },
});
