import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import PostTypes from "../../models";
import Avatar from "../Avatar";
import styles from "./styles";

type Props = { data: PostTypes; onPress?: () => void };

const Post: React.FC<Props> = ({ data, onPress }) => {
  const navigation = useNavigation();

  const handleNavigateTo = () => navigation.navigate("Profile");

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={handleNavigateTo}>
          <Avatar path={data.user.avatar} />
        </TouchableOpacity>
        <View style={styles.infos}>
          <Text>{data.user.fullName}</Text>
          <Text>{data.user.email}</Text>
        </View>
      </View>
      <Image
        style={styles.mainImagePost}
        source={{ uri: data.post.avatarPost }}
      />
      <View style={styles.descriptionContainer}>
        <Text>{data.post.description}</Text>
      </View>
      <View style={styles.footerContainer}>
        <RectButton onPress={onPress} style={styles.button(true)}>
          <Text style={styles.buttonText}>Ver mais</Text>
        </RectButton>
        <RectButton onPress={onPress} style={styles.button(false)}>
          <Text style={styles.buttonText}>Favoritar</Text>
        </RectButton>
      </View>
    </View>
  );
};

export default Post;
