import { StyleSheet } from "react-native";
import { colors } from "./../../themes";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.mainGreen,
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: "100%",
  },
  containerBody: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  title: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Medium",
    fontSize: 15,
  },
  content: {
    paddingTop: 15,
    flex: 1,
    gap: 5,
  },
  icon: {
    height: "100%",
    margin: 0,
  },
  contentGroup: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    gap: 15,
  },
  contentInfo: {
    flexGrow: 1,
    flexBasis: 1,
  },
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
