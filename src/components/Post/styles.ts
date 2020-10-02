import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    width: windowWidth - 16,
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 5,
  },

  infos: {
    marginLeft: 10,
  },
});

export default styles;
