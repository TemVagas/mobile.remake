import { StyleSheet, Dimensions } from "react-native";
import Constants from "../../constants/stylesConstants";
import Colors from "../../constants/colors";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFF",
    width: windowWidth - 16,
    marginTop: 8,
    marginBottom: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: Constants.borderRadius,
  },

  topContainer: {
    flexDirection: "row",
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    marginTop: 16,
    padding: 12,
    backgroundColor: Colors.blackTheme.primary,
    borderRadius: Constants.borderRadius,
    alignItems: "center",
    width: "48%",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 14,
  },

  descriptionContainer: {
    marginTop: 16,
    padding: 16,
    borderRadius: Constants.borderRadius,
    backgroundColor: "#f4f4f4",
  },

  mainImagePost: {
    width: "100%",
    height: 100,
    borderRadius: Constants.borderRadius,
    marginTop: 16,
  },

  infos: {
    marginLeft: 10,
  },
});

export default styles;
