/* React & React Native */
import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { Color } from "../common/colors";

interface BaseTextProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  children: ReactNode;
}

export const T16: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t16, props.style]} />
);

export const T18: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t18, props.style]} />
);

export const T20: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t20, props.style]} />
);

const styles = StyleSheet.create({
  t16: {
    fontFamily: "memo",
    fontSize: 16,
    color: Color.colorBlack,
  },

  t18: {
    fontFamily: "memo",
    fontSize: 18,
    color: Color.colorBlack,
  },

  t20: {
    fontFamily: "memo",
    fontSize: 20,
    color: Color.colorBlack,
  },
});
