import { StyleSheet } from "react-native";
import { colors } from "./../../themes";

export default StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
  },
  containerBody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentInfo: {
    flexGrow: 1,
    width: 60,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentValue: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    backgroundColor: colors.blue,
  },
  valueSafe: {
    fontFamily: "Poppins_Bold",
    color: colors.letersAndIcons,
    textAlign: "right",
    fontSize: 15,
    width: "100%",
  },
  labelContentBlue: {
    fontFamily: "Poppins_Bold",
    color: colors.blue,
    textAlign: "right",
    fontSize: 15,
    width: "100%",
  },
  title: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Medium",
    fontSize: 15,
  },
  description: {
    color: colors.blue,
    fontFamily: "Poppins_SemiBold",
    fontSize: 12,
  },
  time: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Light",
    fontSize: 13,
  },
  verticalLine: {
    height: "70%",
    width: 1,
    borderRadius: 100,
    backgroundColor: colors.mainGreen,
  },
  button: {
    marginTop: 16,
    width: "40%",
    paddingHorizontal: 0,
  },
});
