import { StyleSheet } from "react-native";
import { colors } from "./../../themes";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreen,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 14,
    width: "100%",
  },
  containerBody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Medium",
    textAlign: "center",
    fontSize: 12,
  },
  value: {
    fontFamily: "Poppins_Bold",
    textAlign: "center",
    color: colors.blue,
    fontSize: 15,
  },
  button: {
    borderRadius: 16,
  },
  buttonContainer: {},
  buttonLabel: {
    verticalAlign: "middle",
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 0,
    fontSize: 15,
    fontFamily: "Poppins_Bold",
  },
});
