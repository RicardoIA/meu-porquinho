import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.mainGreen,
    borderRadius: 45,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 10,
    width: "100%",
  },
  containerBody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  contentInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    width: "30%",
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
    width: 80,
    height: 80,
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
    width: "100%",
  },
  title: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  titleDark: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Medium",
    fontSize: 15,
  },
  titleBlue: {
    color: colors.blue,
    fontFamily: "Poppins_Medium",
    fontSize: 15,
  },
  titleWhite: {
    color: colors.ultraLightGreen,
    fontFamily: "Poppins_Medium",
    fontSize: 15,
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
  button: {
    marginTop: 16,
    width: "40%",
    paddingHorizontal: 0,
  },
});
