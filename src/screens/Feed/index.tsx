import React, { useEffect, useState } from "react";
import {
  FlatList,
  Alert,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Post from "../../components/Post";

import { useNavigation } from "@react-navigation/native";

import PostTypes from "../../models";
import Mock from "../../mocks/_posts.json";
import styles from "./styles";

const Loading: React.FC = () => {
  return (
    <Text
      style={{
        fontWeight: "bold",
        color: "#999",
        textAlign: "center",
        padding: 10,
      }}
    >
      Acabou as pulicações :(
    </Text>
  );
};

const Feed: React.FC = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [dataMock, setDataMock] = useState<PostTypes[]>([]);

  const loadData = () => {
    setDataMock(Object(Mock));
    setTimeout(() => setLoading(false), 5000);
  };

  useEffect(() => {
    loadData();
  }, []);

  const refreshList = () => {
    setRefreshing(true);
    loadData();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="999" />
      ) : (
        <FlatList
          style={{ marginTop: 24 }}
          data={dataMock}
          onScroll={(event) => {
            const index = event.nativeEvent.contentOffset.y;
            if (index > 1) {
              navigation.setOptions({ tabBarVisible: false });
            } else {
              navigation.setOptions({ tabBarVisible: true });
            }
          }}
          onRefresh={refreshList}
          refreshing={refreshing}
          ListFooterComponent={<Loading />}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Post
              data={item}
              onPress={() => Alert.alert(`Olá: ${item.user.fullName}`)}
            />
          )}
          keyExtractor={(item) => item.id_post.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default Feed;
