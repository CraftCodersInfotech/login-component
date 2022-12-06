import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainView: { flex: 1, paddingHorizontal: 20 },
  image: { height: "85%", width: "100%", resizeMode: "stretch" },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#072450",
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#072450",
    marginVertical: 10,
  },
  forgotText: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
    color: "#5625CC",
    left: "60%",
    marginBottom: 20,
  },
  containermobile: {
    height: 40,
    width: "100%",
    borderWidth: 0.2,
    paddingHorizontal: 5,
    borderRadius: 7,
  },
  containerpassword: {
    height: 40,
    width: "100%",
    borderWidth: 0.2,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 7,
  },
  Button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  loginText: { fontSize: 16, color: "white", fontWeight: "500" },
  orMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.3,
  },
  orLine: { borderBottomWidth: 1, width: "35%", marginVertical: 20 },
  footerText: { flexDirection: "row", justifyContent: "center" },
  textLabel: { fontSize: 18, fontWeight: "400" },
  register: { fontSize: 17, color: "#5625CC", fontWeight: "bold" },
});
