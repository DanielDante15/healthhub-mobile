import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1
  },
  tab: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  tabButton: {
    backgroundColor: "white",
    height: "100%",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    flex: .5,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: { fontSize: 20 },
});