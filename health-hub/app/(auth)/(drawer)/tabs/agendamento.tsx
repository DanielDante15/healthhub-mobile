import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import useAppointmentStore from "@/api/stores/appointmentStore";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "expo-router";
import ScheduleCard from "@/components/ScheduleCard";

export default function HomeScreen() {
  const { getAppointmentsByEmail, appointments, isLoading } = useAppointmentStore();
  const [userInfo, setUserInfo] = useState<{ email: string } | null>(null);
  const navigation = useNavigation();

  const fetchAppointments = useCallback(() => {
    if (userInfo?.email) {
      getAppointmentsByEmail(userInfo.email);
    }
  }, [userInfo, getAppointmentsByEmail]);

  const loadUserInfo = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user-info");
      if (jsonValue) {
        setUserInfo(JSON.parse(jsonValue));
      } else {
        console.error("Nenhum dado de usuário encontrado no AsyncStorage.");
      }
    } catch (error) {
      console.error("Erro ao recuperar os dados do usuário:", error);
    }
  }, []);

  useEffect(() => {
    loadUserInfo();
  }, [loadUserInfo]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", fetchAppointments);
    return unsubscribe;
  }, [navigation, fetchAppointments]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Compromissos</Text>

      <ScrollView style={{flex:1,width:"100%",paddingHorizontal:20}}>
        {isLoading ?
          <ActivityIndicator />
          : appointments.length > 0
            ? appointments.map(data => (<ScheduleCard key={data.id} data={data} />))
            : <Text style={styles.appointmentsText}>

              Nenhum agendamento encontrado
            </Text>

        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  appointmentsText: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
    textAlign: "center",
  },
});
