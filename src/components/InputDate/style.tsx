import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    gap: 30,
  },
  label: {
    fontFamily: "Poppins_Medium",
    fontSize: 15,
    paddingStart: 20,
  },
  textInput: {
    fontFamily: "Poppins_Regular",
    fontSize: 16,
    paddingHorizontal: 10,
    width: "100%",
  },
  defaultStyle: {
    backgroundColor: colors.lightGreen,
  },
  errorStyle: {
    backgroundColor: colors.lightRed,
  },
  outlineStyle: {
    borderRadius: 40,
    borderWidth: 1,
  },
  outlineErrorStyle: {
    borderColor: colors.red,
  },
  alert: {
    color: colors.red,
    textAlign: "center",
  },
});
