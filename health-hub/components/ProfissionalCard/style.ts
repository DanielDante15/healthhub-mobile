import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        marginVertical:5,
        paddingHorizontal:15,
        backgroundColor: "white",
        borderRadius: 15,
        shadowOpacity: 0.2,
        shadowColor: "gray",
        shadowOffset: { height: 1, width: 1 }
    },
    card: { flexDirection: 'row', alignItems: "center", flex: 1, width: "100%" },
    info: { alignSelf: "flex-start", marginTop: 20, flex: 1, marginLeft: 10 },
    name: { alignSelf: "flex-start", fontSize: 18 },
    serviceContainer:{ flexDirection: 'row', justifyContent: "space-between" },
    service: { alignSelf: "flex-start", marginTop: 3, fontSize: 16 },
    price:{ alignSelf: "flex-start", marginTop: 3, fontSize: 16 }
})