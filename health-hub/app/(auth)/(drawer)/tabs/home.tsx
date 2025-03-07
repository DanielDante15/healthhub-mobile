import useUserStore from "@/api/stores/userStore";
import ProfissionalCard from "@/components/ProfissionalCard";
import { professionalsMock } from "@/mocks/ProfissionalMocks";
import { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
  const { getAllSpecialists, users } = useUserStore();

  useEffect(() => {
    getAllSpecialists();
  }, [getAllSpecialists])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profissionais</Text>

      {users.map(prof => (
        <ProfissionalCard data={prof} key={prof.name} />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "700",
  },
});
