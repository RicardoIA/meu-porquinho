import { StyleSheet } from "react-native";
import { colors } from "../../../themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00D09E",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  content: {
    marginVertical: 20,
    width: "100%",
    gap: 50,
    flex: 1,
  },
  defaultStyle: {
    backgroundColor: colors.lightGreen,
  },
  textInput: {
    fontFamily: "Poppins_Regular",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 2,
    height: 40,
    width: "100%",
  },
  outlineStyle: {
    borderRadius: 40,
    borderWidth: 1,
  },
});
