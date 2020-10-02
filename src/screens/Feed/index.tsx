import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Feed: React.FC = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const handleOnPressLearnMore = (): void => setReadMore(!readMore);

  return (
    <View style={styles.container}>
      <Button
        onPress={handleOnPressLearnMore}
        title="Muda o estado carai"
        color="#74d"
      />

      {readMore && <Text>Salve!</Text>}

      <StatusBar style="auto" />
    </View>
  );
};

export default Feed;
