import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import PostTypes from "../../models";
import Avatar from "../Avatar";
import styles from "./styles";

type Props = { data: PostTypes; onPress?: () => void };

const Post: React.FC<Props> = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Avatar path={data.user.avatar} />
      <View style={styles.infos}>
        <Text>{data.user.fullName}</Text>
        <Text>{data.user.phone}</Text>
        <Text>{data.user.email}</Text>
        <Text>{data.user.userName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
