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
    color: "#00D09E",
    fontSize: 52,
    fontWeight: "700",
    textAlign: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  headerTitle: {},
  bodyContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
    borderTopStartRadius: 80,
    borderTopEndRadius: 80,
    padding: 40,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    display: "flex",
    marginHorizontal: "auto",
  },
  firstButtonContainer: {
    height: 50,
  },
  firstButtonLabel: {
    fontSize: 20,
    paddingTop: 3,
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
    height: 75,
  },
  ternaryButtonLabel: {
    height: 40,
    fontSize: 30,
    fontWeight: "600",
    textTransform: "uppercase",

    paddingTop: 16,
  },
  iconGetOut: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: defaultColors.lightGreen,
  },
});
