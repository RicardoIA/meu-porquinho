import { StyleSheet } from "react-native";

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
});
