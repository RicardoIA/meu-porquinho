import { StyleSheet } from "react-native";
import { colors } from "../../../themes";

export default StyleSheet.create({
  title: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_SemiBold",
    fontSize: 30,
    width: 300,
    height: 90,
    paddingVertical: 4,
    lineHeight: 28,
  },
  subtitle: {
    color: colors.letersAndIcons,
    fontFamily: "Poppins_Regular",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
    width: 300,
  },
  actionContainer: {
    width: "100%",
    gap: 18,
    paddingTop: 10,
  },
});
