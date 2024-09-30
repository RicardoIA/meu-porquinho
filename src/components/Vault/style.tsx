import { StyleSheet } from "react-native";
import { colors } from "./../../themes";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.mainGreen,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 25,
    width: "100%",
    gap: 20,
  },
  contentInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  content: {
    display: "flex",
    flex: 1,
    gap: 8,
    paddingVertical: 2,
  },

  iconVault: {
    backgroundColor: colors.mainGreen,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderWidth: 3,
    borderColor: colors.blue,
  },
  groupContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  groupContentInfo: {},
  titleGroupContent: {
    fontFamily: "Poppins_Regular",
    color: colors.letersAndIcons,

    fontSize: 12,
  },
  valueSafe: {
    fontFamily: "Poppins_Bold",
    color: colors.letersAndIcons,
    fontSize: 15,
  },
  labelContentBlue: {
    fontFamily: "Poppins_Bold",
    color: colors.blue,
    fontSize: 15,
    width: "70%",
  },
  title: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Medium",
    fontSize: 12,
  },
  verticalLine: {
    height: "100%",
    width: 2,
    borderRadius: 100,
    backgroundColor: colors.ultraLightGreen,
  },
  horizontalLine: {
    height: 2,
    width: "100%",
    borderRadius: 100,
    backgroundColor: colors.ultraLightGreen,
  },
});
