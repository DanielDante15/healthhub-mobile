import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

        width: "100%",
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 15,
        shadowOpacity: 0.2,
        shadowColor: "gray",
        shadowOffset: { height: 1, width: 1 }
    },
    card: { flexDirection: 'row', alignItems: "center", width: "100%", flex: 1, padding: 10 },
    info: { alignSelf: "stretch", justifyContent: "space-between", flex: 1, gap: 10 },
    name: { alignSelf: "flex-start", fontSize: 18, fontWeight: "600" },
    description: { fontSize: 16, height: "auto", width: "100%", flex: 1 },
    serviceContainer: { flexDirection: 'row', justifyContent: "space-between" },
    service: { alignSelf: "flex-start", fontSize: 16 },
    price: { fontSize: 18, fontWeight: "700" },
    time: { fontSize: 18, fontWeight: "700" }
})