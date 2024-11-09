import { StyleSheet } from "react-native";
import { colors } from "./../../../themes";

export default StyleSheet.create({
  headerMain: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerMainTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetingMessage: {},
  headerTitle: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 20,
    lineHeight: 22,
  },
  headerSubtitle: {
    fontFamily: "Poppins_Regular",
    fontSize: 14,
  },
  resumeAccount: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  resumeAccountGroup: {
    width: "45%",
  },
  resumeAccountHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resumeAccountTitle: {
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    paddingTop: 2,
  },
  resumeAccountValueWhite: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 24,
    textAlign: "center",
    color: colors.ultraLightGreen,
  },
  resumeAccountValueBlue: {
    fontFamily: "Poppins_SemiBold",
    fontSize: 24,
    textAlign: "center",
    color: colors.blue,
  },
  verticalLine: {
    height: "80%",
    width: 1,
    borderRadius: 100,
    backgroundColor: colors.ultraLightGreen,
  },
  bodyContainer: {
    paddingVertical: 16,
    gap: 14,
    width: "100%",
  },
  bodyVaults: {
    gap: 14,
    width: "100%",
  },
});
