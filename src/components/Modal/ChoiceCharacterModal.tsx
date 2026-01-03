/* React & React Native */
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

/* Components */
import Profile from "../common/Profile";
import Button from "../common/Button";
import { COLORS } from "../../common/colors";
import { T18, T20 } from "../common/Typography";
import BaseModal from "../modal/BaseModal";

/* Image */
import onCheck from "../../../assets/icons/on-check.png";

type InviteType = {
  visible: boolean;
  onClose: () => void;
};

export default function ChoiceCharacterModal({ visible, onClose }: InviteType) {
  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      width={320}
      height={420}
      innerPadding={0}
    >
      <View style={styles.modal}>
        {/* ===== Header ===== */}
        <View style={styles.header}>
          <T20>구성원 목록</T20>
        </View>

        {/* ===== List ===== */}
        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {Array.from({ length: 7 }).map((_, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <View style={styles.profile}>
                <Profile image="one" />
                <T18 style={styles.name}>정인성</T18>
              </View>

              <Image source={onCheck} style={styles.check} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ===== Footer ===== */}
        <View style={styles.footer}>
          <Button text="확인" size={18} />
        </View>
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.surfaceSoft,
    borderRadius: 15,
  },

  header: {
    paddingVertical: 14,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: COLORS.background,
  },

  list: {
    flexGrow: 0,
  },

  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    marginLeft: 10,
  },

  check: {
    width: 36,
    height: 36,
  },

  footer: {
    padding: 14,
    backgroundColor: COLORS.surfaceSoft,
  },
});
