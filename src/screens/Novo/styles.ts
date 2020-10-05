import { Dimensions, StyleSheet } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
import Constants from "../../constants/stylesConstants";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    height: 250,
    width: windowWidth - 16,
    borderRadius: Constants.borderRadius,
    backgroundColor: Colors.blackTheme.primary,
  },

  modal: {
    flex: 1,
    marginTop: 32,
    marginBottom: 10,
    borderRadius: Constants.borderRadius,
    width: windowWidth - 16,
    backgroundColor: Colors.blackTheme.primary,
  },

  closeButton: {
    right: 0,
    top: 0,
    zIndex: 3,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "rgba(255, 130, 33, 0.2)",
    borderRadius: 100,
  },
});

export default styles;
