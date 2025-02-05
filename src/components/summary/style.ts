import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[700],
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    margin: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.gray[200],
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    width: "100%",
  },
  item: {
    alignItems: "center",
  },
  masculine: {
    color: colors.blue[400],
    fontWeight: "600",
  },
  feminine: {
    color: colors.pink[400],
    fontWeight: "600",
  },
  label: {
    fontSize: 12,
    color: colors.gray[400],
    marginLeft: 4,
  },
  total: {
    marginTop: 8,
    color: colors.green[400],
    fontWeight: "bold",
  },
});
