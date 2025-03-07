import { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MealItem } from "@/interfaces/diets";

const MealAccordion = ({ title, items }: { title: string, items: MealItem[] }) => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Accordion
            title={title}
            expanded={expanded}
            onPress={handlePress}
            left={(props) => <List.Icon {...props} icon="food" />}
        >
            {items.map((item: MealItem, index: number) => (
                <List.Item
                    key={index}
                    style={styles.listItem}
                    title={item.name}
                    description={`${item.name} ${item.qtd}`}
                    right={() => (
                        <TouchableOpacity
                            style={styles.syncButton}
                            onPress={() => {
                                console.log(item.name);
                            }}
                        >
                            <AntDesign name="sync" color="white" size={20} />
                        </TouchableOpacity>
                    )}
                />
            ))}
        </List.Accordion>
    );
};

const styles = StyleSheet.create({
    listItem: {
        paddingLeft: 20,
    },
    syncButton: {
        justifyContent: "center",
        backgroundColor: "blue",
        padding: 8,
        borderRadius: 10,
    },
});

export default MealAccordion;
