import { ScrollView, StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import MealAccordion from "@/components/MealAcordion"; // Certifique-se de ajustar o caminho para o arquivo correto
import useDietStore from "@/api/stores/dietStore";

export default function DietDetailScreen() {
    const {dietplan} = useDietStore()
    const meals = [
        {
            title: "08:30 - Café da manhã",
            items: [
                { title: "Café", description: "1 Xícara de café (80ml)", onSync: () => console.log("Sync Café") },
                { title: "Mamão Formosa", description: "1.5 Fatias (25g)", onSync: () => console.log("Sync Mamão") },
            ],
        },
        {
            title: "12:00 - Almoço",
            items: [
                { title: "Arroz", description: "100g", onSync: () => console.log("Sync Arroz") },
                { title: "Feijão", description: "50g", onSync: () => console.log("Sync Feijão") },
            ],
        },
        {
            title: "16:00 - Lanche da tarde",
            items: [
                { title: "Iogurte Natural", description: "1 Copo (200ml)", onSync: () => console.log("Sync Iogurte") },
                { title: "Granola", description: "30g", onSync: () => console.log("Sync Granola") },
            ],
        },
        {
            title: "18:30 - Pré-treino",
            items: [
                { title: "Banana", description: "1 Unidade (100g)", onSync: () => console.log("Sync Banana") },
                { title: "Pasta de Amendoim", description: "1 Colher (15g)", onSync: () => console.log("Sync Pasta de Amendoim") },
            ],
        },
        {
            title: "20:00 - Jantar",
            items: [
                { title: "Filé de Frango", description: "150g", onSync: () => console.log("Sync Filé de Frango") },
                { title: "Salada Mista", description: "200g", onSync: () => console.log("Sync Salada Mista") },
            ],
        },

    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listContainer}>
                <List.Section style={{gap:7}} title="Refeições">
                    {dietplan?.meals_list.map((meal, index) => (
                        <MealAccordion
                            key={index}
                            title={meal.name}
                            items={meal.items}
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
