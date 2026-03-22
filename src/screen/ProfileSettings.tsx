import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Header from "../components/common/Header";
import { COLORS } from "../common/colors";

const characters = [
  { source: require("../../assets/characters/one.png"), isLocked: false },
  { source: require("../../assets/characters/two.png"), isLocked: false },
  { source: require("../../assets/characters/three.png"), isLocked: false },
  { source: require("../../assets/characters/four.png"), isLocked: false },
  { source: require("../../assets/characters/five.png"), isLocked: true },
  { source: require("../../assets/characters/six.png"), isLocked: true },
  { source: require("../../assets/characters/seven.png"), isLocked: true },
  { source: require("../../assets/characters/eight.png"), isLocked: true },
] as const;

type CharacterCardProps = {
  source: (typeof characters)[number]["source"];
  selected?: boolean;
  isLocked?: boolean;
  onPress?: () => void;
};

function CharacterCard({
  source,
  selected = false,
  isLocked = false,
  onPress,
}: CharacterCardProps) {
  return (
    <Pressable
      style={[
        styles.characterButton,
        isLocked && styles.characterButtonLocked,
        selected && styles.characterButtonSelected,
      ]}
      onPress={onPress}
      disabled={isLocked}
    >
      <Image
        source={source}
        style={[styles.characterImage, isLocked && styles.characterImageLocked]}
      />
      {isLocked && (
        <View style={styles.lockOverlay}>
          <Ionicons name="lock-closed" size={24} color={COLORS.textSecondary} />
        </View>
      )}
    </Pressable>
  );
}

export default function ProfileSettings() {
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const [nickname, setNickname] = useState("닉네임");

  return (
    <ImageBackground
      source={require("../../assets/etc/roomBg.png")}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.headerWrap}>
        <Header isBack />
      </View>

      <View style={styles.topBox}>
        <View style={styles.profileEditor}>
          <View style={styles.previewAvatar}>
            <Image
              source={characters[selectedCharacter].source}
              style={styles.previewCharacterImage}
            />
          </View>

          <TextInput
            value={nickname}
            onChangeText={setNickname}
            maxLength={12}
            placeholder="닉네임"
            placeholderTextColor={COLORS.textSecondary}
            textAlign="center"
            style={styles.nicknameInput}
          />
        </View>
      </View>

      <View style={styles.bottomBox}>
        <ScrollView
          contentContainerStyle={styles.characterGrid}
          showsVerticalScrollIndicator={false}
        >
          {characters.map((character, index) => (
            <CharacterCard
              key={index}
              source={character.source}
              selected={!character.isLocked && selectedCharacter === index}
              isLocked={character.isLocked}
              onPress={() => setSelectedCharacter(index)}
            />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    resizeMode: "cover",
  },

  headerWrap: {
    top: 55,
  },

  topBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  profileEditor: {
    alignItems: "center",
    justifyContent: "center",
  },

  previewAvatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
    backgroundColor: "rgba(255,255,255,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },

  previewCharacterImage: {
    width: 112,
    height: 112,
    resizeMode: "contain",
  },

  nicknameInput: {
    minWidth: 120,
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.textPrimary,
    fontFamily: "memo",
    fontSize: 20,
    color: COLORS.textPrimary,
  },

  bottomBox: {
    backgroundColor: COLORS.background,
    height: 250,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  characterGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    padding: 16,
  },

  characterButton: {
    width: 70,
    height: 70,
    borderWidth: 1.5,
    borderColor: COLORS.textSecondary,
    borderRadius: 18,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },

  characterButtonLocked: {
    backgroundColor: "#e7e7e7",
  },

  characterButtonSelected: {
    borderColor: COLORS.brandAccent,
    backgroundColor: COLORS.surfaceSoft,
  },

  characterImage: {
    width: 58,
    height: 58,
    resizeMode: "contain",
  },

  characterImageLocked: {
    opacity: 0.45,
  },

  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.22)",
    borderRadius: 18,
  },
});
