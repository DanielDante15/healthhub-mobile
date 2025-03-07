import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import WorkoutAccordion from "@/components/WorkoutAccordion";

import squatsImage from "@/assets/images/dante.jpeg";
import benchPressImage from "@/assets/images/dante.jpeg";

export default function WorkoutDetailScreen() {
    const workouts = [
        {
            title: "Treino A - Pernas",
            items: [
                {
                    title: "Agachamento Livre",
                    description: "4 séries de 12 repetições",
                    carga: "40kg",
                    tempo: "60s",
                    image: squatsImage, 
                },
                {
                    title: "Leg Press",
                    description: "4 séries de 10 repetições",
                    carga: "120kg",
                    tempo: "90s",
                    image: benchPressImage, 
                },
            ],
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listContainer}>
                <List.Section style={{ gap: 7 }} title="Treinos">
                    {workouts.map((workout, index) => (
                        <WorkoutAccordion
                            key={index}
                            title={workout.title}
                            items={workout.items}
                        />
                    ))}
                </List.Section>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    listContainer: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 10,
    },
});
