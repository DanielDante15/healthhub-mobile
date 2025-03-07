import useDietStore from "@/api/stores/dietStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, List } from "react-native-paper";

export default function HomeScreen() {
  const [expandedDietas, setExpandedDietas] = useState(true);
  const [expandedTreinos, setExpandedTreinos] = useState(true);
  const { dietplans, getDietPlansByEmail, getDietPlan, isLoading } = useDietStore()
  const navigation = useNavigation();
  const handlePressDietas = () => setExpandedDietas(!expandedDietas);
  const handlePressTreinos = () => setExpandedTreinos(!expandedTreinos);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      try {
        const email = await AsyncStorage.getItem("email");
        if (email) {
          getDietPlansByEmail(email);
        }
      } catch (e) {
        console.error("Failed to fetch email from AsyncStorage", e);
      }
    });
  
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <List.Section title="Categorias">
          <List.Accordion

            title="Dietas"
            expanded={expandedDietas}
            onPress={handlePressDietas}
            left={(props) => <List.Icon {...props} icon="food" />}
          >
            {isLoading ? <ActivityIndicator />
              : dietplans.map(e => <List.Item key={e.id} title={e.name}
                onPress={() => {
                  getDietPlan(e)
                  router.push('/(auth)/diets')
                }}
              />
              )}
          </List.Accordion>

          <List.Accordion
            title="Treinos"
            expanded={expandedTreinos}
            onPress={handlePressTreinos}
            left={(props) => <List.Icon {...props} icon="weight" />}
          >
            <List.Item
              title="Treino de Ganho de massa"
              onPress={() => { router.push('/(auth)/workouts') }}
            />
            <List.Item title="Treino de perda de gordura"
              onPress={() => { router.push('/(auth)/workouts') }}
            />
          </List.Accordion>
        </List.Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
});
