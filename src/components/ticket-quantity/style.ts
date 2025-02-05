import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  radiusLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  radiusRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  buttonText: {
    color: colors.gray[100],
    fontSize: 20,
  },
  counterText: {
    width: 48,
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
});
