import React from "react";
import { Image } from "react-native";

const Avatar: React.FC<{ path: string }> = ({ path }) => (
  <Image
    style={{
      width: 56,
      height: 56,
      borderRadius: 100,
    }}
    source={{ uri: path }}
  />
);

export default Avatar;
