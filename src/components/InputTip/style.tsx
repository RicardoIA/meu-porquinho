import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    paddingStart: 20,
  },
  textInput: {
    backgroundColor: colors.mainGreen,
    width: "100%",
    fontSize: 30,
    textAlign: "right",
    paddingHorizontal: 10,
  },
  outlineStyle: {
    borderRadius: 40,
    borderWidth: 0,
  },
});
