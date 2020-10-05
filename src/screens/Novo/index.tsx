import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../../constants/colors";
import styles from "./styles";

const Novo: React.FC = () => {
  const [modalStyle, setModalStyle] = useState<boolean>(false);

  const navigation = useNavigation();

  const Modal: React.FC = () => (
    <View style={styles.modal}>
      <TouchableOpacity
        onPress={() => {
          navigation.setOptions({ tabBarVisible: true });
          setModalStyle(false);
        }}
        style={{
          backgroundColor: "#FFF",
          borderRadius: 100,
          alignSelf: "center",
        }}
      >
        <AntDesign
          style={styles.closeButton}
          name="close"
          size={30}
          color={Colors.blackTheme.primary}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {modalStyle ? (
        <Modal />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.setOptions({ tabBarVisible: false });
            setModalStyle(true);
          }}
        >
          <View style={styles.card}></View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Novo;
