import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 8,
    flex: 0.45,
    margin: 12,
  },
  buttonText: {
    color: colors.gray[100],
    fontSize: 18,
    fontWeight: "600",
  },
});
