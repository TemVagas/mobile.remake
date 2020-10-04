import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

interface Props {
  size: number;
  primaryColor: string;
  secondColor: string;
  focused: boolean;
  onPress: () => void;
}

const NovoButton: React.FC<Props> = ({
  size,
  primaryColor,
  secondColor,
  onPress,
  focused,
}) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "#FFF", borderRadius: 100 }}
      onPress={onPress}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: focused ? "rgba(255, 130, 33, 0.2)" : "#EBEBF5" },
        ]}
      >
        <AntDesign
          name="plus"
          size={focused ? size + 2 : size}
          color={focused ? primaryColor : secondColor}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NovoButton;
