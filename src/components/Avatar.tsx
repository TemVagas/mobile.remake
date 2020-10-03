import React from "react";
import { Image } from "react-native";

type Props = {
  width?: number;
  heigth?: number;
  path: string;
};

const Avatar: React.FC<Props> = ({ path, width, heigth }) => {
  return (
    <Image
      style={{
        width: width ?? 48,
        height: heigth ?? 48,
        borderRadius: 100,
      }}
      source={{ uri: path }}
    />
  );
};

export default Avatar;
