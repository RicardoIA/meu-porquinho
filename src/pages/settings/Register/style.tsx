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
  fieldsContainer: {
    gap: 10,
  },
  alertError: {
    fontFamily: "Poppins_Medium",
    color: colors.red,
    textAlign: "center",
  },
  termsContainer: {},
  termsButtonsContainer: {
    flexDirection: "row",
  },
  termsText: {
    fontFamily: "Poppins_Medium",
    fontSize: 12,
    color: colors.letterDarkGreen,
    textAlign: "center",
  },
  termsTextButton: {
    fontFamily: "Poppins_Bold",
    fontSize: 13,
    color: colors.letterDarkGreen,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  alreadyAccount: {
    flexDirection: "row",
  },
  alreadyAccountText: {
    fontFamily: "Poppins_Light",
    color: colors.letterDarkGreen,
    fontSize: 13,
  },
  alreadyAccountLogin: {
    fontFamily: "Poppins_Light",
    fontSize: 13,
    color: colors.blue,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  buttons: {
    display: "flex",
    gap: 12,
    width: 200,
  },
});
