import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
  },
  label: {
    fontFamily: "Poppins_Medium",
    fontSize: 15,
    paddingStart: 20,
  },
  textInput: {
    backgroundColor: colors.lightGreen,
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
