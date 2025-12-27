/* React & React Native */
import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

/* Styles */
import { COLORS } from "../common/colors";

interface BaseTextProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  children: ReactNode;
}

export const T14: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t14, props.style]} />
);

export const T16: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t16, props.style]} />
);

export const T18: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t18, props.style]} />
);

export const T20: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t20, props.style]} />
);

export const T22: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t22, props.style]} />
);

const styles = StyleSheet.create({
  t14: {
    fontFamily: "memo",
    fontSize: 14,
    color: COLORS.textPrimary,
  },

  t16: {
    fontFamily: "memo",
    fontSize: 16,
    color: COLORS.textPrimary,
  },

  t18: {
    fontFamily: "memo",
    fontSize: 18,
    color: COLORS.textPrimary,
  },

  t20: {
    fontFamily: "memo",
    fontSize: 20,
    color: COLORS.textPrimary,
  },

  t22: {
    fontFamily: "memo",
    fontSize: 22,
    color: COLORS.textPrimary,
  },
});
