/* React & React Native */
import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { color } from "../common/colors";

interface BaseTextProps {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  children: ReactNode;
}

export const T16: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t16, props.style]} />
);

export const P16: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.p16, props.style]} />
);

export const TB16: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.tb16, props.style]} />
);

export const T18: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t18, props.style]} />
);

export const P18: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.p18, props.style]} />
);

export const TB18: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.tb18, props.style]} />
);

export const T20: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.t20, props.style]} />
);

export const P20: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.p20, props.style]} />
);

export const TB20: React.FC<BaseTextProps> = (props) => (
  <Text {...props} style={[styles.tb20, props.style]} />
);

const styles = StyleSheet.create({
  t16: {
    fontFamily: "Pretendard",
    fontSize: 16,
    color: color.black,
  },

  p16: {
    fontFamily: "memo",
    fontSize: 16,
    color: color.black,
  },

  tb16: {
    fontFamily: "PretendardBold",
    fontSize: 16,
    color: color.black,
  },

  t18: {
    fontFamily: "Pretendard",
    fontSize: 18,
    color: color.black,
  },

  p18: {
    fontFamily: "memo",
    fontSize: 18,
    color: color.black,
  },

  tb18: {
    fontFamily: "PretendardBold",
    fontSize: 18,
    color: color.black,
  },

  t20: {
    fontFamily: "Pretendard",
    fontSize: 20,
    color: color.black,
  },

  p20: {
    fontFamily: "memo",
    fontSize: 20,
    color: color.black,
  },

  tb20: {
    fontFamily: "PretendardBold",
    fontSize: 20,
    color: color.black,
  },
});
