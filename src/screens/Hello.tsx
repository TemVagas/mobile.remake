import React from "react";
import { View, Text } from "react-native";

const Hello = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#F5F5F5",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ color: "#333", fontSize: 150 }}>Hello</Text>
  </View>
);
export default Hello;
