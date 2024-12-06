import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 5,
        borderWidth: 1.4,
        width: "100%",
        height: 120,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: "space-between"
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    date:{ flexDirection: "row", justifyContent: "space-between" }
})