import { StyleSheet } from "react-native";
import defaultColors from "./colors";

export default StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  title: {
    color: defaultColors.mainGreen,
    fontSize: 60,
    fontWeight: "700",
    textAlign: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    width: 300,
  },
  headerTitle: {
    color: defaultColors.letersAndIcons,
    fontFamily: "Poppins_SemiBold",
    lineHeight: 39,
    fontSize: 30,
    textAlign: "center",
  },
  bodyViewContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: defaultColors.mainGreen,
  },
  bodyContainer: {
    backgroundColor: "#fff",
    gap: 8,
    display: "flex",
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
    borderTopStartRadius: 70,
    borderTopEndRadius: 70,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  image: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    display: "flex",
    marginHorizontal: "auto",
  },
  firstButtonContainer: {
    height: 45,
  },
  firstButtonLabel: {
    fontSize: 20,
    paddingTop: 3,
    fontWeight: "700",
  },
  firstTextButtonLabel: {
    fontWeight: "700",
  },
  secondButton: {
    borderRadius: 10,
  },
  secondButtonContainer: {
    height: 40,
  },
  secondButtonLabel: {
    fontSize: 19,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  secondSmallButton: {
    borderRadius: 10,
  },
  secondSmallButtonContainer: {
    height: 30,
  },
  secondSmallButtonLabel: {
    height: 20,
    fontSize: 13,
    fontWeight: "700",
    borderRadius: 5,
  },
  ternaryButton: {
    borderRadius: 45,
  },
  ternaryButtonContainer: {
    height: 65,
  },
  ternaryButtonLabel: {
    fontFamily: "Poppins_SemiBold",
    height: 40,
    fontSize: 30,
    fontWeight: "600",
    paddingTop: 20,
  },
  iconGetOut: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: defaultColors.lightGreen,
  },
});
