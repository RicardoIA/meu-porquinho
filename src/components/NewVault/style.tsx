import { StyleSheet } from "react-native";
import { colors } from "./../../themes";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.mainGreen,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },
  containerBody: {
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
  },
  title: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Medium",
    fontSize: 15,
  },
  content: {
    flex: 1,
    paddingVertical: 15,
    gap: 5,
  },
  icon: {
    height: "100%",
  },
  contentGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  contentInfo: {},
  contentLabel: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Light",
    fontSize: 13,
  },
  contentValueContainer: {
    backgroundColor: colors.ultraLightGreen,
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 4,
  },
  contentValueBlack: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_SemiBold",
    fontSize: 14,
  },
  contentValueBlue: {
    color: colors.blue,
    fontFamily: "Poppins_SemiBold",
    fontSize: 14,
  },
});
