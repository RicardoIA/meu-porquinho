import { StyleSheet } from "react-native";
import { colors } from "./../../../themes";

export default StyleSheet.create({
  bodyViewContainer: {
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: colors.mainGreen,
  },
  body: {
    flexGrow: 1,
    gap: 8,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingBottom: 30,
    borderTopStartRadius: 65,
    borderTopEndRadius: 65,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  bodyContainer: {
    paddingVertical: 18,
    gap: 18,
    width: "100%",
    bottom: 0,
  },
  fieldsContainer: {
    gap: 10,
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    gap: 100,
    width: "100%",
  },
  alertError: {
    fontFamily: "Poppins_Medium",
    color: colors.red,
  },
});
