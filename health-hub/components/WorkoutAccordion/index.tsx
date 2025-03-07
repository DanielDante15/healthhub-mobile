import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { List } from "react-native-paper";

export default function WorkoutAccordion({ title, items }: any) {
    return (
        <List.Accordion
            title={title}
            titleStyle={styles.accordionTitle}
            style={styles.accordion}
        >
            {items.map((item: any, index: any) => (
                <List.Item

                    key={index}
                    title={item.title}
                    description={() => (
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.descriptionText}>{item.description}</Text>
                            <Text style={styles.extraInfo}>Carga: {item.carga}</Text>
                            <Text style={styles.extraInfo}>Tempo: {item.tempo}</Text>
                        </View>
                    )}
                    right={() => (
                        <TouchableOpacity>
                            <Image
                                source={item.image}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    )}
                    style={styles.listItem}
                />
            ))}
        </List.Accordion>
    );
}

const styles = StyleSheet.create({
    accordion: {
        gap: 3,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 1,
        marginBottom: 7,
    },
    accordionTitle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    listItem: {
        gap: 10,
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 1,
        marginBottom: 10,
        borderBottomColor: "#e0e0e0",
    },
    descriptionContainer: {
        flexDirection: "column",
    },
    descriptionText: {
        fontSize: 14,
        color: "#333",
    },
    extraInfo: {
        fontSize: 12,
        color: "#666",
    },
    image: {
        width: 80,
        height: 80,
        marginLeft: 10,
        borderRadius: 5,
    },
});
