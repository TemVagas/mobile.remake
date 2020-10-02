import React from "react";
import { FlatList, Alert, SafeAreaView } from "react-native";
import Post from "../../components/Post";

import PostTypes from "../../models";
import Mock from "../../mocks/_posts.json";
import styles from "./styles";

const Feed: React.FC = () => {
  const dataMock: PostTypes[] = Object(Mock);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ marginTop: 24, marginBottom: 12 }}
        data={dataMock}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Post
            data={item}
            onPress={() => Alert.alert(`Olá: ${item.user.fullName}`)}
          />
        )}
        keyExtractor={(item) => item.id_post as string}
      />
    </SafeAreaView>
  );
};

export default Feed;
