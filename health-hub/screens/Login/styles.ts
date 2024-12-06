import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: 'space-evenly',
  },
  title: {
    marginTop: 10,
    fontSize: 40,
    textAlign: "center",
    fontWeight: 'bold',
  },
  inputContainter: {
    paddingHorizontal: 30,
    width: "100%"
  },
  button: {
    width: "60%",
    backgroundColor: "black",
  },
  buttonStyles: {
    alignItems: "center",
    paddingHorizontal: 40
  },
  loginButton: {
    fontSize: 24,
    color: "white"
  }

});