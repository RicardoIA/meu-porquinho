import { StyleSheet } from "react-native";
import { colors } from "./../../../themes";

export default StyleSheet.create({
  bodyViewContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.mainGreen,
  },
  body: {
    flexGrow: 1,
    gap: 8,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
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

  buttons: {
    marginTop: 40,
    display: "flex",
    gap: 12,
    width: 200,
  },
});
