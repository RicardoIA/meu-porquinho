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
  titleContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins_SemiBold",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins_Medium",
  },
  fieldsContainer: {
    gap: 10,
  },
  noHaveAccount: {
    flexDirection: "row",
    gap: 10,
  },
  alreadyAccountText: {
    fontFamily: "Poppins_Light",
    color: colors.letterDarkGreen,
    fontSize: 13,
  },
  registerButtonText: {
    fontFamily: "Poppins_Light",
    fontSize: 13,
    color: colors.blue,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  alertError: {
    fontFamily: "Poppins_Medium",
    color: colors.red,
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
    gap: 100,
    width: 200,
  },
});
