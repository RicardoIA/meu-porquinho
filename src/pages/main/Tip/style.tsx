import { StyleSheet } from "react-native";
import { colors } from "../../../themes";

export default StyleSheet.create({
  title: {
    color: colors.letersAndIcons,
    fontWeight: "700",
    fontSize: 30,
    width: 250,
    height: 90,
    textAlign: "justify",
    paddingVertical: 4,
    lineHeight: 28,
  },
  subtitle: {
    color: colors.letersAndIcons,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
    width: 250,
  },
  actionContainer: {
    width: "100%",
    gap: 18,
    paddingTop: 10,
  },
});
