import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    paddingStart: 20,
  },
  textInput: {
    backgroundColor: colors.mainGreen,
    fontSize: 30,
    flexGrow: 1,
    textAlign: "right",
    fontWeight: "700",
    paddingHorizontal: 10,
  },
  outlineStyle: {
    borderRadius: 40,
    borderWidth: 0,
  },
  icon: {
    backgroundColor: colors.mainGreen,
    height: "100%",
    width: 50,
    margin: 0,
    borderRadius: 14,
  },
});
