import React from "react";
import { View } from "react-native";

/* Components */
import BaseModal from "../Modal/BaseModal";
import Profile from "../Profile";
import Button from "../Button";
import { T16, T22 } from "../Typography";

type InviteType = {
  visible: boolean;
  onClose: () => void;
};

export default function InviteModal({ visible, onClose }: InviteType) {
  return (
    <BaseModal visible={visible} onClose={onClose} width={300} height={250}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ height: 50, justifyContent: "center" }}>
          <T22>초대장</T22>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 20,
          }}
        >
          <Profile image="one" />
          <Profile image="two" />
          <Profile image="three" />
          <Profile image="plus" />
        </View>

        <View style={{ marginBottom: 20 }}>
          <T16>1명의 구성원을 더 초대할 수 있어요 !</T16>
        </View>

        <Button text="초대 링크 보내기" style={{ height: 42 }} size={16} />
      </View>
    </BaseModal>
  );
}
