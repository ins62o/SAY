/* React & React Native */
import React from "react";
import { View, Text } from "react-native";

/* Library */
import { SafeAreaView } from "react-native-safe-area-context";

/* Styles */
import { CommonStyles } from "../common/container";

/* Components */
import Header from "../components/Header";

export default function Home() {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <Header />
      <View style={CommonStyles.FJA}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
